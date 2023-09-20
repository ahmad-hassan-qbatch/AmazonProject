<script setup>
import Button from "../Button.vue";
import RatingProgress from "./RatingProgress.vue";
import StarComponent from "../StarComponent.vue";

import { defineProps } from "vue";
import { numberWithCommas } from "../../utilities/helperMethods.js";

const { rating } = defineProps({ rating: { type: Object, required: true } });
</script>

<template lang="">
  <div
    class="w-[272px] h-[300px] bg-white border broder-[#F1F2F6] rounded-[5px] p-4 flex flex-col items-center justify-center shadow-[0px_4px_16px_0px_rgba(0,0,0,0.16)]"
  >
    <div class="border-b border-[#EEEBEB] pb-[8px]">
      <div class="flex items-center">
        <StarComponent :earned="rating.accumulative" />
        <p class="text-[#272B41] text-[16px] font-semibold ml-[6px]">
          {{ rating.accumulative }} out of 5
        </p>
      </div>
      <p class="text-[#031625] text-[14px] font-medium py-[8px]">
        {{ numberWithCommas(rating.total) }} Global Ratings
      </p>

      <RatingProgress
        v-for="(value, index) in Object.keys(rating.starPercentages).reverse()"
        :key="index"
        class="py-[5px]"
        :star-number="parseInt(value)"
        :star-percentage="rating.starPercentages[value]"
      />
    </div>

    <Button
      role="secondary"
      styles="border-[0px] py-[0px] text-[14px] mt-[16px] flex items-center"
    >
      <span class="mr-[3px]">See Customer Reviews</span>
      <img src="../../assets/icons/rightArrow.svg" alt="" />
    </Button>
  </div>
</template>
