<template>
  <div>
    <h1>{{ title }}</h1>
    <h4>Function : {{ hello() }}</h4>
  </div>
</template>

<script setup>
const title = ref("composition Api");
const hello = () => "hello from composition api";

onMounted(() => {
  setTimeout(() => {
    title.value = "title changed in composition api";
  }, 1000);
});
</script>

<style></style>
