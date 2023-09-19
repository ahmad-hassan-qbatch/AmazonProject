<template lang="">
  <div>
    <p class="text-[#979797] text-[12px] my-[6px]">Price</p>
    <p class="text-[#031625] text-[24px] mb-[6px]">${{ product.price }}</p>

    <p class="text-[#979797] text-[12px] my-[6px]">Reviews</p>

    <div class="flex items-center mb-[6px]">
      <StarComponentVue :earned="product.rating.accumulative" />
      <button @click="() => handleShowRatingDetails(!ratingDetail)">
        <img src="../../assets/icons/dropdown.svg" alt="" />
      </button>

      <p class="text-[12px] text-[#27C498]">
        {{ numberWithCommas(product.rating.total) }}
      </p>
    </div>

    <div class="relative">
      <div v-if="ratingDetail" class="absolute -right-[16px]">
        <RatingDetail
          v-on-click-outside="() => handleShowRatingDetails(false)"
          :rating="product.rating"
        />
      </div>
    </div>
    <h2 class="text-[#979797] text-[12px] my-[6px]">BSR</h2>
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
</template>
<script setup>
import StarComponentVue from "../StarComponent.vue";
import { ref } from "vue";
import { numberWithCommas } from "../../utilities/helperMethods.js";
import { vOnClickOutside } from "@vueuse/components";
import RatingDetail from "./RatingDetail.vue";

const ratingDetail = ref(false);

const handleShowRatingDetails = (value) => {
  ratingDetail.value = value;
};
</script>
<style lang=""></style>
