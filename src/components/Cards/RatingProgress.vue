<template lang="">
  <div class="text-[14px] text-[#27C498] font-[400px] flex items-center">
    <p class="w-[41px]">{{ starNumber }} Star</p>
    <div class="px-2 py-0 m-0">
      <ProgressBar :progress="progress" />
    </div>
    <p class="w-[26px]">
      <span class="float-right">{{ starPercentage }}%</span>
    </p>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

import ProgressBar from "./ProgressBar.vue";

const { starNumber, starPercentage } = defineProps({
  starNumber: { type: Number, required: true },
  starPercentage: { type: Number, required: true },
});

const progress = ref((starPercentage / 100) * 152);
</script>
