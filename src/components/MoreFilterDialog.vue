<!-- eslint-disable vue/attribute-hyphenation -->
<template lang="">
  <div
    class="absolute top-[63px] bg-white z-10 w-[740px] rounded-[7px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.16)]"
  >
    <FilterHeader
      heading="All Filters"
      :handleToggleFilter="handleToggleFilter"
    />

    <div class="flex justify-between text-[14px]">
      <div class="w-1/2 pl-[24px] py-4 pr-4">
        <RangeFilter title="Number of Reviews" />
        <div class="mb-[24px]">
          <p class="text-[#979797] text-[12px] font-semibold mb-[6px]">
            Average Review Rating
          </p>
          <div class="flex flex-col justify-center h-[36px] m-[0]">
            <div class="w-full">
              <Slider
                :default-value="2"
                :min="0"
                :max="5"
                class="m-0"
                :track-style="{ 'background-color': '#27C498' }"
              />
            </div>
            <div class="flex justify-between text-[#031625] text-[12px]">
              <p>0</p>
              <p>5</p>
            </div>
          </div>
        </div>
        <div class="mb-[24px]">
          <p class="text-[#979797] text-[12px] font-semibold mb-[6px]">
            Product Dimensions (in)
          </p>
          <div class="flex justify-between text-[14px]">
            <input
              type="text"
              class="border border-[#E9E9EA] w-[97px] h-[36px] rounded px-[16px]"
              placeholder="Length"
            />
            <input
              type="text"
              class="border border-[#E9E9EA] w-[97px] h-[36px] rounded px-[16px]"
              placeholder="Width"
            />
            <input
              type="text"
              class="border border-[#E9E9EA] w-[97px] h-[36px] rounded px-[16px]"
              placeholder="Height"
            />
          </div>
        </div>

        <SelectOptions
          title="Small Business Certification"
          :options="[
            {
              name: 'Select Small Business Certification',
              value: 0,
            },
          ]"
        />
      </div>

      <div class="w-1/2 pr-[24px] py-4 pl-4">
        <RangeFilter title="Price Range" />
        <div class="mb-[24px]">
          <SelectOptions
            title="Last Active Seller"
            :options="[{ name: 'Select Last Active Seller', value: 0 }]"
            styles="text-[12px]"
          />
        </div>
        <RangeFilter title="Product Weight (lbs)" />
        <div class="-mt-[1px]">
          <SelectOptions
            title="Intellectual Property (IP) Status"
            :options="[
              { name: 'Select Intellectual Property (IP) Status', value: 0 },
            ]"
          />
        </div>
      </div>
    </div>

    <div class="px-[24px]">
      <h2 class="text-[#272B41] text-[20px] font-[700] mb-[16px]">
        Other Filters
      </h2>
      <div class="mb-[12px]">
        <CheckBox label="Listing has a video" styles="border-[#E9E9EA]" />
      </div>
      <div class="mb-[12px]">
        <CheckBox
          label="The product has variations"
          styles="border-[#E9E9EA]"
        />
      </div>
      <div class="mb-[12px]">
        <CheckBox
          label="Description has 4+ bullet points"
          styles="border-[#E9E9EA]"
        />
      </div>
    </div>

    <FilterFooter :handleToggleFilter="handleToggleFilter" />
  </div>
</template>
<script setup>
import { Slider } from "ant-design-vue";
import { defineProps } from "vue";
import CheckBox from "./CheckBox.vue";
import RangeFilter from "./RangeFilter.vue";
import SelectOptions from "./SelectOptions.vue";
import FilterHeader from "./FilterHeader.vue";
import FilterFooter from "./FilterFooter.vue";

const { handleToggleFilter } = defineProps({
  handleToggleFilter: { type: Function, required: true },
});
</script>

<style scoped>
select {
  background-image: url("../assets/icons/dropdown.svg");
  background-position: right 16px top 50%;
  background-repeat: no-repeat;
}
</style>
