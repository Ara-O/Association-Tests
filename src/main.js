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
    apiKey: "AIzaSyCvK9ZURXJObb7xVyx5APWEmOgkYNEOZGo",
    authDomain: "implicit-association-tes-b2656.firebaseapp.com",
    projectId: "implicit-association-tes-b2656",
    storageBucket: "implicit-association-tes-b2656.appspot.com",
    messagingSenderId: "660355196414",
    appId: "1:660355196414:web:4a2078ce4ba75a5f998caf"
};

let firebaseapp = firebase.initializeApp(config)

const app = createApp(App);
app.component("clicker", clicker)
app.component("jelly-button", jellybtn)
app.use(store).use(router).use(firebaseapp).mount("#app");
