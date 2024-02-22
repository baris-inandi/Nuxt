<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div class="flex h-screen w-screen flex-col items-center justify-center">
    <h1 class="text-lg font-bold">Welcome to Nuxt</h1>
    <button @click="count++">You clicked me {{ count }} times.</button>
  </div>
</template>
