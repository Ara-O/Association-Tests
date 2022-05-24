import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Consent_Form from "../views/consent_form.vue";
import Explore_Studies from "../views/explore_studies.vue";
import IAT_Choose_Test from "../views/IAT/IAT_Choose_Test.vue";
// import Contact_Experience from "../views/contact_experience.vue"
// ------------
// IAT GENDER

import IAT_Gender_Survey from "../views/IAT/IAT_Gender_Survey.vue";
import IAT_Gender from "../views/IAT/IAT_Gender/IAT_Gender.vue";
import IAT_Gender_Feedback from "../views/IAT/IAT_Gender/IAT_Gender_Feedback.vue";
// import IAT from "../views/IAT/IAT.vue";

// ---------------

import IAT_Gender_Touchscreen from "../views/IAT/IAT_Gender_Touchscreen/IAT_Gender_Touchscreen.vue"
import IAT_Gender_Touchscreen_Feedback from "../views/IAT/IAT_Gender_Touchscreen/IAT_Gender_Touchscreen_Feedback.vue"

// ---------------
// IAT Black_White
import IAT_Black_White from "../views/IAT/IAT_Black_White/IAT_Black_White.vue"
import IAT_Black_White_Survey from "../views/IAT/IAT_Black_White_Survey.vue"
import IAT_Black_White_Feedback from "../views/IAT/IAT_Black_White/IAT_Black_White_Feedback.vue";

// ---------------

import IAT_Black_White_Touchscreen from "../views/IAT/IAT_Black_White_Touchscreen/IAT_Black_White_Touchscreen.vue"
import IAT_Black_White_Touchscreen_Feedback from "../views/IAT/IAT_Black_White_Touchscreen/IAT_Black_White_Touchscreen_Feedback.vue";

// ---------------

import IT from "../views/IT/IT.vue";
import IT_White from "../views/IT/IT_White.vue";
import IT_Black from "../views/IT/IT_Black.vue";
import IT_EastAsian from "../views/IT/IT_Asian.vue";
import IT_Feedback from "../views/IT/IT_feedback.vue";

// -----------------

import IBT_Choose_Test from "../views/IBT/IBT_Choose_Test.vue"
import IBT_Black_White from "../views/IBT/IBT_Black_White/IBT_Black_White.vue"
import IBT_Black_White_Feedback from "../views/IBT/IBT_Black_White/IBT_Black_White_Feedback.vue"
// import IBT_Black_White_Practice from "../views/IBT/IBT_Black_White/IBT_Black_White_Practice.vue"

//-----------

import IBT_Gender_Toy from "../views/IBT/IBT_Gender_Toy/IBT_Gender_Toy.vue"

const routes = [
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
  {
    path: "/IAT_Choose_Test",
    name: "IAT_Choose_Test",
    component: IAT_Choose_Test,
  },
  {
    path: "/IAT_Gender",
    component: IAT_Gender,
  },
  {
    path: "/IAT_Gender_Survey",
    name: "IAT Gender Survey",
    component: IAT_Gender_Survey,
  },
  {
    path: "/IAT_Gender_Feedback",
    name: "IAT_Gender_Feedback",
    component: IAT_Gender_Feedback,
  },
  {
    path: "/IAT_Gender_Touchscreen",
    component: IAT_Gender_Touchscreen,
  },
  {
    path: "/IAT_Gender_Touchscreen_Feedback",
    component: IAT_Gender_Touchscreen_Feedback,
  },
  // &IAT black and white
  {
    path: "/IAT_Black_White",
    component: IAT_Black_White,
  },
  {
    path: "/IAT_Black_White_Survey",
    component: IAT_Black_White_Survey,
  },
  {
    path: "/IAT_Black_White_Feedback",
    component: IAT_Black_White_Feedback,
  },
  {
    path: "/IAT_Black_White_Touchscreen",
    component: IAT_Black_White_Touchscreen,
  },
  {
    path: "/IAT_Black_White_Touchscreen_Feedback",
    component: IAT_Black_White_Touchscreen_Feedback,
  },
  {
    path: "/IT",
    component: IT,

  }, {
    path: '/IT/White',
    component: IT_White,
  },
  {
    path: '/IT/Black',
    component: IT_Black,
  },
  {
    path: '/IT/EastAsian',
    component: IT_EastAsian,
  },
  {
    path: '/IT/Feedback',
    component: IT_Feedback,
  },
  {
    path: '/IBT_Choose_Test',
    component: IBT_Choose_Test,
  },
  {
    path: '/IBT_Black_White',
    component: IBT_Black_White,
  },
  {
    path: '/IBT_Black_White_Feedback',
    component: IBT_Black_White_Feedback,
  },
  {
    path: '/IBT_Black_White_Feedback',
    component: IBT_Black_White_Feedback,
  },
  {
    path: '/IBT_Gender_Toy',
    component: IBT_Gender_Toy,
  }



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
