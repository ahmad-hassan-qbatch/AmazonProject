<script setup>
const { label, styles, value, handleChangeCheck } = defineProps({
  label: { type: String, default: "" },
  styles: { type: String, default: "" },
  value: Boolean,
  handleChangeCheck: { type: Function, required: false, default: null },
});
</script>

<template lang="">
  <div class="flex">
    <label class="flex h-[20px] w-[20px] cursor-pointer items-center">
      <input
        type="checkbox"
        class="w-[0px] h-[0px]"
        :checked="value"
        @input="
          (event) => {
            handleChangeCheck(event.target.checked);
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
    <span class="text-[#031625] text-[14px] ml-[6px]">{{ label }}</span>
  </div>
</template>

<style scoped>
input:checked ~ .checkmark {
  background-color: #27c498;
}
</style>
