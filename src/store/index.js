import { createStore } from "vuex";

export default createStore({
  state: {
    userData: {},
    currentTest: "",
    uid: "",
  },

  getters: {
    getUID(state) {
      return state.uid;
    },
    getCurrentTest(state) {
      return state.currentTest;
    },
  },
  mutations: {
    changeUserID(state, payload) {
      state.uid = payload;
    },

    changeCurrentTest(state, payload) {
      state.currentTest = payload;
    },
  },
});
