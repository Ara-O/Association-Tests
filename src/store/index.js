import { createStore } from "vuex";

export default createStore({
  state: {
    userData: {},
    IAT_Gender: [],
    IAT_Gender_Touchscreen: [],
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
