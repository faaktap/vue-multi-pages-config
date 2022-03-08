import Vue from 'vue';
import store from '@/store';
import AdminApp from './AdminApp.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.mixin({
  created() {
    console.log('[created]A ' + this.$options.name,)
  },
});


new Vue({
  router,
  store,
  render: (h) => h(AdminApp),
}).$mount('#app');
