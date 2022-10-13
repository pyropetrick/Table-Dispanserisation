import { createStore } from 'vuex';
import DiseasesModule from '@/store/modules/DiseasesModule';

export default createStore({
  modules: {
    DiseasesModule,
  },
});
