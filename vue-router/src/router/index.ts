import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Page1View from "../views/Page1View.vue";
import Page2View from "../views/Page2View.vue";
import Page3View from "../views/Page3View.vue";
import UserView from "../views/UserView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/1",
      name: "1",
      component: Page1View,
    },
    {
      path: "/2",
      name: "2",
      component: Page2View,
    },
    {
      path: "/3",
      name: "3",
      component: Page3View,
    },
    {
      path: "/user/:id",
      name: "userId",
      component: UserView,
    },
  ],
});

export default router;
