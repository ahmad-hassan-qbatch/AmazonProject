<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/no-mutating-props -->
<template lang="">
  <div class="flex">
    <label class="flex h-[20px] w-[20px] cursor-pointer items-center">
      <input
        type="checkbox"
        class="w-[0px] h-[0px]"
        @input="
          (event) => {
            handleShowExports(event.target.checked);
          }
        "
      />
      <span
        :class="`checkmark input-checked:bg-[#27C498] flex items-center justify-center h-full w-[20px] border rounded-md border-[#27C498] ${styles}`"
      >
        <img
          src="../assets/icons/checkBox.svg"
          alt=""
          class="h-[15px] w-[15px]"
        />
      </span>
    </label>
    <span class="text-[#031625] text-[14px] ml-[6px]">{{ props.label }}</span>
  </div>
</template>
<script setup>
const props = defineProps({
  label: { type: String, default: "" },
  styles: { type: String, default: "" },
  handleShowExports: { type: Function, required: false, default: null },
});
</script>

<style scoped>
input:checked ~ .checkmark {
  background-color: #27c498;
}
</style>
