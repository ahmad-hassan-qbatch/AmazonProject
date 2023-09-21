<template>
  <div class="w-[255px] px-[16px] py-[16px] bg-white">
    <div class="pb-[16px] border-b mb-[16px]">
      <CheckBox @update:value="handleShowExports" />

      <img
        :src="product?.image || defaultData.image"
        alt="Product Image"
        class="w-[220px] h-[125px] object-scale-down"
      />
    </div>

    <div>
      <router-link
        :to="`/products/${product?.id}`"
        class="text-[14px] mb-[6px] hover:text-[#27C498]"
      >
        <p class="line-clamp-2 h-[42px]">
          {{ product?.title }}
        </p>
      </router-link>

      <p class="text-[#979797] text-[12px] my-[6px] font-semibold">Price</p>
      <p class="text-[#031625] text-[24px] mb-[6px]">${{ product?.price }}</p>
    </div>

    <p class="text-[#979797] text-[12px] my-[6px] font-semibold">Reviews</p>

    <div class="flex items-center mb-[6px]">
      <StarComponentVue :earned="product?.reviews" />
      <div class="relative mt-1">
        <button @click="() => handleShowRatingDetails(!ratingDetail)">
          <img src="../../assets/icons/dropdown.svg" alt="" />
        </button>

        <div v-if="ratingDetail" class="absolute -right-36">
          <RatingDetail
            v-on-click-outside="() => handleShowRatingDetails(false)"
            :rating="product?.reviews || defaultData.reviews"
          />
        </div>
      </div>
      <div>
        <p class="text-[12px] text-[#27C498]">
          {{
            numberWithCommas(product?.reviews || defaultData?.reviews?.total)
          }}
        </p>
      </div>
    </div>

    <h2 class="text-[#979797] text-[12px] my-[6px] font-semibold">BSR</h2>
    <div class="flex items-center mb-[16px] break-words">
      <p
        class="flex items-center justify-center text-[12px] text-white bg-[#0FB600] rounded-[2px] px-1 h-[18px] mr-1"
      >
        #{{ product?.category_bsr }}
      </p>
      <p class="text-[14px] line-clamp-1">
        in {{ product?.main_category_name }}

        <span v-if="product?.bsr <= 100" class="text-[#27C498]">(Top 100)</span>
      </p>
    </div>
    <router-link :to="`/products/${product?.id}`">
      <Button
        role="secondary"
        styles="text-[14px] w-full hover:text-white hover:bg-[#27C498]"
      >
        View More Details
      </Button>
    </router-link>
  </div>
</template>

<script setup>
import Button from "../Button.vue";
import CheckBox from "../CheckBox.vue";
import RatingDetail from "./RatingDetail.vue";
import StarComponentVue from "../StarComponent.vue";

import { defineProps, ref } from "vue";
import { numberWithCommas } from "../../utilities/helperMethods.js";
import { vOnClickOutside } from "@vueuse/components";

const { product, handleShowExports } = defineProps({
  product: { type: Object, required: true },
  handleShowExports: { type: Function, required: true },
});

const ratingDetail = ref(false);

const defaultData = {
  image:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMsAAAB6CAMAAAAms1fRAAAARVBMVEX///91hIX19vZ5h4hygYKBjo/y8/PV2dn5+vptfX6psbKHk5SfqKno6up+i4ybpaa+xMWQm5zN0tLe4eG0u7vFystoeHqQh1cCAAAGMElEQVR4nO1b6WKjOAzG933IB+//qCuTtIUmO9uZZiZk1t+PtlAM+tBhSTbLMjExMTExMTExMTExMTExMfF/Bc2CO6WfLcYjoL1xPvL2bDkegUyaXjSY+mxBvg+dHMVfgfwFipEA41eI9tmSfB/axmFd5a9wGMVAhRKJC8+W5PvoLHJjoDGQzxblu9BeqJ67XLLxz5bluwjszenty7tMXtX1L+15fqoo34aI79mLdPylJ8y67gwrOPHKZBpRuyO1wuvmmNIB3R93kqgMKntBGPTX4qUOsUuHAgwcWVcC1rM1vdT0adfLBKlp6BZEZEy41EqgWmuZuXih6VMzWGQt2QJfDXO+dbVXRSHpaaL9LGTnLjlMYbiwWQV54x+WvUBcQ2VYIKuJAjya1L85eX2B2TODQR7oGDXQH10nmT15LKPAIasvufWnkH06aEwivyphiueOZIp/vRzOJ29pALmvlXueodbye4X5Jvi9SaM2n5Ltn08Hc+qaRptbE1OwEgcgzGdPwnztT8n1S7jVSye8VTmSSmfSwdl1En9OsF+AE588A5Pjt8xFZ3JsYTRy6vzS8mOcrYztHDwfTbAf6pvToa/HOJtYjB8erj3Z/1uxm3hwJlRzSLICbwHMR6lS2T50BXHq3uxHF2lDJ2WhbRVvdqZhn7dQl86ckV274W9oYqgEI5i/upGNe3f3p+7Nau/2zm8vxaP0Bi6O0the+pMHsnaosKy4CtvjZQ3mqJeynjqQFbJPsvJ71K2weqQBhxkmrKcuxyrJh6P3uEUbF6oeV5X0uWt+eqwWYecRxRFHjtMPxD8k1q/hWC0qs3vzEj6na9acOSgvnhyymMzhPR/r5HNVnNdTl2N5PcRZ3Yzo4wxVid9MJ8qcOou5qRYLcIb1S+TR3tScx0hxOgTyOcnS3YIDn+/Mi4qfWi/0XrVIJb3r5O3c/qLT1+NsIO43SvIAfD3JkmBOncN8sVrUMtRm2LmbSqNa/I/YJGtvHpgxcHKt/KhaRGWo5h0jJAqw/dT5/hVwp8KioXSbojE8JptLPXdX/APluGGEht6Si4QTMVb4bheVTg1rRqmy6FBL9m6s8EFqvZ67q/8v0HYV3trkiFmNsLm+mjIOUN4Jt63wPVuSR0CGH6/wTUxMTExMTEy8OmT9s6lnUHX7eUwWpfqpnhBefifx14moJfv3O9V0XRxQ6fd0zxrnamyhPNa/av2p7Qae393646Na7EfHQ7110MudXRyPQGMMRpW13f3dJBTfNbguZ7XeH+3/WLRw4rhb4XIxDWPHono7VuRalxZ+fNqj0Jjg5cKlghDt8oDBRToozvUAwutFOSFGYz8kkbJrYzeMgDfrUbz5od00dpC3WGgSwqEZWVc3LgUHpzC4dDHGblxqEu7BrafGvAPakEsw0cLVVjYuLLoUo8BqOC/d2URASiAAhFgUxzX3tkZpSdl6Adv2C0JocNYyU5fEL1wyWCBJK4Y3E7xtXAJhePKxzadGWuNlcLEochCXRdWNSyQV3bctHWWnFPUkguIgqcdzQOrSrwsTEkSQhFxarwFJabQ3j/9M5MJF0iUwQRVDPZXo5OBieUdFPdZvkIsmouHbgrFSDFy9c2GO4iPVophdZAMXRejjzXe8GC0O3HWfmCKuVocXakvC2OuvCzhH8juX0BwOppu/UIhhcAGGN+D+oT6DXMYaF76hhE/VcFl4vHARcgtDgwsY21EvZYSiQdwx21q7mIhlxBgyNmYUkpOTSBYK8A8uYFofXFjSm3YHl8Q83uCxDjO4SIgoSeNelusHYDdcCMFXL0KIrGXGGurLSnmdVDjLvbSIIyW+/3b5WGnHRRMi62ZjrAVLvB5cuoEg62NbIG3MLIWj7VBnBLmY2Da/SM6Qy1q2Hp830REW0NxX5lGJEgxjVx1uc5F0GA4xHo6VwEKYE2texnex3pQlGYGDqTJOcIODynimR1Wax+ql5iF9Hz9pse36okLui84dY3EOeDBcIIfS5UJloHl8Z6FLa5eYrLY7LCXXMW7rn9emKh6WLLcbUBzcu8b7yDyeELYRCk3sme01mmxv0fwV3TGdVmP+a+3iZRDU3/HV/sTExMTExMTExMTExMTExJPxD+8pRqCd0putAAAAAElFTkSuQmCC",
  reviews: {
    total: 0,
    starPercentages: {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0,
    },
  },
  category: "Men's T-Shirts",
  rank: "3",
  TotalItems: "100",
};

const handleShowRatingDetails = (value) => {
  ratingDetail.value = value;
};
</script>
