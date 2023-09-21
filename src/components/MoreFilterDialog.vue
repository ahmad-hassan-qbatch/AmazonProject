<template lang="">
  <div
    class="absolute top-[63px] bg-white z-10 w-[740px] rounded-[7px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.16)]"
  >
    <FilterHeader
      heading="All Filters"
      :handle-toggle-filter="handleToggleFilter"
    />

    <div class="flex justify-between text-[14px]">
      <div class="w-1/2 pl-[24px] py-4 pr-4">
        <RangeFilter
          title="Number of Reviews"
          params-field="numberOfReviews"
          @update="handleFilterParamsChange"
        />
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
                @change="(value) => updateAverageReviewRating(value)"
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
            <div v-for="(dimension, index) in filters.dimensions" :key="index">
              <input
                class="border border-[#E9E9EA] w-[97px] h-[36px] rounded px-[16px]"
                type="text"
                :placeholder="index"
                :value="dimension"
                @input="(e) => updateDimensions(e.target.value, index)"
              />
            </div>
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
        <RangeFilter
          title="Price Range"
          params-field="priceRange"
          @update="handleFilterParamsChange"
        />
        <div class="mb-[24px]">
          <SelectOptions
            title="Last Active Seller"
            :options="[{ name: 'Select Last Active Seller', value: 0 }]"
            styles="text-[12px]"
          />
        </div>
        <RangeFilter
          title="Product Weight (lbs)"
          params-field="weightRange"
          @update="handleFilterParamsChange"
        />
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
          :value="filters.hasVideo"
          @update:value="updateHasVideo"
        />
      </div>
      <div class="mb-[12px]">
        <CheckBox
          label="The product has variations"
          :value="filters.hasVariations"
          @update:value="updateHasVariations"
        />
      </div>
      <div class="mb-[12px]">
        <CheckBox
          label="Description has 4+ bullet points"
          :value="filters.bulletsThreshold"
          @update:value="updateBulletThreshHold"
        />
      </div>
    </div>

    <FilterFooter
      :handle-toggle-filter="handleToggleFilter"
      :handle-apply-filters="handleApplyFilters"
    />
  </div>
</template>

<script setup>
import CheckBox from "./CheckBox.vue";
import FilterFooter from "./FilterFooter.vue";
import FilterHeader from "./FilterHeader.vue";
import RangeFilter from "./RangeFilter.vue";
import SelectOptions from "./SelectOptions.vue";

import { Slider } from "ant-design-vue";
import { defineProps, ref } from "vue";
import { useProductStore } from "../pinia/productStore";
import { useRouter, useRoute } from "vue-router";

import { values } from "lodash";

const { handleToggleFilter } = defineProps({
  handleToggleFilter: { type: Function, required: true },
});

const router = useRouter();
const route = useRoute();

const storeProducts = useProductStore();

const filters = ref({
  hasVideo: storeProducts?.filterParams["hasVideo"],
  bulletsThreshold: storeProducts?.filterParams["bulletsThreshold"],
  hasVariations: storeProducts?.filterParams["hasVariations"],
  dimensions: {
    Length:
      storeProducts?.filterParams["dimensions"] &&
      storeProducts?.filterParams["dimensions"][0],
    Width:
      storeProducts?.filterParams["dimensions"] &&
      storeProducts?.filterParams["dimensions"][1],
    Height:
      storeProducts?.filterParams["dimensions"] &&
      storeProducts?.filterParams["dimensions"][2],
  },
  averageReviewRating: undefined,
  priceRange: [null, null],
  weightRange: Array(2).fill(null),
  numberOfReviews: [null, null],
});

const handleApplyFilters = () => {
  storeProducts.setFilterParams({
    ...filters.value,
    search: route.query.search,
    dimensions: values(filters.value.dimensions),
  });

  router.push({
    path: "/products",
    query: storeProducts.getFilterParams(),
  });

  handleToggleFilter(false);
};

const handleFilterParamsChange = (value, index, field) => {
  filters.value[field][index] = value || undefined;
};

const updateDimensions = (value, index) => {
  if (value) filters.value.dimensions[index] = value;
  else filters.value.dimensions[index] = null;
};

const updateAverageReviewRating = (value) =>
  (filters.value.averageReviewRating = value ? value : undefined);

const updateHasVideo = (value) =>
  (filters.value.hasVideo = value ? true : undefined);

const updateHasVariations = (value) =>
  (filters.value.hasVariations = value ? true : undefined);

const updateBulletThreshHold = (value) =>
  (filters.value.bulletsThreshold = value ? true : undefined);
</script>

<style scoped>
select {
  background-image: url("../assets/icons/dropdown.svg");
  background-position: right 16px top 50%;
  background-repeat: no-repeat;
}
</style>
