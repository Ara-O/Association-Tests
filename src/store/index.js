import { createStore } from "vuex";

export default createStore({
  state: {
    userData: {},
    currentTest: "",
    current_IAT_test: "",
    IAT_Gender_Toy: [],
    IAT_Gender_Toy_Touchscreen: [],
    IAT_Black_White: [],
    IAT_Black_White_Touchscreen: [],
    ibt_data: [],
    memorization_times: {},
    IT_trials: {},
    IT_trials_text: [],
    uid: Math.floor((Math.random() * 10000) + 1)
  },
  getters: {
    getUID(state){
      return state.uid;
    },
    getCurrentTest(state){
      return state.currentTest;
    }
  },
  mutations: {
    changeCurrentTest(state, payload){
      state.currentTest = payload;
    }
  },
  actions: {},
  modules: {},
});
