<template lang="">
  <div class="flex items-center justify-between w-full">
    <div class="flex items-center">
      <IconBackArrow class="mr-3" />
      <h1 class="text-[#272B41] text-[24px] font-bold tracking-wide">
        Product Details
      </h1>
    </div>
    <ProductActions />
  </div>
  <div class="my-6 flex justify-between">
    <ProductDetailCard :product="product" />
    <div class="w-[722px] h-[730px] bg-white border p-[24px] border-[#F1F2F6]">
      <h1 class="text-[#272B41] text-[24px] font-bold tracking-wide">
        Additional Details
      </h1>
      <div class="grid grid-cols-3"></div>
    </div>
  </div>
</template>

<script setup>
import IconBackArrow from "../assets/icons/IconBackArrow.vue";
import ProductDetailCard from "../components/Cards/ProductDetailCard.vue";
import ProductActions from "../components/ProductActions.vue";

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
  category: "Men's T-Shirts",
  rank: "3",
  TotalItems: "100",
};
</script>

<style lang=""></style>
