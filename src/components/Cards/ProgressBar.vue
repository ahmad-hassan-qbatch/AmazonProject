<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="152"
    height="16"
    viewBox="0 0 152 16"
    fill="none"
  >
    <rect
      x="0.5"
      y="0.5"
      width="151"
      height="15"
      rx="3"
      fill="#F4F4F8"
      stroke="#C6D0DC"
    />
    <rect :width="progress" height="16" rx="3" fill="#FF9900" />
  </svg>
</template>

<script setup>
import { defineProps } from "vue";

const { progress } = defineProps({
  progress: { type: Number, required: true },
});
</script>
