import { createStore } from "vuex";

export default createStore({
  state: {
    userData: {},
    current_IAT_test: "",
    IAT_Gender: [],
    IAT_Gender_Touchscreen: [],
    IAT_Black_White: [],
    IAT_Black_White_Touchscreen: [],
    irbt_data: {},
    irbt_data_text: [],
    memorization_times: {},
    IT_trials: {},
    IT_trials_text: [],
    uid: Math.floor((Math.random() * 10000) + 1)
  },
  mutations: {},
  actions: {},
  modules: {},
});
