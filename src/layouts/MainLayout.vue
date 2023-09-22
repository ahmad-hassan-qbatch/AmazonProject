<!-- eslint-disable quotes -->
<template>
  <div class="bg-[#F4F4F8] min-h-screen">
    <Header />
    <div>
      <div class="flex bg-[#F4F4F8] w-full">
        <SideBar style="flex: 0 0 220px" />
        <div class="mx-[24px] flex-grow pt-[32px]">
          <RouterView />
        </div>
      </div>
      <Footer class="pl-[244px] py-[8px]" />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Header from "../components/HeaderComponent.vue";
import SideBar from "../components/SideBar.vue";
import Footer from "../components/Footer.vue";
</script>
<style lang=""></style>
