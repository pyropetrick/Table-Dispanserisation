<template>
  <ModalDialog>
    <input
        type="text"
        v-model="fullName"
        class="form-control-sm"
        placeholder="Введите ФИО"
    >

    <Multiselect v-model="diagnos" :options="diseasesList" placeholder="Введите Диагноз" />

    <input
        type="text"
        v-model="date"
        class="form-control-sm"
        placeholder="Введите Месяц.Год(формат - 07.22) постановки на учет"
    >

    <template #actions>
      <button
          class="btn btn-primary"
          @click="addNewHuman"
      >
        Добавить человека
      </button>
    </template>
  </ModalDialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CalcHike from '@/components/common/helpers/calcHike';
import CheckDiagnosis from "@/components/common/helpers/checkDiagnosis";
import { addToStorage } from "@/components/common/helpers/localStorage";
import ModalDialog from '@/components/common/ModalDialog';
import Multiselect from 'vue-multiselect';
import diseasesList from '@/components/common/constants/diseases';

export default {
  name: "ManagePatients",
  components: {
    ModalDialog,
    Multiselect
  },

  data: () => ({
    diseasesList,

    fullName: '',
    diagnos: '',
    date: '',
    period: {
      doctorExam: 0,
      surveys: 0,
    },
    survey: null,
  }),

  methods: {
    ...mapActions('PatientsModule', ['setDataRow', 'setRow']),

    addNewHuman() {
      const fullName = {
        value: this.fullName
      };
      const diagnos = {
        value: this.diagnos
      }
      CheckDiagnosis.call(this);
      const arraySeasons = CalcHike.call(this, this.date, this.period, this.survey);
      this.setDataRow([fullName, diagnos, ...arraySeasons]);
      this.setRow(this.getRowData);
      addToStorage({key: 'patients', value: this.getRow})
    },
  },

  computed: {
    ...mapGetters('PatientsModule', ['getRowData', 'getRow'])
  }
}
</script>
