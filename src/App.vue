<template>
  <div>
    <h1>Таблица диспансеризации 2023</h1>
    <Table />
    <ListDiseases ref="listDiseasesRef" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Table from '@/components/Table';
import ListDiseases from "@/components/ListDiseases";
import { getFromStorage } from "@/components/common/helpers/localStorage";
export default {
  name: 'App',
  components: {
    Table,
    ListDiseases
  },
  methods: {
    ...mapActions('DiseasesModule', ['setRow']),
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
</style>
