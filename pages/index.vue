<template>
  <Banner />

  <h2>Recent Notes:{{ foo }}</h2>
  {{ $hello("Nuxt") }}
  {{ $consoleIt(foo) }}
  <NoteCard />
</template>

<script setup>
const foo = useFoo();
const { $hello, $consoleIt } = useNuxtApp();
console.log("useNuxtApp()", useNuxtApp());
</script>

<style></style>
