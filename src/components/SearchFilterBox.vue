<template lang="">
  <div class="relative">
    <div
      class="absolute rounded-sm bg-white top-7 w-[907px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.16)]"
    >
      <FilterHeader
        heading="Filters"
        :handle-toggle-filter="handleToggleFilter"
      />

      <div
        class="radios grid grid-flow-col text-[#5A5F7D] text-[14px] px-[24px] mb-4"
      >
        <div
          v-for="(toSelect, index) in categories"
          :key="index"
          class="flex items-center pt-4"
        >
          <label class="flex justify-center items-center">
            <input
              v-model="selectedCategory"
              class="h-[14px] w-[14px] appearance-none rounded-full border-[1px] border-[#C6D0DC] checked:border-transparent checked:bg-[#27C498]"
              type="radio"
              :value="toSelect"
            />
            <span class="absolute bg-white h-[7px] w-[7px] rounded-full">
            </span>
          </label>
          <p class="ml-[8px] text-[#5A5F7D] text-[14px]">{{ toSelect }}</p>
        </div>
      </div>

      <FilterFooter
        :handle-toggle-filter="handleToggleFilter"
        :handle-apply-filters="handleApplyFilters"
      />
    </div>
  </div>
</template>
<script setup>
import FilterHeader from "./FilterHeader.vue";
import FilterFooter from "./FilterFooter.vue";
import { defineProps, ref } from "vue";
import categories from "../utilities/categories";

const { handleToggleFilter, category, handleCategoryClick } = defineProps({
  handleToggleFilter: { type: Function, required: true },
  handleCategoryClick: { type: Function, required: true },
  category: { type: String, required: true },
});

const selectedCategory = ref(category);

const handleApplyFilters = () => {
  handleCategoryClick(selectedCategory.value);
  handleToggleFilter();
};
</script>
<style scoped>
.radios {
  grid-template-rows: repeat(8, minmax(0, 1fr));
}
</style>
