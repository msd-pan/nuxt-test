export default defineNuxtRouteMiddleware((to, from) => {
  console.log("Middleware!", { to, from });
});
