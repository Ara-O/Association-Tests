// Face matching
const Face_Matching_Choose_Test = () => import("../pages/FM/FM_Choose_Test.vue")
const FM_Categorization_Black_White = () => import("../pages/FM/Categorization_Test/FM_Black_White.vue")
const FM_Categorization_Black_White_Feedback = () => import("../pages/FM/Categorization_Test/FM_Black_White_Feedback.vue")

//Identification
const FM_Identification_Black_White = () => import("../pages/FM/Identification_Test/FM_Black_White.vue")
const FM_Identification_Black_White_Feedback = () => import("../pages/FM/Identification_Test/FM_Black_White_Feedback.vue")

export default [
    {
      path: '/FM_Choose_Test',
      component: Face_Matching_Choose_Test,
    },
    {
      path: '/FM_Categorization_Black_White',
      component: FM_Categorization_Black_White,
    },
    {
      path: '/FM_Categorization_Black_White_Feedback',
      component: FM_Categorization_Black_White_Feedback,
    },
    {
      path: '/FM_Identification_Black_White',
      component: FM_Identification_Black_White,
    },
    {
      path: '/FM_Identification_Black_White_Feedback',
      component: FM_Identification_Black_White_Feedback,
    }
]