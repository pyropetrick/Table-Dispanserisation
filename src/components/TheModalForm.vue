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

export default {
  name: "TheModalForm",
  data: () => ({
    fullName: '',
    diagnos: '',
    date: '',
    period: '',
    survey: '',


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
      this.checkDiagnos();

      const arraySeasons = CalcHike.call(this,this.date, this.period);
      this.setDataRow([fullName, diagnos,...arraySeasons]);
      this.setRow(this.getRowData);
      this.setModalVisible(false);
    },
    closeModal() {
      this.setModalVisible(false);
    },
    checkDiagnos() {
      switch (this.diagnos) {
        case 'АГ':
          console.log('АГ')
          break;
        case 'Пневмония':
          console.log('Пневмония')
          break;
        case 'Хронический Тонзиллит':
          console.log('Хронический Тонзиллит')
          break;
        case 'БА':
          console.log('БА')
          break;
        case 'Гастрит':
          console.log('Гастрит')
          break;
        case 'ЯБ':
          console.log('ЯБ')
          break;
        case 'Ожирение':
          console.log('Ожирение')
          break;
        case 'Пиелонефрит':
          console.log('Пиелонефрит')
          break;
        case 'Анемия':
          console.log('Анемия')
          break;
        case 'Геморрой':
          console.log('Геморрой')
          break;
        case 'Варикоз':
          console.log('Варикоз')
          break;
        case 'МКБ':
          console.log('МКБ')
          break;
        case 'Хронический Гастрит':
          console.log('Хронический Гастрит')
          break;
        case 'Хронический отит':
          console.log('Хронический отит')
          break;
        case 'ИБС':
          console.log('ИБС')
          this.period = 3;
          this.survey = 'ЭКГ с физнагрузкой, ОАК, ОАМ, БАК, ЭХО-КГ';
          break;

      }
    },

  },
  computed: {
    ...mapGetters(['getRowData'])
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