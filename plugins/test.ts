export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.directive("debug", {
    mounted: (el) => console.log("degug-->", el.innerHTML),
  });
});
