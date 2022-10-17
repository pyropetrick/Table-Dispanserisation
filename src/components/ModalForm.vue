<template>
  <ModalDialog>
    <input
      type="text"
      name="fullName"
      v-model="fullName"
      class="modal__input"
      placeholder="Введите ФИО"
    >
    <input
      type="text"
      name="diagnosis"
      v-model="diagnos"
      class="modal__input"
      placeholder="Введите Диагноз"
    >
    <input
      type="text"
      name="date"
      v-model="date"
      class="modal__input"
      placeholder="Введите Месяц.Год(формат - 07.22) постановки на учет"
    >
    <button
      class="modal__btn-add"
      @click="addNewHuman"
    >
      Добавить человека
    </button>
  </ModalDialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CalcHike from '@/components/common/helpers/calcHike';
import CheckDiagnosis from "@/components/common/helpers/checkDiagnosis";
import { addToStorage } from "@/components/common/helpers/localStorage";
import ModalDialog from '@/components/common/ModalDialog';

export default {
  name: "TheModalForm",

  components: {
    ModalDialog
  },

  data: () => ({
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
    ...mapActions('DiseasesModule', ['setDataRow', 'setRow']),

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
    ...mapGetters('DiseasesModule', ['getRowData', 'getRow'])
  }
}
</script>

<style scoped lang="scss">

.modal {
  &__input {
    padding: 10px;
    border: none;
    border-bottom: 1px solid grey;

    &:focus-visible {
      outline: none;
    }

  }

  &__btn-add {
    padding: 10px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border: none;

    &:hover {
      background-color: grey;
      color: white;
    }
  }
}
</style>
