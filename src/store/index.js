import { createStore } from "vuex";

export default createStore({
  state: {
    IAT_data: {
    },
    IAT_TS_data: {
    },
    irbt_data: {
    },
    memorization_times: {},
    IT_trials: {},
    uid: Math.floor((Math.random() * 10000) + 1)
  },
  mutations: {},
  actions: {},
  modules: {},
});
