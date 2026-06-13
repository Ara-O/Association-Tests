import { createRouter, createWebHistory } from "vue-router";
import IBT_Brief_Black_White_UCSC from "../pages/IBT/IBT_Race/IBT_Brief_Black_White_UCSC/IBT_Brief_Black_White_UCSC.vue";
import IBT_Brief_Black_White_UCSC_Feedback from "../pages/IBT/IBT_Race/IBT_Brief_Black_White_UCSC/IBT_Brief_Black_White_UCSC_Feedback.vue";
import NotFound from "../pages/404-page.vue";

const routes = [
  {
    path: "/",
    component: IBT_Brief_Black_White_UCSC,
  },
  {
    path: "/IBT_Brief_Black_White_UCSC_Feedback",
    component: IBT_Brief_Black_White_UCSC_Feedback,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "UCSC Implicit Bias Test";
  next();
});

export default router;
