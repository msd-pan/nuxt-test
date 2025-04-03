<template>
  <h1>Notes</h1>
  <br />
  <button @click="boolean = !boolean">add new {{ boolean }}</button>

  <!-- <component :is="boolean ? newNote : noteCard" /> -->

  <NewNote />
  <br />
  <br />
  <NoteCard />
</template>

<script setup>
const newNote = resolveComponent("NewNote");
const noteCard = resolveComponent("NoteCard");

const boolean = ref(false);
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
}
</style>
