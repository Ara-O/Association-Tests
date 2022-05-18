import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as firebase from 'firebase/app';
import 'firebase/database'
import clicker from "../src/components/IAT_TS_Buttons.vue"
import jellybtn from "../src/components/Jelly_Button.vue"

// Configuring firebase 

const config = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID
};

let firebaseapp = firebase.initializeApp(config)

const app = createApp(App);
app.component("clicker", clicker)
app.component("jelly-button", jellybtn)
app.use(store).use(router).use(firebaseapp).mount("#app");
