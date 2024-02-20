import {defineStore} from "pinia";
import router from "@/router/index.js";

export const productsStore = defineStore('products', {
  state: () => ({
    products: []
  }),

  actions: {
    async fetchProductsFromDB() {
      return await fetch('https://dummyjson.com/products');
    },

    async addProduct(data) {
      try {
        const response = await fetch('https://dummyjson.com/products/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          const responseData = await response.json();
          await this.addNewProduct(responseData);
          await router.push({name: 'Catalogue'});
        } else {
          console.error('Failed to add product. Server returned:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error adding product:', error);
      }
    },

    async addNewProduct(product) {
      console.log(this.products, 'before')
      this.products.unshift(product);
      console.log(this.products, 'after')
    },

    async deleteProduct(id) {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          const responseData = await response.json();
          const index = this.products.findIndex((product) => product.id === id);

          if (index !== -1) {
            this.products.splice(index, 1);
          }
          await router.push({ name: 'Catalogue' });
        } else {
          console.error('Failed to delete product. Server returned:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    },

    async updateProduct(id, updatedProductData) {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedProductData),
        });

        if (response.ok) {
          this.updateLocalProduct(id, updatedProductData);
        } else {
          console.error('Failed to update product');
        }
      } catch (error) {
        console.error('Error updating product:', error);
      }
    },

    updateLocalProduct(id, updatedProductData) {
      const index = this.products.findIndex((product) => product.id === id);

      if (index !== -1) {
        this.products[index] = { ...this.products[index], ...updatedProductData };
      }
    }

  }
})
