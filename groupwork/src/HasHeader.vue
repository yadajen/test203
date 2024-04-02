<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue'
import PageHeader from './components/Header.vue'
onBeforeMount(() => {
  // count.value = 1
  console.log('At App.vue, on before mount...')
})
onMounted(() => {
  // count.value = 10
  console.log('At App.vue, on mounted...')
})
onBeforeUpdate(() => {
  count.value = count.value * 10
  console.log('At App.vue, on before update')
})
onUpdated(() => {
  console.log('At App.vue, on updated')
})
console.log('At App.vue (script setup)')
const count = ref(0)
console.log(count.value)
const fullname = ref('Somchai Jaidee')
const hasHeader = ref(true)
</script>
<template>
  <div class="w-full flex items-center">
    <PageHeader v-if="hasHeader" />
    <div>
      {{ hasHeader }}
      <p>
        <input
          type="checkbox"
          v-model="hasHeader"
          @click="hasHeader = !hasHeader"
        />
        Enable Header
      </p>
    </div>
    <div>
      {{ fullname }}
      <button
        @click="fullname = fullname.toUpperCase()"
        class="px-3 py-2 bg-purple-500"
      >
        toUpperCase
      </button>
    </div>
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
  </div>
</template>
<style scoped></style>
