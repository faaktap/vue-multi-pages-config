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
console.log('[BASE URL] ', process.env.BASE_URL);
const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(from, '->', to);
  next();
});
export default router;
