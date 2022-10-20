<template>
  <div class="p-4">
    <div class="d-flex justify-content-end mb-2">
      <button
          class="btn btn-primary "
          @click="addPatient"
      >
        Добавить пациента
      </button>
    </div>
    <b-table striped hover :fields="columns" :items="items"></b-table>

    <ManagePatients ref="managePatientsRef" />
<!--    <ModalWarning text="Вы действительно хотите удалить строчку?"/>-->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { columns } from '@/components/Patients/constants';
import ManagePatients from "@/components/Patients/components/ManagePatients.vue";
// import ModalWarning from "@/components/common/ModalWarning.vue";

export default {
  name: "PatientsList",
  components: {
    ManagePatients,
    // ModalWarning
  },
  data: () => ({
    columns,
  }),
  methods: {
    ...mapActions('PatientsModule', ['setCurrentIndex']),
    deletePatient() {

    },
    addPatient() {
      this.$refs.managePatientsRef.showModal()
    },
  }
  ,
  computed: {
    ...mapGetters('PatientsModule', ['items'])
  }
}
</script>
