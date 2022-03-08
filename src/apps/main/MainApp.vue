<template>
  <div style="backgroundColor:Silver">
    <div>
      <h2>MainApp in ./MainApp.vue </h2>
      <h3>Routerlink to / </h3>
      <router-link to="/">
         HOME(router link)
      </router-link>

      <h3>Routerlink to /desc </h3>
      <router-link to="/desc">Description(router link)</router-link>

      <h3>href to  /admin </h3>
      <a href="/mpa/admin"> href to ADMIN(anchor)</a>
    </div>

    <h3>main page</h3>
    <router-view />

  </div>
</template>

<script>

export default {
};
</script>

<style>
textarea {
  width: 100%;
  background-color: #eee;
  border: none;
  outline: none;
}
</style>
