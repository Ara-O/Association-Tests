
const IAT_Gender_Toy = () => import("../pages/IAT/IAT_Gender/IAT_Gender_Toy/IAT_Gender_Toy.vue")
const IAT_Gender_Toy_Touchscreen = () => import("../pages/IAT/IAT_Gender/IAT_Gender_Toy/IAT_Gender_Toy_Touchscreen.vue")
const IAT_Gender_Toy_Survey = () => import("../pages/IAT/IAT_Gender/IAT_Gender_Toy/IAT_Gender_Survey.vue")
// import IAT_Gender_Toy from "../pages/IAT/IAT_Gender/IAT_Gender_Toy/IAT_Gender_Toy.vue";
// import IAT_Gender_Toy_Touchscreen from "../pages/IAT/IAT_Gender/IAT_Gender_Toy/IAT_Gender_Toy_Touchscreen.vue";
// import IAT_Gender_Toy_Survey from "../pages/IAT/IAT_Gender/IAT_Gender_Toy/IAT_Gender_Survey.vue";

//---------
//IAT Gender-Roles

const IAT_Gender_Roles = () => import("../pages/IAT/IAT_Gender/IAT_Gender_Roles/IAT_Gender_Roles.vue")
const IAT_Gender_Roles_Touchscreen = () => import("../pages/IAT/IAT_Gender/IAT_Gender_Roles/IAT_Gender_Roles_Touchscreen.vue")
const IAT_Gender_Roles_Survey = () => import("../pages/IAT/IAT_Gender/IAT_Gender_Roles/IAT_Gender_Roles_Survey.vue")

// import IAT_Gender_Roles from "../pages/IAT/IAT_Gender/IAT_Gender_Roles/IAT_Gender_Roles.vue";
// import IAT_Gender_Roles_Touchscreen from "../pages/IAT/IAT_Gender/IAT_Gender_Roles/IAT_Gender_Roles_Touchscreen.vue";
// import IAT_Gender_Roles_Survey from "../pages/IAT/IAT_Gender/IAT_Gender_Roles/IAT_Gender_Roles_Survey.vue";

//---------
const IAT_Gender_Clothing = () => import("../pages/IAT/IAT_Gender/IAT_Gender_Clothing/IAT_Gender_Clothing.vue")
const IAT_Gender_Clothing_Touchscreen = () => import("../pages/IAT/IAT_Gender/IAT_Gender_Clothing/IAT_Gender_Clothing_Touchscreen.vue")
const IAT_Gender_Clothing_Survey = () => import("../pages/IAT/IAT_Gender/IAT_Gender_Clothing/IAT_Gender_Clothing_Survey.vue")

//IAT Gender-Clothing
// import IAT_Gender_Clothing from "../pages/IAT/IAT_Gender/IAT_Gender_Clothing/IAT_Gender_Clothing.vue";
// import IAT_Gender_Clothing_Touchscreen from "../pages/IAT/IAT_Gender/IAT_Gender_Clothing/IAT_Gender_Clothing_Touchscreen.vue";
// import IAT_Gender_Clothing_Survey from "../pages/IAT/IAT_Gender/IAT_Gender_Clothing/IAT_Gender_Clothing_Survey.vue";

//---------
const IAT_Gender_Color = () => import("../pages/IAT/IAT_Gender/IAT_Gender_Color/IAT_Gender_Color.vue")
const IAT_Gender_Color_Touchscreen = () => import("../pages/IAT/IAT_Gender/IAT_Gender_Color/IAT_Gender_Color_Touchscreen.vue")
const IAT_Gender_Color_Survey = () => import("../pages/IAT/IAT_Gender/IAT_Gender_Color/IAT_Gender_Color_Survey.vue")

//IAT Gender-Color
// import IAT_Gender_Color from "../pages/IAT/IAT_Gender/IAT_Gender_Color/IAT_Gender_Color.vue";
// import IAT_Gender_Color_Touchscreen from "../pages/IAT/IAT_Gender/IAT_Gender_Color/IAT_Gender_Color_Touchscreen.vue";
// import IAT_Gender_Color_Survey from "../pages/IAT/IAT_Gender/IAT_Gender_Color/IAT_Gender_Color_Survey.vue";

//---------
//IAT Gender-Subject
const IAT_Gender_Subject = () => import("../pages/IAT/IAT_Gender/IAT_Gender_Subject/IAT_Gender_Subject.vue")
const IAT_Gender_Subject_Touchscreen = () => import("../pages/IAT/IAT_Gender/IAT_Gender_Subject/IAT_Gender_Subject_Touchscreen.vue")
const IAT_Gender_Subject_Survey = () => import("../pages/IAT/IAT_Gender/IAT_Gender_Subject/IAT_Gender_Subject_Survey.vue")

// import IAT_Gender_Subject from "../pages/IAT/IAT_Gender/IAT_Gender_Subject/IAT_Gender_Subject.vue";
// import IAT_Gender_Subject_Touchscreen from "../pages/IAT/IAT_Gender/IAT_Gender_Subject/IAT_Gender_Subject_Touchscreen.vue";
// import IAT_Gender_Subject_Survey from "../pages/IAT/IAT_Gender/IAT_Gender_Subject/IAT_Gender_Subject_Survey.vue";


// ---------------
// IAT Black_White
const IAT_Black_White = () => import("../pages/IAT/IAT_Race/IAT_Black_White/IAT_Black_White.vue")
const IAT_Black_White_Touchscreen = () => import("../pages/IAT/IAT_Race/IAT_Black_White/IAT_Black_White_Touchscreen.vue")
const IAT_Black_White_Survey = () => import("../pages/IAT/IAT_Race/IAT_Black_White/IAT_Black_White_Survey.vue")

// import IAT_Black_White from "../pages/IAT/IAT_Race/IAT_Black_White/IAT_Black_White.vue"
// import IAT_Black_White_Touchscreen from "../pages/IAT/IAT_Race/IAT_Black_White/IAT_Black_White_Touchscreen.vue"
// import IAT_Black_White_Survey from "../pages/IAT/IAT_Race/IAT_Black_White/IAT_Black_White_Survey.vue"

// ---------------

//IAT FUN
const IAT_Cat_Dog = () => import("../pages/IAT/IAT_Cat_Dog/IAT_Cat_Dog.vue");
const IAT_Cat_Dog_Touchscreen = () => import("../pages/IAT/IAT_Cat_Dog/IAT_Cat_Dog_Touchscreen.vue");
const IAT_Cat_Dog_Survey = () => import("../pages/IAT/IAT_Cat_Dog/IAT_Cat_Dog_Survey.vue");

// import IAT_Cat_Dog from "../pages/IAT/IAT_Cat_Dog/IAT_Cat_Dog.vue"
// import IAT_Cat_Dog_Touchscreen from "../pages/IAT/IAT_Cat_Dog/IAT_Cat_Dog_Touchscreen.vue"
// import IAT_Cat_Dog_Survey from "../pages/IAT/IAT_Cat_Dog/IAT_Cat_Dog_Survey.vue"

const IAT_Feedback = ()=> import('../pages/IAT/IAT_Feedback.vue')
const IAT_Choose_Test = ()=> import('../pages/IAT/IAT_Choose_Test.vue')
export default [
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
    },]