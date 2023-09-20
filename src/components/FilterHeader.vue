<script setup>
import CrossIcon from "../assets/icons/CrossIcon.vue";

import { defineProps } from "vue";

const { heading, handleToggleFilter } = defineProps({
  handleToggleFilter: {
    type: Function,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
});
</script>

<template lang="">
  <div
    class="flex justify-between items-center text-black py-[16px] px-[24px] border-b border-[#EEEBEB]"
  >
    <h2 class="text-[#272B41] text-[20px] font-[700]">{{ heading }}</h2>
    <button @click="() => handleToggleFilter(false)">
      <CrossIcon />
    </button>
  </div>
</template>
