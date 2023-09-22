<template lang="">
  <div class="flex items-center justify-between w-full">
    <div class="flex items-center">
      <button @click="$router.go(-1)">
        <IconBackArrow class="mr-3" />
      </button>
      <h1 class="text-[#272B41] text-[24px] font-bold tracking-wide">
        Product Details
      </h1>
    </div>
    <ProductActions />
  </div>
  <div v-if="!storeProducts?.loading">
    <div v-if="storeProducts?.productDetails?.id">
      <div class="my-6 flex justify-between h-auto">
        <div>
          <ProductDetailCard :product="storeProducts?.productDetails" />
        </div>
        <div
          class="w-[722px] min-h-[730px] bg-white border p-[24px] border-[#F1F2F6]"
        >
          <h1 class="text-[#272B41] text-[24px] font-bold tracking-wide">
            Additional Details
          </h1>
          <div class="grid grid-cols-3">
            <button
              :class="`text-[12px] border-b-2 p-[12px] ${
                selectedSection === 0
                  ? 'text-[#27C498] border-[#27C498]'
                  : 'text-[#979797] border-[#E1E1E1B2]'
              }`"
              @click="selectedSection = 0"
            >
              Price History
            </button>
            <button
              :class="`text-[12px] border-b-2 p-[12px] ${
                selectedSection === 1
                  ? 'text-[#27C498] border-[#27C498]'
                  : 'text-[#979797] border-[#E1E1E1B2]'
              }`"
              @click="selectedSection = 1"
            >
              Sales History
            </button>
            <button
              :class="`text-[12px] border-b-2 p-[12px] ${
                selectedSection === 2
                  ? 'text-[#27C498] border-[#27C498]'
                  : 'text-[#979797] border-[#E1E1E1B2]'
              }`"
              @click="selectedSection = 2"
            >
              Out of Stock History
            </button>
          </div>

          <div v-if="selectedSection == 0" class="flex flex-col">
            <PriceChart />
          </div>

          <div
            v-if="selectedSection == 1"
            class="flex items-center justify-center h-[52%]"
          >
            <NotFound />
          </div>
          <div
            v-if="selectedSection == 2"
            class="flex items-center justify-center h-[52%]"
          >
            <NotFound />
          </div>

          <ProductVariation
            class="mt-[40px]"
            :data="{
              asin: storeProducts?.productDetails?.variations?.map((item) => {
                return item.asin;
              }),
              attributeVariations:
                storeProducts?.productDetails?.variations?.map((item) => {
                  return item.attributes;
                }),
              dimensions: {
                Length: storeProducts?.productDetails?.length,
                Width: storeProducts?.productDetails?.width,
                Height: storeProducts?.productDetails?.height,
              },
              weight: storeProducts?.productDetails?.weight,
              demand: storeProducts?.productDetails?.opportunity_score || 0,
            }"
          />
        </div>
      </div>
    </div>
    <div v-else class="flex items-center justify-center h-[80%]">
      <NotFound />
    </div>
  </div>
  <div v-else class="flex items-center justify-center h-[80%]">
    <Loader />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import ProductDetailCard from "../components/Cards/ProductDetailCard.vue";
import ProductActions from "../components/ProductActions.vue";
import NotFound from "../components/NotFound.vue";
import ProductVariation from "../components/ProductVariation.vue";
import PriceChart from "../components/Charts/PriceChart.vue";
import Loader from "../components/Loader.vue";

import IconBackArrow from "../assets/icons/IconBackArrow.vue";

import { useProductStore } from "../pinia/productStore.js";
import { useUserStore } from "../pinia/userStore.js";

const route = useRoute();

const storeProducts = useProductStore();
const storeUser = useUserStore();
const selectedSection = ref(0);

onMounted(() => {
  storeProducts.fetchById(route.params.id, { userId: storeUser.getUserId() });
});
</script>
