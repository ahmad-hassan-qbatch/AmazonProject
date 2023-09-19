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
        <RangeFilter title="Number of Reviews" paramsField="numberOfReviews" />
        <div class="mb-[24px]">
          <p class="text-[#979797] text-[12px] font-semibold mb-[6px]">
            Average Review Rating
          </p>
          <div class="flex flex-col justify-center h-[36px] m-[0]">
            <div class="w-full">
              <Slider
                :default-value="
                  storeProducts?.filterParams['averageReviewRating']
                    ? storeProducts?.filterParams['averageReviewRating']
                    : 0
                "
                :min="0"
                :max="5"
                class="m-0"
                :track-style="{ 'background-color': '#27C498' }"
                @change="
                  (value) => {
                    storeProducts.handleFiterParamsChange(
                      'averageReviewRating',
                      value,
                    );
                  }
                "
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
              :value="
                storeProducts?.filterParams['dimensions']
                  ? storeProducts?.filterParams['dimensions'][0]
                  : ''
              "
              @input="
                (e) => {
                  storeProducts.handleFiterParamsChange(
                    'dimensions',
                    e.target.value,
                    0,
                  );
                }
              "
            />
            <input
              type="text"
              class="border border-[#E9E9EA] w-[97px] h-[36px] rounded px-[16px]"
              placeholder="Width"
              :value="
                storeProducts?.filterParams['dimensions']
                  ? storeProducts?.filterParams['dimensions'][1]
                  : ''
              "
              @input="
                (e) => {
                  storeProducts.handleFiterParamsChange(
                    'dimensions',
                    e.target.value,
                    1,
                  );
                }
              "
            />
            <input
              type="text"
              class="border border-[#E9E9EA] w-[97px] h-[36px] rounded px-[16px]"
              placeholder="Height"
              :value="
                storeProducts?.filterParams['dimensions']
                  ? storeProducts?.filterParams['dimensions'][2]
                  : ''
              "
              @input="
                (e) => {
                  storeProducts.handleFiterParamsChange(
                    'dimensions',
                    e.target.value,
                    2,
                  );
                }
              "
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
        <RangeFilter title="Price Range" paramsField="priceRange" />
        <div class="mb-[24px]">
          <SelectOptions
            title="Last Active Seller"
            :options="[{ name: 'Select Last Active Seller', value: 0 }]"
            styles="text-[12px]"
          />
        </div>
        <RangeFilter title="Product Weight (lbs)" paramsField="weightRange" />
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
        <CheckBox
          label="Listing has a video"
          styles="border-[#E9E9EA]"
          :value="
            storeProducts?.filterParams['hasVideo']
              ? storeProducts?.filterParams['hasVideo'] === 'true'
              : false
          "
          :handleChangeCheck="
            (isChecked) => {
              storeProducts.handleFiterParamsChange('hasVideo', isChecked);
            }
          "
        />
      </div>
      <div class="mb-[12px]">
        <CheckBox
          label="The product has variations"
          styles="border-[#E9E9EA]"
          :value="
            storeProducts?.filterParams['hasVariations']
              ? storeProducts?.filterParams['hasVariations']
              : false
          "
          :handleChangeCheck="
            (isChecked) => {
              storeProducts.handleFiterParamsChange('hasVariations', isChecked);
            }
          "
        />
      </div>
      <div class="mb-[12px]">
        <CheckBox
          label="Description has 4+ bullet points"
          styles="border-[#E9E9EA]"
          paramsField="bulletsThreshold"
          :value="
            storeProducts?.filterParams['bulletsThreshold']
              ? storeProducts?.filterParams['bulletsThreshold']
              : false
          "
          :handleChangeCheck="
            (isChecked) => {
              storeProducts.handleFiterParamsChange(
                'bulletsThreshold',
                isChecked,
              );
            }
          "
        />
      </div>
    </div>

    <FilterFooter
      :handleToggleFilter="handleToggleFilter"
      :handleApplyFilters="handleApplyFilters"
    />
  </div>
</template>
<script setup>
import { Slider } from "ant-design-vue";
import { defineProps } from "vue";
import CheckBox from "./CheckBox.vue";
import RangeFilter from "./RangeFilter.vue";
import { useRouter } from "vue-router";
import SelectOptions from "./SelectOptions.vue";
import FilterHeader from "./FilterHeader.vue";
import FilterFooter from "./FilterFooter.vue";
import { useProductStore } from "../pinia/productStore";

const router = useRouter();

const storeProducts = useProductStore();

const { handleToggleFilter } = defineProps({
  handleToggleFilter: { type: Function, required: true },
});

const handleApplyFilters = () => {
  router.push({ path: "/products", query: storeProducts.getFilterParams() });
  handleToggleFilter(false);
};
</script>

<style scoped>
select {
  background-image: url("../assets/icons/dropdown.svg");
  background-position: right 16px top 50%;
  background-repeat: no-repeat;
}
</style>
