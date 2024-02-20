<script setup>
import { ref } from 'vue';
import { productsStore } from "@/stores/products";

const store = productsStore();

const formData = ref({
  title: '',
  description: '',
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  brand: '',
  category: '',
  thumbnail: ''
});

const createProduct = async () => {
  await store.addProduct(formData.value);
};

</script>

<template>
  <h1 class="h1">Add product</h1>

  <form @submit.prevent="createProduct()" class="add-product">
    <label for="title" class="label">Title:</label>
    <input
        type="text"
        id="title"
        name="title"
        required
        class="add-product-input"
        v-model="formData.title"
    ><br>

    <label for="description" class="label">Description:</label>
    <textarea
        id="description"
        name="description"
        rows="4"
        required
        class="add-product-input"
        v-model="formData.description"
    >An apple mobile which is nothing like apple
    </textarea><br>

    <label for="price" class="label">Price:</label>
    <input
        type="number"
        id="price"
        name="price"
        required
        class="add-product-input"
        v-model="formData.price"
    ><br>

    <label for="discountPercentage" class="label">Discount Percentage:</label>
    <input
        type="number"
        id="discountPercentage"
        name="discountPercentage"
        step="0.01"
        required
        class="add-product-input"
        v-model="formData.discountPercentage"
    ><br>

    <label for="rating" class="label">Rating:</label>
    <input
        type="number"
        id="rating"
        name="rating"
        step="0.01"
        required
        class="add-product-input"
        v-model="formData.rating"
    ><br>

    <label for="stock" class="label">Stock:</label>
    <input
        type="number"
        id="stock"
        name="stock"
        required
        class="add-product-input"
        v-model="formData.stock"
    ><br>

    <label for="brand" class="label">Brand:</label>
    <input
        type="text"
        id="brand"
        name="brand"
        required
        class="add-product-input"
        v-model="formData.brand"
    ><br>

    <label for="category" class="label">Category:</label>
    <input
        type="text"
        id="category"
        name="category"
        required
        class="add-product-input"
        v-model="formData.category"
    ><br>

    <label for="thumbnail" class="label">Thumbnail:</label>
    <input
        type="text"
        id="thumbnail"
        name="thumbnail"
        required
        class="add-product-input"
        v-model="formData.thumbnail"
    ><br>

    <input type="submit" value="Create new product" class="submit">
  </form>
</template>

<style scoped>
.add-product {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.label {
  margin-bottom: 4px;
}

.add-product-input {
  padding: 8px 4px;
  border: 1px solid #dddddd;
}

.submit {
  color: white;
  background-color: #4769fc;
  padding: 8px 16px;
  border: 1px solid #4769fc;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.submit:hover {
  color: #4769fc;
  background-color: #fff;
}
</style>
