
const IT = () => import("../pages/IT/IT.vue");
const IT_Number_White = () => import("../pages/IT/IT_Number/IT_White.vue");
const IT_Number_Black = () => import("../pages/IT/IT_Number/IT_Black.vue");
const IT_Number_EastAsian = () => import("../pages/IT/IT_Number/IT_Asian.vue");
const IT_Feedback = () => import("../pages/IT/IT_feedback.vue");

// --------------

const IT_Name_White = () => import("../pages/IT/IT_Name/IT_Name_White.vue");
const IT_Name_Black = () => import("../pages/IT/IT_Name/IT_Name_Black.vue");
const IT_Name_EastAsian = () => import("../pages/IT/IT_Name/IT_Name_Asian.vue");

export default [
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
    }
]