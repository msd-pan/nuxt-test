<template>
  <h1 v-debug>Welcome To Our Notes App!</h1>
  <button @click="fullName = 'Carlos cold'">change name</button>
  <h2>{{ fullName }}</h2>

  <ul>
    <li v-for="(value, key) in user" :key="key">{{ key }} : {{ value }}</li>
  </ul>
</template>
<script setup>
const firstName = ref("John");
const lastName = ref("dow");

const fullName = computed({
  get: () => {
    return `${firstName.value} ${lastName.value}`;
  },
  set: (name) => {
    const names = name.split(" ");
    firstName.value = names[0];
    lastName.value = names[names.length - 1];
  },
});

const user = reactive({
  name: "John Doe",
  age: 30,
  email: "test@email.com",
});
</script>
