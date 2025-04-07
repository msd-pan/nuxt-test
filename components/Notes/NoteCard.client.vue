<template>
  <div class="card">
    <h1>Title</h1>
    <p>Description</p>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.card {
  max-width: 30%;
  border: 1px solid grey;
  border-radius: 20px;

  h1 {
    color: red;
    padding: 10px;
    border-bottom: 1px solid black;
  }

  p {
    padding: 10px;
  }
}
</style>
