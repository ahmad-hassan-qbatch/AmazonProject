<script setup>
import { RouterLink } from "vue-router";
import ProductListing from "../assets/icons/IconProductListing.vue";
import DashboardIcon from "../assets/icons/DashboardIcon.vue";
import { isElement } from "lodash";
</script>

<template lang="">
  <aside class="flex flex-col w-[220px] bg-white min-h-screen">
    <router-link
      to="/"
      :class="`flex pl-[24px] pt-[16px]  text-[14px] 
      ${$route.name === 'Dashboard' ? 'text-[#27C498]' : 'text-[#ADB4D2]'} `"
    >
      <div class="flex items-center">
        <DashboardIcon /> <span class="pl-[12px]">Dashboard</span>
      </div>
    </router-link>

    <router-link
      to="/products"
      :class="`flex pl-[24px] pt-[16px] text-[14px]
       ${
         $route.path.includes('products') ? 'text-[#27C498]' : 'text-[#ADB4D2]'
       } `"
    >
      <div class="flex items-center">
        <ProductListing />
        <span class="pl-[12px]"> Product Listing</span>
      </div>
    </router-link>
  </aside>
</template>

<style lang=""></style>
