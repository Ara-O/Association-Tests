import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as firebase from 'firebase/app';
import 'firebase/database'
import clicker from "../src/components/Buttons/TouchscreenButtons.vue"

// Configuring firebase 
const config = {
    apiKey:  import.meta.env.VITE_API_KEY,
    authDomain:  import.meta.env.VITE_AUTH_DOMAIN,
    projectId:  import.meta.env.VITE_PROJECT_ID,
    storageBucket:  import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId:  import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId:  import.meta.env.VITE_APP_ID
};

let firebaseapp = firebase.initializeApp(config)

const app = createApp(App);
app.component("clicker", clicker)
app.use(store).use(router).use(firebaseapp).mount("#app");
