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
import IconBackArrow from "../assets/icons/IconBackArrow.vue";
import { onMounted, ref } from "vue";
import ProductDetailCard from "../components/Cards/ProductDetailCard.vue";
import ProductActions from "../components/ProductActions.vue";
import NotFound from "../components/NotFound.vue";
import ProductVariation from "../components/ProductVariation.vue";
import PriceChart from "../components/Charts/PriceChart.vue";
import { useRoute } from "vue-router";
import Loader from "../components/Loader.vue";

import { useProductStore } from "../pinia/productStore.js";
import { useUserStore } from "../pinia/userStore.js";

// import { flatten } from "lodash";

const route = useRoute();

const storeProducts = useProductStore();
const storeUser = useUserStore();
const selectedSection = ref(0);

onMounted(() => {
  storeProducts.fetchById(route.params.id, { userId: storeUser.getUserId() });
});
const product = {
  name: "Amazon Essentials Men's Short Sleeve Crew neck T-Shirt",
  image:
    "https://s3-alpha-sig.figma.com/img/4317/a36f/f76deef6a57c602511e6ad3a14ba02ca?Expires=1695600000&Signature=HiPXoOK52W2lhVSWwP8gkqQgJe5CQwSdonwsiZtOsbpHU1rOWXdqCtWNnrpJkZuwq19GIevnoqOpdk2ADZ9DFo3~szT9p6CJzORDx~qSPqgbqubMUUrqVIYJWhYmbjPhcHWSKqMBuhWE3HTO-jz4XTJ5L8G2bkhNxb-myHgyB~dA84~AMcEvmV5Ct-dcYdIIxoX2Ofv3lm8-STMUSHJ1Rluqhx4BqlOWuRSivtUiV5O9rqw9i6eRiHhuI9h1hAsLqF~pwcy82pVYffEcph4MBo6jrz5qyKm7WuGEx~UDLw2izywmdDXJzw6Yfz4DETcz0LsvEGJ9gLV~sdZqxQLYkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  price: 20.0,
  rating: {
    accumulative: 4,
    total: 45235,
    starPercentages: {
      5: 70,
      4: 16,
      3: 8,
      2: 3,
      1: 3,
    },
  },
  attributeVariations: [
    { Color: "Red", Size: "Small" },
    { Color: "Black", Size: "Medium" },
    { Color: "Grey", Size: "Large" },
  ],
  dimensions: { Length: 23, Width: 23, Height: 23 },
  demand: 4,
  weight: 0.6,
  asin: "B0BSXS7NDG, C0VSXS7NDG, L0ACVK7NDG, P0BSXS7NDG, G1VSXS7NDG, J0BSXS7NDG",
  category: "Men's T-Shirts",
  rank: "3",
  TotalItems: "100",
};
</script>
