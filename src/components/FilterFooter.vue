<template lang="">
  <div
    class="flex justify-end items-center text-black p-[24px] border-t border-[#EEEBEB]"
  >
    <Button
      role="secondary"
      styles="py-1 border-[#E3E6EF] mr-[16px] px-[16px] text-[#9299B8] hover:text-white hover:bg-[#27C498]"
      @click="() => handleToggleFilter(false)"
    >
      <span class="text-[14px]">Cancel</span>
    </Button>
    <Button
      role="primary"
      styles="py-1 border-[#E3E6EF] px-[16px] text-[white] hover:text-[#27C498] hover:bg-white"
      @click="handleApplyFilters"
    >
      <span class="text-[14px]">Apply</span>
    </Button>
  </div>
</template>
<script setup>
import Button from "./Button.vue";
import { defineProps } from "vue";
const { handleToggleFilter, handleApplyFilters } = defineProps({
  handleToggleFilter: {
    type: Function,
    required: true,
  },
  handleApplyFilters: {
    type: Function,
    default: null,
  },
});
</script>
<style lang=""></style>
