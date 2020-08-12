<template>
  <div>
    <div>
      <router-link to="/">HOME(router link)</router-link> |
      <router-link to="/desc">Description(router link)</router-link> |
      <a href="/admin">ADMIN(anchor)</a>
    </div>
    <h3>main page</h3>
    <router-view/>
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
