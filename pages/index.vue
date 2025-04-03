<template>
  <nuxt-link to="/about">About</nuxt-link>
  <br />
  <nuxt-link to="/notes" target="_blank">Notes</nuxt-link>
  <br />
  <nuxt-link :to="`/notes/${randomNumber()}`">Notes</nuxt-link>
  <h1>hello world</h1>
</template>
<script setup>
const randomNumber = () => Math.floor(Math.random() * 100) + 1;
</script>
<style></style>
