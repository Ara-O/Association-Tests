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


//---------
//IAT Gender-Clothing
import IAT_Gender_Clothing from "../views/IAT/IAT_Gender/IAT_Gender_Clothing/IAT_Gender_Clothing.vue";
import IAT_Gender_Clothing_Touchscreen from "../views/IAT/IAT_Gender/IAT_Gender_Clothing/IAT_Gender_Clothing_Touchscreen.vue";
import IAT_Gender_Clothing_Survey from "../views/IAT/IAT_Gender/IAT_Gender_Clothing/IAT_Gender_Clothing_Survey.vue";

//---------
//IAT Gender-Color
import IAT_Gender_Color from "../views/IAT/IAT_Gender/IAT_Gender_Color/IAT_Gender_Color.vue";
import IAT_Gender_Color_Touchscreen from "../views/IAT/IAT_Gender/IAT_Gender_Color/IAT_Gender_Color_Touchscreen.vue";
import IAT_Gender_Color_Survey from "../views/IAT/IAT_Gender/IAT_Gender_Color/IAT_Gender_Color_Survey.vue";

//---------
//IAT Gender-Subject
import IAT_Gender_Subject from "../views/IAT/IAT_Gender/IAT_Gender_Subject/IAT_Gender_Subject.vue";
import IAT_Gender_Subject_Touchscreen from "../views/IAT/IAT_Gender/IAT_Gender_Subject/IAT_Gender_Subject_Touchscreen.vue";
import IAT_Gender_Subject_Survey from "../views/IAT/IAT_Gender/IAT_Gender_Subject/IAT_Gender_Subject_Survey.vue";


// ---------------
// IAT Black_White
import IAT_Black_White from "../views/IAT/IAT_Race/IAT_Black_White/IAT_Black_White.vue"
import IAT_Black_White_Touchscreen from "../views/IAT/IAT_Race/IAT_Black_White/IAT_Black_White_Touchscreen.vue"
import IAT_Black_White_Survey from "../views/IAT/IAT_Race/IAT_Black_White/IAT_Black_White_Survey.vue"

// ---------------

//IAT FUN

import IAT_Cat_Dog from "../views/IAT/IAT_Cat_Dog/IAT_Cat_Dog.vue"
import IAT_Cat_Dog_Touchscreen from "../views/IAT/IAT_Cat_Dog/IAT_Cat_Dog_Touchscreen.vue"
import IAT_Cat_Dog_Survey from "../views/IAT/IAT_Cat_Dog/IAT_Cat_Dog_Survey.vue"

//-------------

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
import IBT_Black_White_Survey from "../views/IBT/IBT_Race/IBT_Black_White/IBT_Black_White_Survey.vue"
import IBT_Cat_Dog from "../views/IBT/IBT_Cat_Dog/IBT_Cat_Dog.vue"
import IBT_Cat_Dog_Survey from "../views/IBT/IBT_Cat_Dog/IBT_Cat_Dog_Survey.vue"

//-----------

import IBT_Gender_Toy from "../views/IBT/IBT_Gender/IBT_Gender_Toy/IBT_Gender_Toy.vue"
import IBT_Gender_Toy_Survey from "../views/IBT/IBT_Gender/IBT_Gender_Toy/IBT_Gender_Toy_Survey.vue"
import IBT_Gender_Clothing from "../views/IBT/IBT_Gender/IBT_Gender_Clothing/IBT_Gender_Clothing.vue"
import IBT_Gender_Clothing_Survey from "../views/IBT/IBT_Gender/IBT_Gender_Clothing/IBT_Gender_Clothing_Survey.vue"
import IBT_Gender_Subject from "../views/IBT/IBT_Gender/IBT_Gender_Subject/IBT_Gender_Subject.vue"
import IBT_Gender_Subject_Survey from "../views/IBT/IBT_Gender/IBT_Gender_Subject/IBT_Gender_Subject_Survey.vue"
import IBT_Gender_Roles from "../views/IBT/IBT_Gender/IBT_Gender_Roles/IBT_Gender_Roles.vue"
import IBT_Gender_Roles_Survey from "../views/IBT/IBT_Gender/IBT_Gender_Roles/IBT_Gender_Roles_Survey.vue"
import IBT_Gender_Color from "../views/IBT/IBT_Gender/IBT_Gender_Color/IBT_Gender_Color.vue"
import IBT_Gender_Color_Survey from "../views/IBT/IBT_Gender/IBT_Gender_Color/IBT_Gender_Color_Survey.vue"
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
    path: "/IAT_Gender_Subject",
    component: IAT_Gender_Subject,
  },
  {
    path: "/IAT_Gender_Subject_Touchscreen",
    component: IAT_Gender_Subject_Touchscreen,
  },
  {
    path: "/IAT_Gender_Subject_Survey",
    component: IAT_Gender_Subject_Survey,
  },
  {
    path: "/IAT_Gender_Clothing",
    component: IAT_Gender_Clothing,
  },
  {
    path: "/IAT_Gender_Clothing_Touchscreen",
    component: IAT_Gender_Clothing_Touchscreen,
  },
  {
    path: "/IAT_Gender_Clothing_Survey",
    component: IAT_Gender_Clothing_Survey,
  },
  {
    path: "/IAT_Gender_Color",
    component: IAT_Gender_Color,
  },
  {
    path: "/IAT_Gender_Color_Touchscreen",
    component: IAT_Gender_Color_Touchscreen,
  },
  {
    path: "/IAT_Gender_Color_Survey",
    component: IAT_Gender_Color_Survey,
  },
  {
    path: "/IAT_Gender_Toy_Survey",
    component: IAT_Gender_Toy_Survey,
  },
  {
    path: "/IAT_Cat_Dog",
    component: IAT_Cat_Dog
  },
  {
    path: "/IAT_Cat_Dog_Touchscreen",
    component: IAT_Cat_Dog_Touchscreen
  },
  {
    path: "/IAT_Cat_Dog_Survey",
    component: IAT_Cat_Dog_Survey
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
    path: '/IBT_Cat_Dog',
    component: IBT_Cat_Dog,
  },
  {
    path: '/IBT_Gender_Clothing',
    component: IBT_Gender_Clothing,
  },
  {
    path: '/IBT_Gender_Toy_Survey',
    component: IBT_Gender_Toy_Survey,
  },
  {
    path: '/IBT_Gender_Color_Survey',
    component: IBT_Gender_Color_Survey,
  },
  {
    path: '/IBT_Gender_Roles_Survey',
    component: IBT_Gender_Roles_Survey,
  },
  {
    path: '/IBT_Gender_Subject_Survey',
    component: IBT_Gender_Subject_Survey,
  },
  {
    path: '/IBT_Gender_Clothing_Survey',
    component: IBT_Gender_Clothing_Survey,
  },
  {
    path: '/IBT_Cat_Dog_Survey',
    component: IBT_Cat_Dog_Survey,
  },
  {
    path: '/IBT_Black_White_Survey',
    component: IBT_Black_White_Survey,
  },
  {
    path: '/IBT_Gender_Clothing_Survey',
    component: IBT_Gender_Clothing_Survey,
  },
  {
    path: '/IBT_Gender_Subject',
    component: IBT_Gender_Subject,
  },
  {
    path: '/IBT_Gender_Roles',
    component: IBT_Gender_Roles,
  },
  {
    path: '/IBT_Gender_Color',
    component: IBT_Gender_Color,
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
