import Vue from 'vue';
import Vuex from 'vuex';

import launches from './modules/launches';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { launches },
});
