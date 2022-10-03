import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home.vue";
import Consent_Form from "../pages/consent_form.vue";
import Explore_Studies from "../pages/explore_studies.vue";

import iatroutes from "./iat-routing"
import ibtroutes from "./ibt-routing"
import itroutes from "./it-routing"
import fmroutes from "./fm-routing"
const routes = [
  ...iatroutes,
  ...ibtroutes,
  ...itroutes,
  ...fmroutes,
  {
    path: "/",
    name: "Explore studies",
    component: Explore_Studies,
  },
  {
    path: "/consent-form",
    name: "Consent Form",
    component: Consent_Form,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;