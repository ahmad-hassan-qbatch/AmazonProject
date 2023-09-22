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

<script setup>
import { defineProps } from "vue";

import CrossIcon from "../assets/icons/CrossIcon.vue";

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
