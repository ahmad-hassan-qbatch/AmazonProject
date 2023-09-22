<template>
  <div class="mb-[24px]">
    <p class="text-[#979797] text-[12px] font-semibold mb-[6px]">
      {{ title }}
    </p>
    <div class="flex justify-between">
      <input
        v-model="min"
        type="number"
        class="border border-[#E9E9EA] w-[153px] h-[36px] rounded px-[16px]"
        placeholder="Min"
        @input="() => invokeEmits(0)"
      />
      <input
        v-model="max"
        type="number"
        class="border border-[#E9E9EA] w-[153px] h-[36px] rounded px-[16px]"
        placeholder="Max"
        @input="() => invokeEmits(1)"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, onMounted } from "vue";

import { useProductStore } from "../pinia/productStore";

const { title, paramsField } = defineProps({
  title: { type: String, required: true },
  paramsField: { type: String, required: true },
});
const storeProducts = useProductStore();

const min = ref(
  storeProducts?.filterParams[paramsField] &&
    storeProducts?.filterParams[paramsField][0],
);

const max = ref(
  storeProducts?.filterParams[paramsField] &&
    storeProducts?.filterParams[paramsField][1],
);

const emit = defineEmits(["update"]);

const invokeEmits = (index) => {
  if (!index) {
    emit("update", min.value, 0, paramsField);
  } else {
    emit("update", max.value, 1, paramsField);
  }
};

onMounted(() => {
  invokeEmits(0);
  invokeEmits(1);
});
</script>
