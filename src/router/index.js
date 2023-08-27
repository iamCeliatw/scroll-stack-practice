import { createRouter, createWebHistory } from "vue-router";
import ScrollStack from "../components/scrollStack.vue";
import scrollStackMobile from "../components/scrollStackMobile.vue";
const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/scrollstack",
      component: ScrollStack,
    },
    {
      path: "/scrollstackmobile",
      component: scrollStackMobile,
    },
  ],
});

export default router;
