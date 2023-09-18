<template>
  <div class="mb-[24px]">
    <p class="text-[#979797] text-[12px] font-semibold mb-[6px]">
      {{ title }}
    </p>
    <div class="flex justify-between">
      <input
        type="text"
        class="border border-[#E9E9EA] w-[153px] h-[36px] rounded px-[16px]"
        placeholder="Min"
      />
      <input
        type="text"
        class="border border-[#E9E9EA] w-[153px] h-[36px] rounded px-[16px]"
        placeholder="Max"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

// eslint-disable-next-line no-unused-vars
const { title, MinRef, MaxRef } = defineProps({
  title: { type: String, required: true },
  minRef: { type: Number, default: 0, required: false },
  maxRef: { type: Number, default: 5, required: false },
});
</script>
