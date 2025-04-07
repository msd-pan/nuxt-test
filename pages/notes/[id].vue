<template>
  <h1>{{ $route.params.id }}</h1>

  <button @click="copyUrl">copy url</button>
</template>
<script setup>
definePageMeta({
  layout: "custom",
});
const { copyToClipboard } = useClipboardCopy();

const copyUrl = () => {
  copyToClipboard(window.location.href);
};
</script>
