<template>
  <main>
    <Header />
    <RouterView />
  </main>
</template>

<script setup>
import Header from "@/components/Header.vue";
import {onMounted} from "vue";
import {productsStore} from "@/stores/products.js";

const store = productsStore();

onMounted(async () => {
  try {
    if (store.products.length === 0) {
      const response = await store.fetchProductsFromDB();
      const json = await response.json();
      store.products = json.products;
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
});
</script>

<style scoped>

</style>
