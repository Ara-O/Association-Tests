import { createStore } from "vuex";

export default createStore({
  state: {
    userData: {},
    currentTest: "",
    IAT_Gender_Toy: [],
    IAT_Gender_Toy_Touchscreen: [],
    IAT_Gender_Roles: [],
    IAT_Gender_Roles_Touchscreen: [],
    IAT_Black_White: [],
    IAT_Black_White_Touchscreen: [],
    ibt_data: [],
    IBT_Gender_Toy: [],
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
