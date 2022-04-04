import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Consent_Form from "../views/consent_form.vue";
import Explore_Studies from "../views/explore_studies.vue";
import IAT_Choose_Test from "../views/IAT/IAT_Choose_Test.vue";

// ------------
// IAT GENDER

import IAT_Gender_Survey from "../views/IAT/IAT_Gender_Survey.vue";
import IAT_Gender from "../views/IAT/IAT_Gender/IAT_Gender.vue";
import IAT_Gender_Feedback from "../views/IAT/IAT_Gender/IAT_Gender_Feedback.vue";
import IAT from "../views/IAT/IAT.vue";

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

import IRBT from "../views/IRBT/irbt.vue"
import IRBT_Practice from "../views/IRBT/irbt_practice.vue"
import IRBT_Start2 from "../views/IRBT/irbt_start2.vue"
import IRBT_Feedback from "../views/IRBT/irbt_feedback.vue"
import IRBT_Section1 from "../views/IRBT/irbt_section1.vue"
import IRBT_Section2 from "../views/IRBT/irbt_section2.vue"
import Reinforcement from "../views/IRBT/irbt_reinforcement.vue"
import IRBT_end from "../views/IRBT/irbt_end.vue"

//-----------


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
    path: "/IAT_Gender/Choose_Test",
    name: "IAT_Choose_Test",
    component: IAT_Choose_Test,
  },
  {
    path: "/IAT_Gender",
    name: "IAT",
    component: IAT,
    children: [
      {
        path: '',
        component: IAT_Gender,
      },
      {
        path: "/IAT_Gender_Survey",
        name: "IAT Gender Survey",
        component: IAT_Gender_Survey,
      },
      {
        path: "/IAT/Gender_Feedback",
        name: "IAT_Gender_Feedback",
        component: IAT_Gender_Feedback,
      }
    ],
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
    path: '/IRBT',
    component: IRBT,
  },
  {
    path: '/IRBT/Practice',
    component: IRBT_Practice,
  },
  {
    path: '/IRBT/Start2',
    component: IRBT_Start2,
  },
  {
    path: '/IRBT/Feedback',
    component: IRBT_Feedback,
  },
  {
    path: '/IRBT/section_1',
    component: IRBT_Section1,
  },
  {
    path: '/IRBT/section_2',
    component: IRBT_Section2,
  },
  {
    path: '/IRBT/reinforcement',
    component: Reinforcement,
  },
  {
    path: '/IRBT/end',
    component: IRBT_end,
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
