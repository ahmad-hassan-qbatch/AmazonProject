<template>
  <FilterBox
    v-if="toggleFilter"
    v-on-click-outside="() => handleToggleFilter(false)"
    :category="category"
    :handle-category-click="handleCategoryClick"
    :handle-toggle-filter="handleToggleFilter"
  />
  <div class="min-w-[500px]">
    <div
      class="flex bg-white rounded-full items-center px-[16px] py-3 text-[14px]"
    >
      <button
        class="flex float-left items-center border-r border-[#9DA6C4] text-[#5A5F7D] pr-[16px]"
        @click="() => handleToggleFilter(true)"
      >
        <span>{{ category }}</span>
        <img src="../assets/icons/dropdown.svg" class="ml-[12px]" alt="" />
      </button>

      <div class="flex w-96">
        <input
          v-model="searchInput"
          type="text"
          class="text-[#5A5F7D] bg-transparent w-full px-[16px] outline-none"
          placeholder="Search Products, Keywords, or ASINs"
        />
        <img src="../assets/icons/searchIcon.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import FilterBox from "./SearchFilterBox.vue";
import { ref, watch } from "vue";
import { useProductStore } from "../pinia/productStore.js";
import { vOnClickOutside } from "@vueuse/components";
import { useRouter } from "vue-router";
import { debounce } from "lodash";

const router = useRouter();

const category = ref("All");
const searchInput = ref("");
const toggleFilter = ref(false);
const storeProduct = useProductStore();

watch(searchInput, () => {
  handleApplyFilters();
});

const handleCategoryClick = (value) => {
  category.value = value;
};

const handleToggleFilter = (value) => {
  toggleFilter.value = value;
};

const handleApplyFilters = debounce(() => {
  router.push({
    path: "/products",
    query: { ...storeProduct.getFilterParams(), search: searchInput.value },
  });
}, 700);
</script>
