import Vuex from 'vuex';
import PatientsModule from '@/store/modules/PatientsModule';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    PatientsModule,
  },
});
