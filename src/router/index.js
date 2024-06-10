import Vue from "vue";
import VueRouter from "vue-router";
import RouterPrefetch from "vue-router-prefetch";
import Meta from "vue-meta";
import routes from "./routes";
import starterRoutes from "./starterRouter";

Vue.use(VueRouter);
Vue.use(RouterPrefetch);
Vue.use(Meta);

const router = new VueRouter({
  mode: "history",
  routes: [
    ...routes,
    ...starterRoutes,
  ],
  linkExactActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});



export default router;
