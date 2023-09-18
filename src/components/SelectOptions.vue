<template>
  <p v-if="title" class="text-[#979797] text-[12px] font-semibold mb-[6px]">
    {{ title }}
  </p>
  <select
    name="category"
    :class="`focus:outline-none text-[14px] py-[7px] pl-[16px] pr-[48px] rounded-md border appearance-none w-full ${styles}`"
  >
    <option v-for="(opt, index) in options" :key="index" :value="opt.value">
      {{ opt.name }}
    </option>
  </select>
</template>
<script setup>
import { defineProps } from "vue";
const { title, styles, options } = defineProps({
  title: { type: String, default: null, required: false },
  styles: { type: String, default: "", required: false },
  options: { type: Array, required: true },
});
</script>
<style scoped>
select {
  background-image: url("../assets/icons/dropdown.svg");
  background-position: right 16px top 50%;
  background-repeat: no-repeat;
}
</style>
