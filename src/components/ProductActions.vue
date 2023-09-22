<template lang="">
  <div id="buttons" class="flex">
    <Button
      role="secondary"
      styles="px-[16px] h-[40px] flex items-center text-[#27C498] font-semibold text-[14px] hover:text-white hover:bg-[#27C498]"
    >
      <IconHeart />
      <span class="ml-[6px]">View More Filters</span>
    </Button>

    <Button
      role="secondary"
      styles="px-[16px] h-[40px] flex items-center text-[#27C498] font-semibold text-[14px] hover:text-white hover:bg-[#27C498]"
    >
      <IconAmazonLogo />
      <span class="ml-[6px]">View on Amazon</span>
    </Button>

    <Button
      role="primary"
      styles="px-[16px] h-[40px] flex items-center font-semibold text-[14px] hover:text-[#27C498] hover:bg-white"
      @click="() => handleToggleFilter(true)"
    >
      <IconLocation />
      <span class="ml-[6px]">Track this Product</span>
    </Button>
  </div>
</template>

<script setup>
import Button from "./Button.vue";

import IconAmazonLogo from "../assets/icons/IconAmazonLogo.vue";
import IconHeart from "../assets/icons/IconHeart.vue";
import IconLocation from "../assets/icons/IconLocation.vue";
</script>

<style scoped>
#buttons > * {
  margin-left: 16px;
}
</style>
