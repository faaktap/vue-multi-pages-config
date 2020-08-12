<template>
  <div>
    <p>
      It has two SPAs, MAIN and ADMIN
    </p>
    <textarea class="form-control" rows="11" v-model="desc">
    </textarea>
    <p>vue.config.js</p>
    <textarea class="form-control" v-model="vue_config_js" rows="28"></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desc: `
  MAIN(path: '/')
    +- router
         +- link       : '/'
         +- description: '/desc'

  ADMIN(path: '/admin')
    +- router
        +- home: '/admin'
        +- menu: '/admin/menu'
`,
      vue_config_js: `const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  pages: {
    index: {
      entry: './src/apps/main/index.js',
      template: 'public/main.html',
      filename: 'index.html',
      title: 'HOME',
    },
    admin: {
      entry: './src/apps/admin/index.js',
      template: 'public/admin.html',
      filename: 'admin/index.html',
      title: 'ADMIN',
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@admin', resolve('src/apps/admin'))
      .set('@main', resolve('src/apps/main'));
  },
};
    `,
    };
  },
};
</script>

<style>
</style>
