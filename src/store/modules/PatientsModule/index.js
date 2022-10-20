import {columns} from '@/components/Patients/constants';

export default {
  namespaced: true,
  state: {
    currentRowIndex: null,
    rows: [],
    rowData: [],
    tableItems: [],
  },

  getters: {
    getCurrentIndex: (state) => state.currentRowIndex,
    getRow: (state) => state.rows,
    getRowData: (state) => state.rowData,
    items: (state) => state.tableItems,
  },

  actions: {
    setCurrentIndex: ({commit}, value) => commit("SET_CURRENT_INDEX", value),
    setRow: ({commit}, {patient: {fullName, diagnos}, seasonsData}) => {
      const payload = [fullName, diagnos, ...seasonsData]
      commit("SET_ROW", [payload, columns])
    },
    addItemFromStorage: ({commit}, value) => commit("ADD_ITEM_FROM_STORAGE", value),
    deleteRow: ({commit}, value) => commit("DELETE_ROW", value),
  },

  mutations: {
    SET_CURRENT_INDEX: (state, value) => state.currentRowIndex = value,
    SET_ROW: (state, [value, columns]) => {
      const item = {};
      columns.forEach(({key}, index) => (item[key] = value[index].value ? value[index].value : value[index]));
      state.tableItems.push(item)
    },
    ADD_ITEM_FROM_STORAGE: (state, value) => state.tableItems.push(value),
    DELETE_ROW: (state, value) => {
      state.rows.splice(value, 1)
    }
  },
}
