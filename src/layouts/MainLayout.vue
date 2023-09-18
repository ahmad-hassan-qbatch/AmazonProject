<!-- eslint-disable quotes -->
<template>
  <Header />
  <div class="flex bg-[#F4F4F8]">
    <SideBar style="flex: 0 0 220px" />
    <div class="mx-[24px] flex-grow pt-[32px]">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Header from "../components/HeaderComponent.vue";
import SideBar from "../components/SideBar.vue";
</script>
<style lang=""></style>
