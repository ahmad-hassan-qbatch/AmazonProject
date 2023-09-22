<template lang="">
  <div
    className="mr-0 mt-5 flex flex-col items-center justify-center pb-10 sm:items-end"
  >
    <nav aria-label="Page navigation example bg-white dark:bg-gray-700">
      <ul className="inline-flex -space-x-px text-sm">
        <li key="first">
          <button
            type="button"
            className="hidden h-8
            items-center justify-center rounded-l-lg border border-gray-300
            bg-white px-1 leading-tight text-gray-500 hover:bg-gray-100
            hover:text-gray-700 dark:border-gray-700 dark:bg-gray-600
            dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300
            sm:px-3 md:flex"
            @click="() => currentPageState > 1 && handlePageNoClick(1)"
          >
            First
          </button>
          <button
            type="button"
            className="flex h-8
            items-center justify-center rounded-l-lg border border-gray-300
            bg-white px-1 leading-tight text-gray-500 hover:bg-gray-100
            hover:text-gray-700 dark:border-gray-700 dark:bg-gray-600
            dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300
            sm:px-3 md:hidden"
            @click="() => currentPageState > 1 && handlePageNoClick(1)"
          >
            {{ "<<" }}
          </button>
        </li>

        <li v-for="(item, index) in range(startPage, endPage + 1)" :key="index">
          <button
            type="button"
            :class="`flex h-8 items-center justify-center px-3 ${
              item === currentPageState
                ? 'border border-gray-300 bg-[#27C498] text-blue-custom hover:bg-blue-100 hover:text-blue-custom text-white'
                : 'border border-gray-300 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700'
            }`"
            @click="() => handlePageNoClick(item)"
          >
            {{ item }}
          </button>
        </li>

        <li key="last">
          <button
            type="button"
            class="md:flex hidden h-8 items-center justify-center rounded-r-lg border border-gray-300 bg-white px-1 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300 sm:px-3"
            @click="
              () =>
                currentPageState < totalPages && handlePageNoClick(totalPages)
            "
          >
            Last
          </button>
          <button
            type="button"
            className="md:hidden flex h-8 items-center justify-center
            rounded-r-lg border border-gray-300 bg-white px-1 leading-tight
            text-gray-500 hover:bg-gray-100 hover:text-gray-700
            dark:border-gray-700 dark:bg-gray-600 dark:text-gray-200
            dark:hover:bg-gray-800 dark:hover:text-gray-300 sm:px-3"
            @click="
              () =>
                currentPageState < totalPages && handlePageNoClick(totalPages)
            "
          >
            {{ ">>" }}
          </button>
        </li>
      </ul>
    </nav>
    <span className="mt-3 text-sm text-gray-700 dark:text-gray-200">
      Page Number :
      <span className="font-semibold text-blue-custom text-[#27C498]">{{
        currentPageState
      }}</span>
      out of
      <span className="font-semibold text-blue-custom text-[#27C498] ">{{
        totalPages
      }}</span>
    </span>
  </div>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { defineProps, onMounted, ref, watch } from "vue";

import { range } from "lodash";

const {
  currentPage: currentPageProp,
  totalPages,
  handlePageNoClick,
} = defineProps({
  currentPage: { type: Number, required: true },
  totalPages: { type: Number, required: true },
  handlePageNoClick: { type: Function, required: true },
});

const currentPageState = ref(0);
const startPage = ref(0);
const endPage = ref(0);

const calculateStartEnd = async () => {
  const pagesToShow = 2;
  currentPageState.value = currentPageProp;

  if (currentPageState.value > totalPages || currentPageState.value < 1) {
    currentPageState.value = 0;
  }
  startPage.value = Math.max(currentPageState.value - pagesToShow, 1);
  endPage.value = Math.min(currentPageState.value + pagesToShow, totalPages);

  if (currentPageState.value <= pagesToShow) {
    endPage.value = Math.min(startPage.value + pagesToShow * 2, totalPages);
  } else if (currentPageState.value >= totalPages - pagesToShow) {
    startPage.value = Math.max(endPage.value - pagesToShow * 2, 1);
  }
};

onMounted(async () => {
  calculateStartEnd();
});

watch(currentPageState, async () => {
  calculateStartEnd();
});
</script>
