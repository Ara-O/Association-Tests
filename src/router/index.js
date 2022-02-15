import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import IAT_Survey from "../views/IAT/IAT_Survey.vue";
import IAT_Test1 from "../views/IAT/IAT_Test1.vue";
import IAT_Test2 from "../views/IAT/IAT_Test2.vue";
import IAT_Test3 from "../views/IAT/IAT_Test3.vue";
import IAT_Test4 from "../views/IAT/IAT_Test4.vue";
import IAT_Test5 from "../views/IAT/IAT_Test5.vue";
import IAT_Test6 from "../views/IAT/IAT_Test6.vue";
import IAT_Test7 from "../views/IAT/IAT_Test7.vue";
import IAT_Feedback from "../views/IAT/IAT_Feedback.vue";
import IAT from "../views/IAT/IAT.vue";

// ---------------

import IAT_TS_Instruction from "../views/IAT_Touchscreen/IAT_TS_Instruction.vue";
import IAT_TS_Test1 from "../views/IAT_Touchscreen/IAT_TS_Test1.vue"
import IAT_TS_Test2 from "../views/IAT_Touchscreen/IAT_TS_Test2.vue"
import IAT_TS_Test3 from "../views/IAT_Touchscreen/IAT_TS_Test3.vue"
import IAT_TS_Test4 from "../views/IAT_Touchscreen/IAT_TS_Test4.vue"
import IAT_TS_Test5 from "../views/IAT_Touchscreen/IAT_TS_Test5.vue"
import IAT_TS_Test6 from "../views/IAT_Touchscreen/IAT_TS_Test6.vue"
import IAT_TS_Test7 from "../views/IAT_Touchscreen/IAT_TS_Test7.vue"
import IAT_TS_Feedback from "../views/IAT_Touchscreen/IAT_TS_Feedback.vue"

// ---------------

import IT from "../views/IT/IT.vue";
import IT_White from "../views/IT/IT_White.vue";
import IT_Black from "../views/IT/IT_Black.vue";
import IT_EastAsian from "../views/IT/IT_Asian.vue";
import IT_Feedback from "../views/IT/IT_feedback.vue";

// -----------------

import IRBT from "../views/IRBT/irbt.vue"
import IRBT_Practice_Instruction from "../views/IRBT/irbt_practice_instruction.vue"
import IRBT_Practice from "../views/IRBT/irbt_practice.vue"
import IRBT_Start from "../views/IRBT/irbt_start.vue"
import IRBT_Start2 from "../views/IRBT/irbt_start2.vue"
import IRBT_Feedback from "../views/IRBT/irbt_feedback.vue"
import IRBT_Section1 from "../views/IRBT/irbt_section1.vue"
import IRBT_Section2 from "../views/IRBT/irbt_section2.vue"
import Reinforcement from "../views/IRBT/irbt_reinforcement.vue"
import IRBT_end from "../views/IRBT/irbt_end.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/IAT",
    name: "IATsurvey",
    component: IAT_Survey,
  },
  {
    path: "/IAT/Feedback",
    name: "IAT_Feedback",
    component: IAT_Feedback,
  },
  {
    path: "/IAT_test",
    name: "IAT",
    component: IAT,
    children: [
      {
        path: '',
        component: IAT_Test1,
      },
      {
        path: '/IAT_test/block_2',
        component: IAT_Test2,
      },
      {
        path: '/IAT_test/block_3',
        component: IAT_Test3,
      },
      {
        path: '/IAT_test/block_4',
        component: IAT_Test4,
      },
      {
        path: '/IAT_test/block_5',
        component: IAT_Test5,
      },
      {
        path: '/IAT_test/block_6',
        component: IAT_Test6,
      },
      {
        path: '/IAT_test/block_7',
        component: IAT_Test7,
      }
    ],
  },
  {
    path: "/IAT_TS_Instruction",
    component: IAT_TS_Instruction,
  },
  {
    path: "/IAT_TS_Test1",
    component: IAT_TS_Test1,
  },
  {
    path: "/IAT_TS_Test2",
    component: IAT_TS_Test2,
  },
  {
    path: "/IAT_TS_Test3",
    component: IAT_TS_Test3,
  },
  {
    path: "/IAT_TS_Test4",
    component: IAT_TS_Test4,
  },
  {
    path: "/IAT_TS_Test5",
    component: IAT_TS_Test5,
  },
  {
    path: "/IAT_TS_Test6",
    component: IAT_TS_Test6,
  },
  {
    path: "/IAT_TS_Test7",
    component: IAT_TS_Test7,
  },
  {
    path: "/IAT_TS_Feedback",
    component: IAT_TS_Feedback,
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
    path: '/IRBT/Practice_Instruction',
    component: IRBT_Practice_Instruction,
  },
  {
    path: '/IRBT/Practice',
    component: IRBT_Practice,
  },
  {
    path: '/IRBT/Start',
    component: IRBT_Start,
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
