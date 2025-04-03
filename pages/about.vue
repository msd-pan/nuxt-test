<template>
  <h1>about</h1>
  <button @click="enableLayout">Update Layout</button>
</template>
<script setup>
definePageMeta({
  layout: false,
});

const enableLayout = (params) => {
  return setPageLayout("custom");
};
</script>
