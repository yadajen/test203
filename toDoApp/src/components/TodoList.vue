<script setup>
import todos from '../../data/todos.json'
import { ref } from 'vue'
const count = ref(1)
</script>

<template>
  <listModal :items="todos">
    <template #header> ToDoList ! </template>
    <template #default="{ item5 }">
      <!--whatever name-->
      <baseCard size="sm" variant="tonal">
        <template #title>{{ item5.title }}</template>
        <template #subtitle>{{ item5.category }}</template>
        <template #content>{{ item5.description }}</template>
      </baseCard>
    </template>
  </listModal>
</template>

<style scoped></style>
