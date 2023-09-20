<script setup>
import { defineProps } from "vue";
import { useProductStore } from "../pinia/productStore";

const { title, paramsField } = defineProps({
  title: { type: String, required: true },
  paramsField: { type: String, required: true },
});

const storeProducts = useProductStore();
</script>

<template>
  <div class="mb-[24px]">
    <p class="text-[#979797] text-[12px] font-semibold mb-[6px]">
      {{ title }}
    </p>
    <div class="flex justify-between">
      <input
        type="number"
        class="border border-[#E9E9EA] w-[153px] h-[36px] rounded px-[16px]"
        placeholder="Min"
        :value="
          storeProducts?.filterParams[paramsField]
            ? storeProducts?.filterParams[paramsField][0]
            : ''
        "
        @input="
          (e) => {
            storeProducts.handleFiterParamsChange(
              paramsField,
              e.target.value,
              0,
            );
          }
        "
      />
      <input
        type="number"
        class="border border-[#E9E9EA] w-[153px] h-[36px] rounded px-[16px]"
        placeholder="Max"
        :value="
          storeProducts?.filterParams[paramsField]
            ? storeProducts?.filterParams[paramsField][1]
            : ''
        "
        @input="
          (e) => {
            storeProducts.handleFiterParamsChange(
              paramsField,
              e.target.value,
              1,
            );
          }
        "
      />
    </div>
  </div>
</template>
