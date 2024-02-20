<template>
  <h1 class="h1">productDetails</h1>
  <div class="product-details-container">
    <div class="product-details-image">
      <img
          class="product-details-picture"
          :src="selectedProduct.thumbnail"
          :alt="selectedProduct.title"
      >
    </div>

    <div class="product-details">
      <h2 class="product-title">{{selectedProduct.title}}</h2>
      <p class="product-brand">Brand:{{selectedProduct.brand}}</p>
      <p class="product-description">Description: {{selectedProduct.description}}</p>
      <p class="product-category">Category: {{selectedProduct.category}}</p>
      <p class="product-rating">Rating: {{selectedProduct.rating}}</p>
      <p class="product-price">Price: {{selectedProduct.price}}$</p>

      <div class="buttons">
        <button class="edit-btn" @click="openModal">Update</button>
        <Teleport to="body">
          <UpdateProductModal
              :isModalOpen="isModalOpen"
              :closeModal="closeModal"
          />
        </Teleport>
        <button class="delete-btn" @click="deleteProduct">Delete</button>
      </div>
    </div>
  </div>

</template>

<script setup>
import {computed, ref} from 'vue';
import { useRoute } from 'vue-router';
import { productsStore } from '@/stores/products.js';
import UpdateProductModal from '@/components/UpdateProductModal.vue';

const store = productsStore();
const route = useRoute();
const isModalOpen = ref(false);

const selectedProduct = computed(() => {
  return store.products.find((item) => item.id === Number(route.params.id));
});

const deleteProduct = async() => {
  const productId = Number(route.params.id);
  await store.deleteProduct(productId);
};

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
}

</script>

<style>
.h1 {
  padding: 24px 0;
}

.product-details-container {
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
}

.product-details {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.product-details-picture {
  max-width: 100%;
  width: 100%;
}

.buttons {
  display: flex;
  gap: 16px;
  margin-top: 12px;
}

.edit-btn {
  padding: 10px 26px;
  background-color: #ffbf4b;
  font-weight: bold;
  color: #fff;
  border: 1px solid #ffbf4b;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.edit-btn:hover {
  background-color: #fff;
  color: #ffbf4b;
}

.delete-btn {
  padding: 10px 26px;
  background-color: #ff2424;
  color: #fff;
  font-weight: bold;
  border: 1px solid #ff2424;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.delete-btn:hover {
  background-color: #fff;
  color: #ff2424;
}
</style>
