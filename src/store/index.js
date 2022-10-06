import {createStore} from 'vuex'

export default createStore({
    state: {
        modalVisible: false,
        rows: [],
        rowData: [],
    },
    getters: {
        getModal: (state) => state.modalVisible,
        getRow: (state) => state.rows,
        getRowData: (state) => state.rowData,
    },
    mutations: {
        SET_MODAL(state, value) {
            state.modalVisible = value;
        },
        SET_ROW(state, value) {
            state.rows.push(value);
        },
        SET_ROW_DATA(state, value) {
            state.rowData = value;
        }
    },
    actions: {
        setModalVisible({commit}, value) {
            commit("SET_MODAL", value);
        },
        setRow({commit}, value) {
            commit("SET_ROW", value);
        },
        setDataRow({commit}, value) {
            commit("SET_ROW_DATA", value);
        }
    },
    modules: {}
})
