<template>
  <h1>Таблица диспансеризации 2023</h1>
  <Table />
  <button @click="openListDiseases" class="btn-open">Список заболеваний</button>
  <ListDiseases v-if="getModal.listDiseases" />
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Table from '@/components/Table';
import ListDiseases from "@/components/ListDiseases";
import { getFromStorage } from "@/components/common/helpers/localStorage";

export default {
  name: 'App',
  components: {
    Table,
    ListDiseases
  },
  computed: {
    ...mapGetters('DiseasesModule', ['getModal'])
  },
  methods: {
    ...mapActions('DiseasesModule', ['setRow', 'setModalVisible']),
    openListDiseases() {
      this.setModalVisible({value: true, name: 'listDiseases'})
    }
  },
  mounted() {
    if (getFromStorage('patients')) {
      getFromStorage('patients').forEach(patient => this.setRow(patient))
    }

  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
.btn-open {
  width: 100%;
  padding: 10px;
  background-color: white;
  color: black;
  border-top: none;
  border-radius: 0 0 5px 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: grey;
    color: white;
  }

}
</style>
