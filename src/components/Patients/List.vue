<template>
  <div>
    <table class="table">
      <tr>
        <th
          v-for="head in headingNames"
          :key="head"
          class="table__heading"
        >
          {{ head }}
        </th>
      </tr>
      <tr
        class="table__row"
        v-for="(row, index) in getRow"
        :key="row"
        :id="index"
        @click="deleteRow(index)"
      >
        <td
          v-for="(token, index) in row"
          :key="token"
          :id="index"
          class="table__slot"
        >
          {{ token.value }}
        </td>
      </tr>
    </table>
    <button
      class="btn-add-row"
      @click="addNewRow"
    >
      Добавить новую строку
    </button>

    <ManagePatients />
    <ModalWarning text="Вы действительно хотите удалить строчку?"/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import ManagePatients from "@/components/Patients/components/ManagePatients.vue";
import ModalWarning from "@/components/ModalWarning.vue";

export default {
  name: "PatientsList",
  components: {
    ManagePatients,
    ModalWarning
  },
  data: () => ({
    headingNames: [
      'ФИО',
      'Диагноз',
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь'
    ],
  }),
  methods: {
    ...mapActions('PatientsModule', ['setCurrentIndex']),
    deleteRow(idx) {
      this.setCurrentIndex(idx);
    },
    addNewRow() {
    },
  }
  ,
  computed: {
    ...mapGetters('PatientsModule', ['getRow'])
  }
}
</script>
