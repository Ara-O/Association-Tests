import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Consent_Form from "../views/consent_form.vue";
import Explore_Studies from "../views/explore_studies.vue";
import IAT_Choose_Test from "../views/IAT/IAT_Choose_Test.vue";
import IAT_Feedback from "../views/IAT/IAT_Feedback.vue";
// import Contact_Experience from "../views/contact_experience.vue"
// ------------
// IAT GENDER

import IAT_Gender_Toy from "../views/IAT/IAT_Gender/IAT_Gender_Toy/IAT_Gender_Toy.vue";
import IAT_Gender_Toy_Touchscreen from "../views/IAT/IAT_Gender/IAT_Gender_Toy/IAT_Gender_Toy_Touchscreen.vue";
import IAT_Gender_Toy_Survey from "../views/IAT/IAT_Gender/IAT_Gender_Toy/IAT_Gender_Survey.vue";


//---------
//IAT Gender-Roles
import IAT_Gender_Roles from "../views/IAT/IAT_Gender/IAT_Gender_Roles/IAT_Gender_Roles.vue";
import IAT_Gender_Roles_Touchscreen from "../views/IAT/IAT_Gender/IAT_Gender_Roles/IAT_Gender_Roles_Touchscreen.vue";
import IAT_Gender_Roles_Survey from "../views/IAT/IAT_Gender/IAT_Gender_Roles/IAT_Gender_Roles_Survey.vue";



// ---------------
// IAT Black_White
import IAT_Black_White from "../views/IAT/IAT_Race/IAT_Black_White/IAT_Black_White.vue"
import IAT_Black_White_Touchscreen from "../views/IAT/IAT_Race/IAT_Black_White/IAT_Black_White_Touchscreen.vue"
import IAT_Black_White_Survey from "../views/IAT/IAT_Race/IAT_Black_White/IAT_Black_White_Survey.vue"

// ---------------

import IT from "../views/IT/IT.vue";
import IT_Number_White from "../views/IT/IT_Number/IT_White.vue";
import IT_Number_Black from "../views/IT/IT_Number/IT_Black.vue";
import IT_Number_EastAsian from "../views/IT/IT_Number/IT_Asian.vue";
import IT_Feedback from "../views/IT/IT_feedback.vue";

// --------------

import IT_Name_White from "../views/IT/IT_Name/IT_Name_White.vue";
import IT_Name_Black from "../views/IT/IT_Name/IT_Name_Black.vue";
import IT_Name_EastAsian from "../views/IT/IT_Name/IT_Name_Asian.vue";

// -----------------

import IBT_Choose_Test from "../views/IBT/IBT_Choose_Test.vue"
import IBT_Black_White from "../views/IBT/IBT_Race/IBT_Black_White/IBT_Black_White.vue"

//-----------

import IBT_Gender_Toy from "../views/IBT/IBT_Gender/IBT_Gender_Toy/IBT_Gender_Toy.vue"
import IBT_Feedback from "../views/IBT/IBT_Feedback.vue"

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
    path: "/IAT_Gender_Toy",
    component: IAT_Gender_Toy,
  },
  {
    path: "/IAT_Gender_Roles",
    component: IAT_Gender_Roles,
  },
  {
    path: "/IAT_Gender_Roles_Touchscreen",
    component: IAT_Gender_Roles_Touchscreen,
  },
  {
    path: "/IAT_Gender_Roles_Survey",
    component: IAT_Gender_Roles_Survey,
  },
  {
    path: "/IAT_Gender_Toy_Survey",
    component: IAT_Gender_Toy_Survey,
  },
  {
    path: "/IAT_Feedback",
    component: IAT_Feedback,
  },
  {
    path: "/IAT_Gender_Toy_Touchscreen",
    component: IAT_Gender_Toy_Touchscreen,
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
    path: "/IAT_Black_White_Touchscreen",
    component: IAT_Black_White_Touchscreen,
  },
  {
    path: "/IT",
    component: IT,

  }, 
  {
    path: '/IT_Number_White',
    component: IT_Number_White,
  },
  {
    path: '/IT_Name_White',
    component: IT_Name_White,
  },
  {
    path: '/IT_Name_Black',
    component: IT_Name_Black,
  },
  {
    path: '/IT_Name_EastAsian',
    component: IT_Name_EastAsian,
  },
  {
    path: '/IT_Number_Black',
    component: IT_Number_Black,
  },
  {
    path: '/IT_Number_EastAsian',
    component: IT_Number_EastAsian,
  },
  {
    path: '/IT_Feedback',
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
    path: '/IBT_Gender_Toy',
    component: IBT_Gender_Toy,
  },
  {
    path: '/IBT_Feedback',
    component: IBT_Feedback,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
