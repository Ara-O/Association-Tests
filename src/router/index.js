import iatroutes from "./iat-routing";
// import ibtroutes from "./ibt-routing"
// import itroutes from "./it-routing"
// import fmroutes from "./fm-routing"

import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home.vue";
import Consent_Form from "../pages/consent_form.vue";
import Explore_Studies from "../pages/explore_studies.vue";
import NotFound from "../pages/404-page.vue";
// ------------

import IT from "../pages/IT/IT.vue";
import IT_Number_White from "../pages/IT/IT_Number/IT_White.vue";
import IT_Number_Black from "../pages/IT/IT_Number/IT_Black.vue";
import IT_Number_EastAsian from "../pages/IT/IT_Number/IT_Asian.vue";
import IT_Feedback from "../pages/IT/IT_feedback.vue";

// --------------

import IT_Name_White from "../pages/IT/IT_Name/IT_Name_White.vue";
import IT_Name_Black from "../pages/IT/IT_Name/IT_Name_Black.vue";
import IT_Name_EastAsian from "../pages/IT/IT_Name/IT_Name_Asian.vue";

// -----------------

import IBT_Choose_Test from "../pages/IBT/IBT_Choose_Test.vue";
import IBT_Black_White from "../pages/IBT/IBT_Race/IBT_Black_White/IBT_Black_White.vue";
import IBT_Black_White_Survey from "../pages/IBT/IBT_Race/IBT_Black_White/IBT_Black_White_Survey.vue";
import IBT_Cat_Dog from "../pages/IBT/IBT_Cat_Dog/IBT_Cat_Dog.vue";
import IBT_Cat_Dog_Survey from "../pages/IBT/IBT_Cat_Dog/IBT_Cat_Dog_Survey.vue";

//-----------

import IBT_Gender_Toy from "../pages/IBT/IBT_Gender/IBT_Gender_Toy/IBT_Gender_Toy.vue";
import IBT_Gender_Toy_Survey from "../pages/IBT/IBT_Gender/IBT_Gender_Toy/IBT_Gender_Toy_Survey.vue";
import IBT_Gender_Clothing from "../pages/IBT/IBT_Gender/IBT_Gender_Clothing/IBT_Gender_Clothing.vue";
import IBT_Gender_Clothing_Survey from "../pages/IBT/IBT_Gender/IBT_Gender_Clothing/IBT_Gender_Clothing_Survey.vue";
import IBT_Gender_Subject from "../pages/IBT/IBT_Gender/IBT_Gender_Subject/IBT_Gender_Subject.vue";
import IBT_Gender_Subject_Survey from "../pages/IBT/IBT_Gender/IBT_Gender_Subject/IBT_Gender_Subject_Survey.vue";
import IBT_Gender_Roles from "../pages/IBT/IBT_Gender/IBT_Gender_Roles/IBT_Gender_Roles.vue";
import IBT_Gender_Roles_Survey from "../pages/IBT/IBT_Gender/IBT_Gender_Roles/IBT_Gender_Roles_Survey.vue";
import IBT_Gender_Color from "../pages/IBT/IBT_Gender/IBT_Gender_Color/IBT_Gender_Color.vue";
import IBT_Gender_Color_Survey from "../pages/IBT/IBT_Gender/IBT_Gender_Color/IBT_Gender_Color_Survey.vue";
import IBT_Feedback from "../pages/IBT/IBT_Feedback.vue";

// Face matching
import Face_Matching_Choose_Test from "../pages/FM/FM_Choose_Test.vue";
import FM_Categorization_Black_White from "../pages/FM/Categorization_Test/FM_Black_White.vue";
import FM_Categorization_Black_White_Feedback from "../pages/FM/Categorization_Test/FM_Black_White_Feedback.vue";

//Identification
import FM_Identification_Black_White from "../pages/FM/Identification_Test/FM_Black_White.vue";
import FM_Identification_Black_White_Feedback from "../pages/FM/Identification_Test/FM_Black_White_Feedback.vue";

const routes = [
  ...iatroutes,
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
    path: "/IT",
    component: IT,
  },
  {
    path: "/IT_Number_White",
    component: IT_Number_White,
  },
  {
    path: "/IT_Name_White",
    component: IT_Name_White,
  },
  {
    path: "/IT_Name_Black",
    component: IT_Name_Black,
  },
  {
    path: "/IT_Name_EastAsian",
    component: IT_Name_EastAsian,
  },
  {
    path: "/IT_Number_Black",
    component: IT_Number_Black,
  },
  {
    path: "/IT_Number_EastAsian",
    component: IT_Number_EastAsian,
  },
  {
    path: "/IT_Feedback",
    component: IT_Feedback,
  },
  {
    path: "/IBT_Choose_Test",
    component: IBT_Choose_Test,
  },
  {
    path: "/IBT_Black_White",
    component: IBT_Black_White,
  },
  {
    path: "/IBT_Gender_Toy",
    component: IBT_Gender_Toy,
  },
  {
    path: "/IBT_Cat_Dog",
    component: IBT_Cat_Dog,
  },
  {
    path: "/IBT_Gender_Clothing",
    component: IBT_Gender_Clothing,
  },
  {
    path: "/IBT_Gender_Toy_Survey",
    component: IBT_Gender_Toy_Survey,
  },
  {
    path: "/IBT_Gender_Color_Survey",
    component: IBT_Gender_Color_Survey,
  },
  {
    path: "/IBT_Gender_Roles_Survey",
    component: IBT_Gender_Roles_Survey,
  },
  {
    path: "/IBT_Gender_Subject_Survey",
    component: IBT_Gender_Subject_Survey,
  },
  {
    path: "/IBT_Gender_Clothing_Survey",
    component: IBT_Gender_Clothing_Survey,
  },
  {
    path: "/IBT_Cat_Dog_Survey",
    component: IBT_Cat_Dog_Survey,
  },
  {
    path: "/IBT_Black_White_Survey",
    component: IBT_Black_White_Survey,
  },
  {
    path: "/IBT_Gender_Clothing_Survey",
    component: IBT_Gender_Clothing_Survey,
  },
  {
    path: "/IBT_Gender_Subject",
    component: IBT_Gender_Subject,
  },
  {
    path: "/IBT_Gender_Roles",
    component: IBT_Gender_Roles,
  },
  {
    path: "/IBT_Gender_Color",
    component: IBT_Gender_Color,
  },
  {
    path: "/IBT_Feedback",
    component: IBT_Feedback,
  },
  {
    path: "/FM_Choose_Test",
    component: Face_Matching_Choose_Test,
  },
  {
    path: "/FM_Categorization_Black_White",
    component: FM_Categorization_Black_White,
  },
  {
    path: "/FM_Categorization_Black_White_Feedback",
    component: FM_Categorization_Black_White_Feedback,
  },
  {
    path: "/FM_Identification_Black_White",
    component: FM_Identification_Black_White,
  },
  {
    path: "/FM_Identification_Black_White_Feedback",
    component: FM_Identification_Black_White_Feedback,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
