<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="w-[252px] px-[16px] py-[16px] bg-white">
    <div class="pb-[16px] border-b mb-[16px]">
      <CheckBox :handleChangeCheck="handleShowExports" />

      <img
        :src="product?.image || defaultData.image"
        alt=""
        class="w-[220px] h-[125px] object-scale-down"
      />
    </div>

    <div>
      <router-link
        to="/products/1"
        class="text-[14px] mb-[6px] hover:text-[#27C498]"
      >
        <h1 class="max-h-20 overflow-hidden">
          {{ product?.title }}
        </h1>
      </router-link>

      <p class="text-[#979797] text-[12px] my-[6px]">Price</p>
      <p class="text-[#031625] text-[24px] mb-[6px]">${{ product?.price }}</p>
    </div>

    <p class="text-[#979797] text-[12px] my-[6px]">Reviews</p>

    <div class="flex items-center mb-[6px]">
      <StarComponentVue :earned="product?.reviews" />
      <button @click="() => handleShowRatingDetails(!ratingDetail)">
        <img src="../../assets/icons/dropdown.svg" alt="" />
      </button>

      <p class="text-[12px] text-[#27C498]">
        {{ numberWithCommas(product?.reviews || defaultData?.reviews?.total) }}
      </p>
    </div>

    <div class="relative">
      <div v-if="ratingDetail" class="absolute -right-[16px]">
        <RatingDetail
          v-on-click-outside="() => handleShowRatingDetails(false)"
          :rating="product?.reviews || defaultData.reviews"
        />
      </div>
    </div>
    <h2 class="text-[#979797] text-[12px] my-[6px]">BSR</h2>
    <div class="flex items-center mb-[16px]">
      <p
        class="flex items-center justify-center text-[12px] text-white bg-[#0FB600] rounded-[2px] px-1 h-[18px] mr-1"
      >
        #{{ product?.category_bsr }}
      </p>
      <p class="text-[14px]">
        in {{ product?.main_category_name }}
        <span class="text-[#27C498]">(Top {{ product?.bsr }})</span>
      </p>
    </div>
    <Button
      role="secondary"
      styles="text-[14px] w-full hover:text-white hover:bg-[#27C498]"
    >
      View More Details</Button
    >
  </div>
</template>
<script setup>
import { defineProps, ref } from "vue";
import CheckBox from "../CheckBox.vue";
import StarComponentVue from "../StarComponent.vue";
import { numberWithCommas } from "../../utilities/helperMethods.js";
import { vOnClickOutside } from "@vueuse/components";
import Button from "../Button.vue";
import RatingDetail from "./RatingDetail.vue";

const defaultData = {
  image:
    "https://s3-alpha-sig.figma.com/img/4317/a36f/f76deef6a57c602511e6ad3a14ba02ca?Expires=1695600000&Signature=HiPXoOK52W2lhVSWwP8gkqQgJe5CQwSdonwsiZtOsbpHU1rOWXdqCtWNnrpJkZuwq19GIevnoqOpdk2ADZ9DFo3~szT9p6CJzORDx~qSPqgbqubMUUrqVIYJWhYmbjPhcHWSKqMBuhWE3HTO-jz4XTJ5L8G2bkhNxb-myHgyB~dA84~AMcEvmV5Ct-dcYdIIxoX2Ofv3lm8-STMUSHJ1Rluqhx4BqlOWuRSivtUiV5O9rqw9i6eRiHhuI9h1hAsLqF~pwcy82pVYffEcph4MBo6jrz5qyKm7WuGEx~UDLw2izywmdDXJzw6Yfz4DETcz0LsvEGJ9gLV~sdZqxQLYkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  reviews: {
    total: 0,
    starPercentages: {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0,
    },
  },
  category: "Men's T-Shirts",
  rank: "3",
  TotalItems: "100",
};

const ratingDetail = ref(false);

const { product, handleShowExports } = defineProps({
  product: { type: Object, required: true },
  handleShowExports: { type: Function, required: true },
});

const handleShowRatingDetails = (value) => {
  ratingDetail.value = value;
};
</script>
<style scoped></style>
