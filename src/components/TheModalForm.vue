<template>
  <teleport to="body">
    <div
      class="modal__background"
      @click="closeModal"
    ></div>
    <div class="modal">
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
      >Добавить человека
      </button>
    </div>
  </teleport>

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import CalcHike from '@/components/commons/calcHike';
import CheckDiagnosis from "@/components/commons/checkDiagnosis";
import {addToStorage} from "@/components/commons/localStorage";

export default {
  name: "TheModalForm",
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
    ...mapActions(['setModalVisible', 'setDataRow', 'setRow']),
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
      addToStorage({key: 'patients', value: this.getRow })
      this.setModalVisible(false);
    },
    closeModal() {
      this.setModalVisible(false);
    },


  },
  computed: {
    ...mapGetters(['getRowData', 'getRow'])
  }
}
</script>

<style scoped lang="scss">

.modal {
  width: 500px;
  background: grey;
  color: black;
  position: fixed;
  top: 50%;
  left: 40%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  font-weight: normal;
  font-size: 0.875rem;


  &__background {
    position: fixed;
    background-color: rgba(black, 0.8);
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
  }

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