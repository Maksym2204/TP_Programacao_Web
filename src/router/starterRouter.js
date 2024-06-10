import Vue from "vue";
import Router from "vue-router";
import DashboardLayout from "@/layout/starter/SampleLayout.vue";
import Starter from "@/layout/starter/SamplePage.vue";

Vue.use(Router);

const starterRoutes = [
  {
    path: "/starter",
    name: "starter",
    redirect: "/starter/dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "dashboard",
        name: "starter-dashboard",
        component: Starter,
      },
    ],
  },
];

export default starterRoutes;
