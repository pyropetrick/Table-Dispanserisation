<template>
  <div>
    <h1>Таблица диспансеризации 2023</h1>
    <PatientsList />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PatientsList from '@/components/Patients/List.vue';
import { getFromStorage } from "@/components/common/helpers/localStorage";

export default {
  name: 'App',
  components: {
    PatientsList,
  },

  methods: {
    ...mapActions('PatientsModule', ['addItemFromStorage']),
  },

  mounted() {
    if (getFromStorage('patients')) {
      getFromStorage('patients').forEach(patient => this.addItemFromStorage(patient))
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>
