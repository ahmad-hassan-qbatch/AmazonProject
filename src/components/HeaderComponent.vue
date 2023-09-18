<template lang="">
  <nav class="flex items-center bg-[#161924] h-[68px] px-[24px] w-screen">
    <div class="flex items-center w-full">
      <img src="../assets/icons/logo.svg" class="mr-[6px]" alt="Logo" />
      <p class="text-[18px] mr-[41px] text-white">Amazon Project</p>
      <SearchBar />
    </div>

    <div class="flex items-center">
      <img
        src="../assets/icons/notification.svg"
        class="mr-[20px]"
        alt="Logo"
      />
      <img
        src="../assets/images/profile_picture.png"
        class="rounded-full"
        alt="Profile Image"
      />
    </div>
  </nav>
</template>

<script setup>
import SearchBar from "./SearchBar.vue";
</script>
