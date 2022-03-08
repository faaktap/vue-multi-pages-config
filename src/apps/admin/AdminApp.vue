<template>
  <div id="app">
    <h2>AdminApp in ./admin/AdminApp.vue </h2>
    <div id="nav">
      <h2>/admin link</h2>
      <router-link to="/admin">ADMIN HOME(router link)</router-link> |
      <h2>/admin/menu link</h2>
      <router-link to="/admin/menu">MENU(router link)</router-link> |
      <h2>Back to / </h2>
      <a href="/mpa/">MAIN APP(achor)</a>
    </div>
    <h2>Routerview </h2>
    <router-view/>
  </div>
</template>

<style lang="less">
</style>
