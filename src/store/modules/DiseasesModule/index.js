export default {
  namespaced: true,
  state: {
    currentRowIndex: null,
    rows: [],
    rowData: [],
  },

  getters: {
    getCurrentIndex: (state) => state.currentRowIndex,
    getRow: (state) => state.rows,
    getRowData: (state) => state.rowData,
  },

  mutations: {
    SET_CURRENT_INDEX: (state, value) => state.currentRowIndex = value,
    SET_ROW: (state, value) => state.rows.push(value),
    SET_ROW_DATA: (state, value) => state.rowData = value,
    DELETE_ROW: (state, value) => {
      state.rows.splice(value, 1)
    }
  },

  actions: {
    setCurrentIndex: ({commit}, value) => commit("SET_CURRENT_INDEX", value),
    setRow: ({commit}, value) => commit("SET_ROW", value),
    setDataRow: ({commit}, value) => commit("SET_ROW_DATA", value),
    deleteRow: ({commit}, value) => commit("DELETE_ROW", value),

  },
}
