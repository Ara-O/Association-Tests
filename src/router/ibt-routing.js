const IBT_Choose_Test = () => import("../pages/IBT/IBT_Choose_Test.vue");
const IBT_Black_White = () =>
  import("../pages/IBT/IBT_Race/IBT_Black_White/IBT_Black_White.vue");
const IBT_Brief_Black_White = () =>
  import(
    "../pages/IBT/IBT_Race/IBT_Brief_Black_White/IBT_Brief_Black_White.vue"
  );
const IBT_Black_White_Survey = () =>
  import("../pages/IBT/IBT_Race/IBT_Black_White/IBT_Black_White_Survey.vue");
const IBT_Cat_Dog = () => import("../pages/IBT/IBT_Cat_Dog/IBT_Cat_Dog.vue");
const IBT_Cat_Dog_Survey = () =>
  import("../pages/IBT/IBT_Cat_Dog/IBT_Cat_Dog_Survey.vue");

//-----------

const IBT_Gender_Toy = () =>
  import("../pages/IBT/IBT_Gender/IBT_Gender_Toy/IBT_Gender_Toy.vue");
const IBT_Gender_Toy_Survey = () =>
  import("../pages/IBT/IBT_Gender/IBT_Gender_Toy/IBT_Gender_Toy_Survey.vue");
const IBT_Gender_Clothing = () =>
  import("../pages/IBT/IBT_Gender/IBT_Gender_Clothing/IBT_Gender_Clothing.vue");
const IBT_Gender_Clothing_Survey = () =>
  import(
    "../pages/IBT/IBT_Gender/IBT_Gender_Clothing/IBT_Gender_Clothing_Survey.vue"
  );
const IBT_Gender_Subject = () =>
  import("../pages/IBT/IBT_Gender/IBT_Gender_Subject/IBT_Gender_Subject.vue");
const IBT_Gender_Subject_Survey = () =>
  import(
    "../pages/IBT/IBT_Gender/IBT_Gender_Subject/IBT_Gender_Subject_Survey.vue"
  );
const IBT_Gender_Roles = () =>
  import("../pages/IBT/IBT_Gender/IBT_Gender_Roles/IBT_Gender_Roles.vue");
const IBT_Gender_Roles_Survey = () =>
  import(
    "../pages/IBT/IBT_Gender/IBT_Gender_Roles/IBT_Gender_Roles_Survey.vue"
  );
const IBT_Gender_Color = () =>
  import("../pages/IBT/IBT_Gender/IBT_Gender_Color/IBT_Gender_Color.vue");
const IBT_Gender_Color_Survey = () =>
  import(
    "../pages/IBT/IBT_Gender/IBT_Gender_Color/IBT_Gender_Color_Survey.vue"
  );
const IBT_Feedback = () => import("../pages/IBT/IBT_Feedback.vue");

export default [
  {
    path: "/IBT_Choose_Test",
    component: IBT_Choose_Test,
  },
  {
    path: "/IBT_Black_White",
    component: IBT_Black_White,
  },
  {
    path: "/IBT_Brief_Black_White",
    component: IBT_Brief_Black_White,
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
];
