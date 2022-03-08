import Vue from 'vue';
import store from '@/store';
import MainApp from './MainApp.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.mixin({
  created() {
    console.log('[created]M ' + this.$options.name,)
  },
});


new Vue({
  router,
  store,
  render: (h) => h(MainApp),
}).$mount('#app');
