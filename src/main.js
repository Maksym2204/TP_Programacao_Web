import Vue from "vue";
import VueRouter from "vue-router";
import RouterPrefetch from "vue-router-prefetch";
import Meta from "vue-meta";
import App from "./App.vue";
import router from "./router";

import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n";
import "./registerServiceWorker";
import "@/style.css";

Vue.use(BlackDashboard);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);
Vue.use(Meta);

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
