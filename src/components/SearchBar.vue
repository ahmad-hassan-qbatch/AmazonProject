<template>
  <div>
    <div>
      <FilterBox
        v-if="toggleFilter"
        v-click-outside="() => handleToggleFilter(false)"
        :category="category"
        :handle-category-click="handleCategoryClick"
        :handle-toggle-filter="handleToggleFilter"
      />
    </div>
  </div>
  <div class="min-w-[500px]">
    <div
      class="flex bg-white rounded-full items-center px-[16px] py-3 text-[14px]"
    >
      <button
        class="flex float-left items-center border-r border-[#9DA6C4] text-[#5A5F7D] pr-[16px]"
        @click="
          () => {
            handleToggleFilter(!toggleFilter);
          }
        "
      >
        <span>{{ category }}</span>
        <img src="../assets/icons/dropdown.svg" class="ml-[12px]" alt="" />
      </button>

      <div class="flex w-96">
        <input
          v-model="searchInput"
          placeholder="Search Products, Keywords, or ASINs"
          class="text-[#5A5F7D] bg-transparent w-full px-[16px] outline-none"
          type="text"
          @input="handleApplyFilters"
        />
        <button>
          <img
            src="../assets/icons/searchIcon.svg"
            alt=""
            @click="handleApplyFilters"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import FilterBox from "./SearchFilterBox.vue";

import { ref, watchEffect } from "vue";
import { debounce } from "lodash";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const category = ref("All");
const searchInput = ref();
const toggleFilter = ref(false);

watchEffect(async () => {
  searchInput.value = route.query.search;
});

const handleCategoryClick = (value) => {
  category.value = value;
};

const handleToggleFilter = (value) => {
  toggleFilter.value = value;
};

const handleApplyFilters = debounce(() => {
  if (searchInput.value)
    router.push({
      path: "/products",
      query: { search: searchInput.value },
    });
  else
    router.push({
      path: "/products",
    });
}, 700);
</script>
