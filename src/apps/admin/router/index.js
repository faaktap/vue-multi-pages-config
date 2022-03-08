import Vue from 'vue';
import VueRouter from 'vue-router';
import WelcomePage from '@/components/SharedWelcome.vue';
import MenuView from '@admin/views/MenuView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/admin',
    name: 'Home',
    component: WelcomePage,
  },
  {
    path: '/admin/menu',
    name: 'Menu',
    component: MenuView,
  },
];
console.log('AD-C-[BASE URL] ', process.env.BASE_URL);
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(from, '->', to);
  console.log('AD - From.name, to.name |', from.name,'|', to.name,'|', from.path,'|', to.path, router.mode, router.options.base);
  next();
});
export default router;
