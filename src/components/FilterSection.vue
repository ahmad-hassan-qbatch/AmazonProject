<script setup>
import Button from "./Button.vue";
import IconExports from "../assets/icons/IconExports.vue";
import IconFilter from "../assets/icons/IconFilter.vue";
import MoreFilterDialog from "./MoreFilterDialog.vue";
import SelectOptions from "./SelectOptions.vue";

import { defineProps } from "vue";
import { ref } from "vue";
import { useProductStore } from "../pinia/productStore";
import { vOnClickOutside } from "@vueuse/components";

import { omit } from "lodash";

const { showExports } = defineProps({
  showExports: { type: Number, default: 0 },
});

const storeProduct = useProductStore();

const toggleMoreFilter = ref(false);

const handleToggleFilter = (value) => {
  toggleMoreFilter.value = value;
};
</script>

<template>
  <div id="buttons" class="flex">
    <div>
      <SelectOptions
        :options="[{ name: 'Select Categories', value: 0 }]"
        styles="py-[9px] h-[40px] pl-[16px] pr-[48px] text-[#27C498] border-[#27C498] w-auto"
      />
    </div>
    <div>
      <SelectOptions
        :options="[{ name: 'Select Brands', value: 0 }]"
        styles="py-[9px] h-[40px] pl-[16px] pr-[48px] text-[#27C498] border-[#27C498] w-auto"
      />
    </div>

    <Button
      role="primary"
      styles="px-[16px] h-[40px] flex items-center"
      @click="() => handleToggleFilter(true)"
    >
      <IconFilter />
      <span class="text-white ml-[6px]">View More Filters</span>
    </Button>

    <Button
      v-if="JSON.stringify(omit($route.query, ['pageNo'])).length > 2"
      role="primary"
      styles="px-[16px] h-[40px] flex items-center"
      @click="
        () => {
          storeProduct.setFilterParams(null);
          $router.push('/products');
        }
      "
    >
      <IconFilter />
      <span class="text-white ml-[6px]">Clear Filters</span>
    </Button>

    <Button
      v-if="showExports"
      role="primary"
      styles="px-[16px] h-[40px] flex items-center"
    >
      <IconExports />
      <span class="text-white ml-[6px]">Exports</span>
    </Button>
  </div>
  <div
    v-if="toggleMoreFilter"
    class="fixed top-0 left-0 ml-0 w-full h-full flex justify-center bg-black bg-opacity-50"
  >
    <MoreFilterDialog
      v-on-click-outside="() => handleToggleFilter(false)"
      :handle-toggle-filter="handleToggleFilter"
    />
  </div>
</template>

<style scoped>
select {
  background-image: url("../assets/icons/dropdown.svg");
  background-position: right 16px top 50%;
  background-repeat: no-repeat;
  background-size: 10%;
}

#buttons > * {
  margin-left: 16px;
}
</style>
