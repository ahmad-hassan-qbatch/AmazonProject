<template lang="">
  <div class="flex items-center justify-between w-full">
    <h1 class="text-[#272B41] text-[24px] font-bold tracking-wide">Results</h1>
    <FilterSection :show-exports="showExports" />
  </div>

  <div v-if="!storeProducts.loading" class="h-[80%]">
    <div
      v-if="storeProducts?.products.length"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-[24px] gap-x-[50px] mt-[24px]"
    >
      <div
        v-for="(product, index) in storeProducts?.products"
        :key="index"
        class="w-[252px]"
      >
        <ProductCard
          :product="product"
          :handle-show-exports="handleShowExports"
        />
      </div>
    </div>
    <div v-else class="flex justify-center items-center bg-transparent h-[80%]">
      <NotFound />
    </div>
    <Pagination
      :current-page="parseInt($route.query.pageNo) || 1"
      :total-pages="storeProducts.totalPages"
      :handle-page-no-click="
        (pageno) => {
          $router.push({
            path: '/products',
            query: { ...storeProducts.getFilterParams(), pageNo: pageno },
          });
        }
      "
    />
  </div>
  <div v-else class="flex items-center justify-center h-[80%]">
    <Loader />
  </div>
</template>

<script setup>
import FilterSection from "../components/FilterSection.vue";
import ProductCard from "../components/Cards/ProductCard.vue";
import { ref, watchEffect } from "vue";
import { useProductStore } from "../pinia/productStore.js";
import { useRoute } from "vue-router";
import Loader from "../components/Loader.vue";
import NotFound from "../components/NotFound.vue";
import Pagination from "../components/Pagination.vue";

const route = useRoute();

const showExports = ref(0);
const storeProducts = useProductStore();

watchEffect(async () => {
  if (route.query.pageNo === undefined || route.query.pageNo > 0) {
    await storeProducts.fetchAllProducts(route.query);
  }
  storeProducts.setFilterParams(route.query);
});

const handleShowExports = (value) => {
  if (value) {
    showExports.value += 1;
  } else showExports.value -= 1;
};
</script>
