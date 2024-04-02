<script setup>
import { ref, computed } from 'vue'
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  //   x: {
  //     type: Number
  //   }
})
console.log(props.items)
/*
//const x10 = ref(props.x * 10) //ค่าoriginalเปลี่ยน ไม่เปลี่ยนตาม
const x10 = computed(() => props.x * 10) //ค่าorginalเปลี่ยนก็คำนวณใหม่ทุกครั้ง
*/
</script>

<template>
  <div>
    <div class="text-3xl font-semibold tracking-wide">
      <slot name="header"></slot>
    </div>
    <slot v-for="(item, index) in items" :key="index" :item5="item"></slot>
  </div>
</template>

<style scoped></style>
