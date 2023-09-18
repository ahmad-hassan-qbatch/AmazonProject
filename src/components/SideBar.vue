<template lang="">
  <aside class="flex flex-col w-[220px] bg-white">
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
      to="/results"
      :class="`flex pl-[24px] pt-[16px] text-[14px]
       ${$route.name === 'Results' ? 'text-[#27C498]' : 'text-[#ADB4D2]'} `"
    >
      <div class="flex items-center">
        <ProductListing />
        <span class="pl-[12px]"> Product Listing</span>
      </div>
    </router-link>
  </aside>
</template>
<script setup>
import { RouterLink } from "vue-router";
import ProductListing from "../assets/icons/ProductListing.vue";
import DashboardIcon from "../assets/icons/DashboardIcon.vue";

RouterLink;
</script>
<style lang=""></style>
