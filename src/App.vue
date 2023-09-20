<script setup>
import { useRoute, RouterView } from "vue-router";

import MainLayout from "./layouts/MainLayout.vue";

const route = useRoute();
</script>

<template>
  <div v-if="route.path !== '/login'">
    <MainLayout />
  </div>

  <div v-else>
    <RouterView />
  </div>
</template>
