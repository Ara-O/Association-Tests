import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import clicker from "../src/components/Buttons/TouchscreenButtons.vue";
import "./styles/styles.css";

const app = createApp(App);
app.component("clicker", clicker);
app.use(store).use(router).mount("#app");
