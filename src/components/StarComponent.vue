<script setup>
import { defineProps } from "vue";

const { total, earned } = defineProps({
  total: { type: Number, default: 5 },
  earned: { type: Number, default: 0 },
});
</script>

<template>
  <div class="flex">
    <div v-for="(n, index) in earned" :key="index">
      <img src="../assets/icons/starFilled.svg" alt="" />
    </div>
    <div v-for="(n, index) in total - earned" :key="index">
      <img src="../assets/icons/starEmpty.svg" alt="" />
    </div>
  </div>
</template>
