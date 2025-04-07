<template>
  <nuxt-link to="/about">About</nuxt-link>
  <br />
  <nuxt-link to="/notes">Notes</nuxt-link>
  <br />
  <nuxt-link :to="`/notes/${randomNumber()}`">Notes</nuxt-link>

  <slot />
</template>
<script setup>
const randomNumber = () => Math.floor(Math.random() * 100) + 1;
</script>
