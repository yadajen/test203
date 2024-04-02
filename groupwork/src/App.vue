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
  <testslot>
    <template #logo></template>
    <template #header> </template>
  </testslot>
</template>

<style scoped></style>
