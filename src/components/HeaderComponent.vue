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
      <div class="relative">
        <img
          src="../assets/images/profile_picture.png"
          class="rounded-full"
          alt="Profile Image"
          @click="toggleMenu = !toggleMenu"
        />
        <div
          v-if="toggleMenu"
          class="absolute rounded-md py-[10px] w-[100px] right-0 bg-white mt-2 flex items-center justify-center shadow-[0px_4px_16px_0px_rgba(0,0,0,0.16)]"
        >
          <Button
            role="primary"
            styles="w-[75%] hover:bg-white hover:text-[#27C498] text-[12px]"
            @click="() => user.logout()"
          >
            Logout</Button
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

import Button from "./Button.vue";
import SearchBar from "./SearchBar.vue";

import { useUserStore } from "../pinia/userStore";

const toggleMenu = ref(false);

const user = useUserStore();
</script>
