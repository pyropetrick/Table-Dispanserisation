import {createStore} from 'vuex'

export default createStore({
  state: {
    modalVisible: {
      'form': false,
      'warning': false,
      'listDiseases': false,
    },
    currentRowIndex: null,
    rows: [],
    rowData: [],
  },
  getters: {
    getModal: (state) => state.modalVisible,
    getCurrentIndex: (state) => state.currentRowIndex,
    getRow: (state) => state.rows,
    getRowData: (state) => state.rowData,
  },
  mutations: {
    SET_MODAL: (state, {value, name}) =>
      typeof name === 'object' ? name.forEach(item => state.modalVisible[item] = value) : state.modalVisible[name] = value,
    SET_CURRENT_INDEX: (state, value) => state.currentRowIndex = value,
    SET_ROW: (state, value) => state.rows.push(value),
    SET_ROW_DATA: (state, value) => state.rowData = value,
    DELETE_ROW: (state, value) => {
      state.rows.splice(value, 1)
    }

  },
  actions: {
    setModalVisible: ({commit}, value) => commit("SET_MODAL", value),
    setCurrentIndex: ({commit}, value) => commit("SET_CURRENT_INDEX", value),
    setRow: ({commit}, value) => commit("SET_ROW", value),
    setDataRow: ({commit}, value) => commit("SET_ROW_DATA", value),
    deleteRow: ({commit}, value) => commit("DELETE_ROW", value),

  },
  modules: {}
})
