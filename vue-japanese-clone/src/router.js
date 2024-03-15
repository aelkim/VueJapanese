import { createWebHistory, createRouter } from "vue-router";
import DoorEverywhere from "./pages/DoorEverywhere.vue";
import MainPage from "./pages/MainPage.vue";
const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/dooreverywhere",
    component: DoorEverywhere,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
