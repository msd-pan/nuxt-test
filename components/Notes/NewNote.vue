<template>
  <input v-model="newNote" v-focus type="text" placeholder="type new note..." />
</template>
<script setup>
const newNote = ref("this is pre written value~");

const vFocus = {
  mounted: (el) => {
    el.focus();
  },
};
</script>
