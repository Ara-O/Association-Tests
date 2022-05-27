import { createStore } from "vuex";

export default createStore({
  state: {
    userData: {},
    current_IAT_test: "",
    IAT_Gender: [],
    IAT_Gender_Touchscreen: [],
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
    getIatData(state){
      return state.IAT_Gender
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});
