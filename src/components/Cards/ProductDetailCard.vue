<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="w-[346px] h-[484px] px-[16px] py-[16px] bg-white">
    <div class="pb-[16px] border-b mb-[16px]">
      <img
        :src="product.image"
        alt=""
        class="w-[298px] h-[195px] object-scale-down"
      />
    </div>
    <h1 class="text-[16px] mb-[6px]">
      {{ product.name }}
    </h1>
    <div>
      <p class="text-[#979797] text-[12px] my-[6px] font-semibold">Price</p>
      <p class="text-[#031625] text-[24px] mb-[6px]">${{ product.price }}</p>

      <p class="text-[#979797] text-[12px] my-[6px] font-semibold">Reviews</p>

      <div class="">
        <div class="flex items-center mb-[6px]">
          <StarComponentVue :earned="product.rating.accumulative" />
          <div class="relative mt-1">
            <button @click="() => handleShowRatingDetails(!ratingDetail)">
              <img src="../../assets/icons/dropdown.svg" alt="" />
            </button>
            <div v-if="ratingDetail" class="absolute -right-36">
              <RatingDetail
                v-on-click-outside="() => handleShowRatingDetails(false)"
                :rating="product.rating"
              />
            </div>
          </div>
          <div>
            <p class="text-[12px] text-[#27C498]">
              {{ numberWithCommas(product.rating.total) }}
            </p>
          </div>
        </div>
      </div>
      <h2 class="text-[#979797] text-[12px] my-[6px] font-semibold">BSR</h2>
      <div class="flex items-center mb-[16px]">
        <p
          class="flex items-center justify-center text-[12px] text-white bg-[#0FB600] rounded-[2px] w-[22px] h-[18px] mr-1"
        >
          #{{ product.rank }}
        </p>
        <p class="text-[14px]">
          in {{ product.category }}
          <span class="text-[#27C498]">(Top {{ product.TotalItems }})</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, ref } from "vue";
import StarComponentVue from "../StarComponent.vue";
import { numberWithCommas } from "../../utilities/helperMethods.js";
import { vOnClickOutside } from "@vueuse/components";
import RatingDetail from "./RatingDetail.vue";

const ratingDetail = ref(false);

const { product } = defineProps({
  product: { type: Object, required: true },
});

const handleShowRatingDetails = (value) => {
  ratingDetail.value = value;
};
</script>
<style scoped></style>
