<script lang="ts" setup>
console.log(formatNumber(1234));
const [isToggled, toggle] = useToggle(true);
</script>

<template>
  <p>{{ isToggled }}</p>
  <button @click="toggle">toggle me</button>
  <NuxtWelcome />
</template>

<style></style>
