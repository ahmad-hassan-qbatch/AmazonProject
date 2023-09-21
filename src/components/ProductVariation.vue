<script setup>
import { defineProps } from "vue";

const { data } = defineProps({
  data: { type: Object, required: true },
});
</script>

<template lang="">
  <div>
    <div class="border-b border-[#EEEBEB] pb-4 mb-[10px]">
      <h2 class="text-[#979797] text-[12px] my-[6px] font-semibold">
        Variations
      </h2>

      <p
        class="text-[14px] font-normal overflow-x-auto whitespace-nowrap no-scrollbar"
      >
        {{ data?.asin.join(", ") }}
      </p>
    </div>
    <div class="border-b border-[#EEEBEB] pb-4 mb-[10px]">
      <h2 class="text-[#979797] text-[12px] my-[6px] font-semibold">
        Attributes Variations
      </h2>

      <div class="flex overflow-x-auto whitespace-nowrap no-scrollbar">
        <div
          v-for="(attributes, index) in data?.attributeVariations"
          :key="index"
          :class="`text-[14px] font-normal ${
            index < data?.attributeVariations.length - 1 &&
            'border-r-[1.5px] border-[#C4C4C4]'
          } pr-[8px] mr-[8px]`"
        >
          <p v-for="(attribute, aIndex) in attributes" :key="aIndex">
            <span class="text-[#5A5F7D]">{{ attribute?.dimension }}: </span>
            <span>{{ attribute?.value }}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-between">
      <div>
        <h2 class="text-[#979797] text-[12px] my-[6px] font-semibold">
          Dimensions
        </h2>
        <div class="flex">
          <p
            v-for="(item, index) in data?.dimensions"
            :key="index"
            :class="`text-[14px] font-normal ${
              index !== 'Height' && 'border-r-[1.5px] border-[#C4C4C4]'
            } pr-[8px] mr-[8px]`"
          >
            <span class="text-[#5A5F7D]">{{ index.replace("item", "") }}:</span>
            {{ item }} in
          </p>
        </div>
      </div>
      <div>
        <h2 class="text-[#979797] text-[12px] my-[6px] font-semibold">
          Weight
        </h2>

        <p class="text-[14px] font-normal pr-[8px] mr-[8px]">
          {{ data?.weight }} Ibs
        </p>
      </div>
      <div class="mr-[26px]">
        <h2 class="text-[#979797] text-[12px] my-[6px] font-semibold">
          Opportunity Score
        </h2>

        <p
          class="text-[12px] text-[#0FB600] rounded-md bg-[#0FB6001A] py-1 px-3 font-normal pr-[8px] mr-[8px]"
        >
          {{ data?.demand }} High Demand
        </p>
      </div>
    </div>
  </div>
</template>
