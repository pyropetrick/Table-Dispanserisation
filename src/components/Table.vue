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
    <ModalForm/>
    <ModalWarning text="Вы действительно хотите удалить строчку?"/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import ModalForm from "@/components/ModalForm.vue";
import ModalWarning from "@/components/ModalWarning.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Table",
  components: {
    ModalForm,
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
    ...mapActions('DiseasesModule', ['setCurrentIndex']),
    deleteRow(idx) {
      this.setCurrentIndex(idx);
    },
    addNewRow() {
    },
  }
  ,
  computed: {
    ...mapGetters('DiseasesModule', ['getRow'])
  }
}
</script>

<style scoped lang="scss">
.table {
  width: 100%;
  border: 1px solid black;
  border-spacing: 0;
  text-align: center;
  border-collapse: collapse;
  height: auto;
  font-weight: normal;
  font-size: 0.875rem;

  &__heading {
    border: 1px solid black;
    padding: 5px;
  }

  &__slot {
    border: 1px solid black;
    min-height: 35px;
    padding: 3px;
    width: 30px;
    height: 35px;
  }
}

.btn-add-row {
  width: 100%;
  padding: 10px;
  background-color: white;
  color: black;
  border-top: none;
  //border-radius: 0 0 5px 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: grey;
    color: white;
  }
}
</style>