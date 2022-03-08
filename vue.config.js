const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: '/mpa/',
  pages: {
    main: {
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
  // belows are optional configurations for simple import
  // see 'src/apps/admin/views/MenuView.vue'
  chainWebpack: (config) => {
    config.resolve.alias
      // .set('@', resolve('src')) <= already set
      .set('@admin', resolve('src/apps/admin'))
      .set('@main', resolve('src/apps/main'));
  },
};
