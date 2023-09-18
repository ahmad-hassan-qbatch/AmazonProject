<!-- eslint-disable vue/attribute-hyphenation -->
<template lang="">
  <div class="flex items-center justify-between w-full">
    <h1 class="text-[#272B41] text-[24px] font-bold tracking-wide">Results</h1>
    <FilterSection :showExports="showExports" />
  </div>
  <div class="grid grid-cols-4 gap-y-[24px] gap-x-[54px] mt-[24px]">
    <div
      v-for="(product, index) in dummyProducts"
      :key="index"
      class="w-[252px]"
    >
      <ProductCard :product="product" :handleShowExports="handleShowExports" />
    </div>
  </div>
</template>

<script setup>
import FilterSection from "../components/FilterSection.vue";
import ProductCard from "../components/Cards/ProductCard.vue";
import { ref } from "vue";
const showExports = ref(0);
const dummyProducts = ref(
  Array(8).fill({
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
      // fiveStar: 70,
      // fourStar: 16,
      // threeStar: 8,
      // twoStar: 3,
      // oneStar: 3,
    },
    category: "Men's T-Shirts",
    rank: "3",
    TotalItems: "100",
  }),
);

const handleShowExports = (value) => {
  if (value) {
    showExports.value += 1;
  } else showExports.value -= 1;
};
</script>

<style scoped></style>
