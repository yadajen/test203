<script setup></script>

<template>
  <div class="bg-slate-200 font-sans w-full">
    <div class="w-full">
      <slot name="logo">
        <img src="./home_icons.png" />
      </slot>
    </div>
    <div class="justify-center items-center ml-3 w-full">
      <slot>this is default slot</slot>
      <slot name="header">this is header slot </slot>
    </div>
  </div>
</template>

<style scoped></style>
