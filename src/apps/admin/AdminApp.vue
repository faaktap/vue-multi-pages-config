<template>
  <div id="app">
    <div id="nav">
      <router-link to="/admin">ADMIN HOME(router link)</router-link> |
      <router-link to="/admin/menu">MENU(router link)</router-link> |
      <a href="/">MAIN APP(achor)</a>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
</style>
