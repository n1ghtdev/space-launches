import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import hooks from '@u3u/vue-hooks';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(hooks);
Vue.use(VueCompositionApi);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
