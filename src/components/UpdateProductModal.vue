<template>
  <div
      v-if="isModalOpen"
      class="modal"
      :style="{ display: isModalOpen ? 'block' : 'none' }"
  >
    <div class="modal-content">
      <h1 class="h1">Edit current product</h1>

      <form class="edit-product">
        <label for="title" class="label">Title:</label>
        <input
            type="text"
            id="title"
            name="title"
            required
            class="edit-product-input"
            v-model="updatedProduct.title"
        ><br>

        <label for="description" class="label">Description:</label>
        <textarea
            id="description"
            name="description"
            rows="4"
            required
            class="edit-product-input"
            v-model="updatedProduct.description"
        >An apple mobile which is nothing like apple
    </textarea><br>

        <label for="price" class="label">Price:</label>
        <input
            type="number"
            id="price"
            name="price"
            required
            class="edit-product-input"
            v-model="updatedProduct.price"
        ><br>

        <label for="discountPercentage" class="label">Discount Percentage:</label>
        <input
            type="number"
            id="discountPercentage"
            name="discountPercentage"
            step="0.01"
            required
            class="edit-product-input"
            v-model="updatedProduct.discountPercentage"
        ><br>

        <label for="rating" class="label">Rating:</label>
        <input
            type="number"
            id="rating"
            name="rating"
            step="0.01"
            required
            class="edit-product-input"
            v-model="updatedProduct.rating"
        ><br>

        <label for="stock" class="label">Stock:</label>
        <input
            type="number"
            id="stock"
            name="stock"
            required
            class="edit-product-input"
            v-model="updatedProduct.stock"
        ><br>

        <label for="brand" class="label">Brand:</label>
        <input
            type="text"
            id="brand"
            name="brand"
            required
            class="edit-product-input"
            v-model="updatedProduct.brand"
        ><br>

        <label for="category" class="label">Category:</label>
        <input
            type="text"
            id="category"
            name="category"
            required
            class="edit-product-input"
            v-model="updatedProduct.category"
        ><br>

        <label for="thumbnail" class="label">Thumbnail:</label>
        <input
            type="text"
            id="thumbnail"
            name="thumbnail"
            required
            class="edit-product-input"
            v-model="updatedProduct.thumbnail"
        ><br>
      </form>
      <div class="edit-buttons">
        <button @click="updateProduct" class="edit-product-btn">Update Product</button>
        <button @click="closeModal" class="cancel-editing-btn">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import { productsStore } from '@/stores/products.js';
import {useRoute} from "vue-router";

const { isModalOpen, closeModal } = defineProps(['isModalOpen', 'closeModal']);

const store = productsStore();
const route = useRoute();

const updatedProduct = ref({
  title: '',
  description: '',
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  brand: '',
  category: '',
  thumbnail: '',
});

const updateProduct = async () => {
  await store.updateProduct(Number(route.params.id), updatedProduct.value);
  closeModal();
};

</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  border-radius: 5px;
}

.edit-product {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.edit-product-input {
  padding: 8px 4px;
  border: 1px solid #dddddd;
}

.edit-buttons {
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: flex-end;
}

.edit-product-btn {
  color: white;
  background-color: #366b16;
  padding: 10px 26px;
  border: 1px solid #366b16;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.cancel-editing-btn {
  cursor: pointer;
  padding: 10px 26px;
  background-color: #ff2424;
  color: #fff;
  font-weight: bold;
  border: 1px solid #ff2424;
  transition: all 0.3s ease-in-out;
}

.edit-product-btn:hover {
  color: #366b16;
  background-color: #fff;
}

.cancel-editing-btn:hover {
  background-color: #fff;
  color: #ff2424;
}
</style>
