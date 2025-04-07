<template>
  <h1 v-debug :class="isRed ? 'is-red' : 'is-green'" @click="isRed = !isRed">
    Welcome To Our Notes App!
  </h1>
</template>
<script setup>
const isRed = ref(true);

watch(
  isRed,
  (newV, preV) => {
    console.log(`new: ${newV} pre: ${preV}`);
  },
  { once: true }
);
</script>
<style scoped>
.is-red {
  color: red;
}
.is-green {
  color: green;
}
</style>
