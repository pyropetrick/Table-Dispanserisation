<template>
  <div>
    <h1>Таблица диспансеризации 2023-test</h1>
    <Table />
    <ListDiseases ref="listDiseasesRef" />
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import TheTable from '@/components/TheTable';
import TheListDiseases from "@/components/TheListDiseases";
import {getFromStorage} from "@/components/commons/localStorage";

export default {
  name: 'App',
  components: {
    TheTable,
    TheListDiseases
  },
  computed: {
    ...mapGetters(['getModal'])
  },
  methods: {
    ...mapActions(['setRow', 'setModalVisible']),
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

