<template>
  <b-modal ref="modalRef" hide-header>
    <input
      type="text"
      v-model="fullName"
      class="form-control-sm mb-2 w-100"
      placeholder="Введите ФИО"
    >

    <Multiselect
      v-model="diagnos"
      :options="diseasesList"
      placeholder="Введите Диагноз"
      class="mb-2"
    />

    <input
      type="text"
      v-model="date"
      class="form-control-sm w-100"
      placeholder="Введите Месяц.Год(формат - 07.22) постановки на учет"
    >

    <template #modal-footer>
      <button class="btn btn-secondary" @click="hideModal">Cancel</button>
      <button
        class="btn btn-primary"
        @click="addNewHuman"
      >
        Добавить человека
      </button>
    </template>

  </b-modal>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import CalcHike from '@/components/common/helpers/calcHike';
import CheckDiagnosis from "@/components/common/helpers/checkDiagnosis";
import {addToStorage} from "@/components/common/helpers/localStorage";
import Multiselect from 'vue-multiselect';
import diseasesList from '@/components/common/constants/diseases';

export default {
  name: "ManagePatients",
  components: {
    Multiselect
  },

  data: () => ({
    diseasesList,
    fullName: '',
    diagnos: '',
    date: '',
  }),

  methods: {
    async init(initData) {
      this.setInitData(initData)
      this.showModal();
    },

    setInitData(data) {
      if (!data) return;

      const {fullName, diagnos, date} = data;
      this.fullName = fullName;
      this.diagnos = diagnos;
      this.date = date;
    },

    showModal() {
      this.$refs.modalRef.show();
    },

    hideModal() {
      this.$refs.modalRef.hide();
      this.reset();
    },

    reset() {
      this.fullName = '';
      this.diagnos = '';
      this.date = '';
    },


    ...mapActions('PatientsModule', ['setRow']),

    addNewHuman() {
      const checkedDiagnosData = CheckDiagnosis(this.diagnos);
      const seasonsData = CalcHike(this.date, checkedDiagnosData);

      this.setRow({patient: this.formData, seasonsData});
      addToStorage({key: 'patients', value: this.items});
      this.hideModal();
    },
  },

  computed: {
    ...mapGetters('PatientsModule', ['items']),

    formData: ({fullName, diagnos, date}) => ({fullName, diagnos, date}),
  },
}
</script>

