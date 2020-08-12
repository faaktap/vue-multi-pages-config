# vue-multi-spa

## 1. Multi-Pages App Structure
It has two apps `admin` and `main`
```
src/apps/admin
   +- router
   +- views
   +- components
   +- index.js (entry point)
   +- AdminApp.vue

src/apps/main
   +- router
   +- views
   +- components
   +- index.js (entry point)
   +- MainApp.vue

```
, which have their own components, router, etc

Plus, shared components

```
src
  +- apps
  |    +- admin
  |    |    +- ...
  |    +- main
  |         +- ...
  |
  +- assets      SAHRED
  +- components  SHARED
  +- store(?)    might be SHARED, but not useful
  +- views       SHARED
```

## vue.config.js
each `SPA` uses its own template html
```
module.exports = {
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
  ...
}
```
* `main` app uses template `public/main.html`
* `main` app is mapped to `index.html`
* `admin` app uses template `public/admin.html`
* `admin` app is mapped to `admin/index.html`

When connecting `http://localhost`, `dist/index.html` is fetched.

When connecting `http://locahost/admin`, `dist/admin/index.html` is fetched.