import Vue from 'vue';
import VueNumberInput from '@chenfengyuan/vue-number-input';

import App from './App.vue';
import router from './router';
import store from './store/store';
import vuetify from './plugins/vuetify';
import ApiService from "./common/api.service";

Vue.config.productionTip = false;

ApiService.init();

Vue.component('number-input', VueNumberInput);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
