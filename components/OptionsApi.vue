<template>
  <div>
    <h1>{{ title }}</h1>
    <h4>Function : {{ hello() }}</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Options Api",
    };
  },
  methods: {
    hello() {
      return "hello from Options Api";
    },
  },
  mounted() {
    setTimeout(() => {
      this.title = "title changed";
    }, 1000);
  },
};
</script>

<style></style>
