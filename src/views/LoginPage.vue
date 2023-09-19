<template>
  <div
    class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
  >
    <a
      href="#"
      class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
    >
      <img src="../assets/icons/logo.svg" class="mr-[6px]" alt="Logo" />
      Amazon Project
    </a>
    <div
      class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1
          class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
        >
          Sign in to your account
        </h1>
        <div v-if="user.error">{{ user.error }}</div>
        <div>
          <label
            for="username"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your username</label
          >
          <input
            id="username"
            v-model="username"
            type="username"
            name="username"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
            required=""
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Password</label
          >
          <input
            id="password"
            v-model="password"
            type="password"
            name="password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#27C498] focus:border-[#27C498] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
        </div>
        <div class="flex items-center justify-between">
          <a
            href="#"
            class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Forgot password?</a
          >
        </div>
        <Button
          role="primary"
          styles="w-full h-12"
          @click="
            () => {
              if (username && password) user.login(username, password);
            }
          "
        >
          <div v-if="!user.loading" class="flex items-center justify-center">
            Sign in
          </div>
          <div v-else class="flex items-center justify-center">
            <Loader />
          </div>
        </Button>

        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet?
          <a
            href="#"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Sign up</a
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

import { useUserStore } from "../pinia/store";
import Button from "../components/Button.vue";
import Loader from "../components/Loader.vue";

const username = ref("test@gmail.com");
const password = ref("12345");
const user = useUserStore();
</script>
<style lang=""></style>
