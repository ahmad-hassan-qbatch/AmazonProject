<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
const { onClick, styles, role } = defineProps({
  role: { type: String, required: true },

  onClick: {
    type: Function,
    default: null,
    required: false,
  },

  styles: { type: String, required: true },
});
</script>

<template>
  <button
    :class="`${
      role === 'primary' ? 'bg-[#27C498] text-white' : 'bg-white text-[#27C498]'
    } p-2 rounded-[5px] border border-[#27C498] ${styles}`"
    @click="onClick"
  >
    <slot />
  </button>
</template>
