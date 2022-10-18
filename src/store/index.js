import Vuex from 'vuex';
import DiseasesModule from '@/store/modules/DiseasesModule';
import PatientsModule from '@/store/modules/DiseasesModule';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    DiseasesModule,
    PatientsModule,
  },
});
