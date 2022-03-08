import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@admin/components/AdminMain.vue';
import DescView from '@main/components/Desc.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main,
  },
  {
    path: '/desc',
    name: 'Description',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DescView,
  },
];

console.log('MA-C-[BASE URL] ', process.env.BASE_URL);
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from,next) => {
  console.log('MR - From.name, to.name |', from.name,'|', to.name,'|', from.path,'|', to.path, router.mode, router.options.base);
})

export default router;
