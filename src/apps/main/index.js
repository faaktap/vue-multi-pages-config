import Vue from 'vue';
import store from '@/store';
import MainApp from './MainApp.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(MainApp),
}).$mount('#app');
