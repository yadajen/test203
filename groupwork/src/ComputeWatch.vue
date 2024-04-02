<script setup>
import { ref, computed, watch, watchEffect } from 'vue'
console.log('At App.vue (script setup)')
const count = ref(0)
const multiple10 = computed(() => {
  console.log('computed *10 is working')
  return count.value * 10
})
const multiple100 = computed(() => {
  console.log('computed *100 is working')
  return count.value * 100
})

console.log(count.value)

//ใส่กี่ตัวก็ได้
watchEffect(() => {
  console.log('watchEffact working....')
  console.log(count.value)
})
</script>
<template>
  <div class="w-full">
    <div class="w-1/2 p-10 shadow-xl">
      <div class="flex gap-2">
        <button
          @click="--count < 0 ? (count = 0) : count"
          class="px-2 py-1 bg-red-500 text-white"
        >
          -
        </button>
        <h1 class="text-2xl">Counter: {{ count }}</h1>
        <button @click="count++" class="px-2 py-1 bg-green-500 text-white">
          +
        </button>
      </div>
    </div>
    <div>Count*10 = {{ multiple10 }}</div>
    <div>Count*100 = {{ multiple100 }}</div>
  </div>
</template>
<style scoped></style>
