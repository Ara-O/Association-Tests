import { createStore } from "vuex";

export default createStore({
  state: {
    userData: {},
    currentTest: "",
    IAT_Gender_Toy: [],
    IAT_Gender_Toy_Touchscreen: [],
    IAT_Gender_Clothing: [],
    IAT_Gender_Clothing_Touchscreen: [],
    IAT_Gender_Color: [],
    IAT_Gender_Color_Touchscreen: [],
    IAT_Gender_Subject: [],
    IAT_Gender_Subject_Touchscreen: [],
    IAT_Gender_Roles: [],
    IAT_Gender_Roles_Touchscreen: [],
    IAT_Black_White: [],
    IAT_Black_White_Touchscreen: [],
    ibt_data: [],
    IAT_Cat_Dog: [],
    IBT_Cat_Dog: [],
    IBT_Gender_Toy: [],
    IT_trials: {},
    IT_trials_text: [],
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
