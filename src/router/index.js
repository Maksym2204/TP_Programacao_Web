import Vue from 'vue';
import VueRouter from 'vue-router';
import RouterPrefetch from 'vue-router-prefetch';

import DashboardLayout from '@/layout/dashboard/DashboardLayout.vue';
import NotFound from '@/pages/NotFoundPage.vue';

// Admin pages
const Dashboard = () =>
  import(/* webpackChunkName: "dashboard" */ '@/pages/Dashboard.vue');
const Profile = () =>
  import(/* webpackChunkName: "common" */ '@/pages/Profile.vue');
const Notifications = () =>
  import(/* webpackChunkName: "common" */ '@/pages/Notifications.vue');
const Icons = () =>
  import(/* webpackChunkName: "common" */ '@/pages/Icons.vue');
const Maps = () => import(/* webpackChunkName: "common" */ '@/pages/Maps.vue');
const Typography = () =>
  import(/* webpackChunkName: "common" */ '@/pages/Typography.vue');
const TableList = () =>
  import(/* webpackChunkName: "common" */ '@/pages/TableList.vue');

// General views
const Login = () => import('@/pages/Login.vue');
const Register = () => import('@/pages/Register.vue');
const Home = () => import('@/pages/Home.vue');
const Museu = () => import('@/pages/Museu.vue');

const Lista1 = () => import('@/pages/Lista1.vue');

const Lista2 = () => import('@/pages/Lista2.vue');

const Lista3 = () => import('@/pages/Lista3.vue');


Vue.use(VueRouter);
Vue.use(RouterPrefetch);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'profile',
        name: 'profile',
        component: Profile,
      },
      {
        path: 'notifications',
        name: 'notifications',
        component: Notifications,
      },
      {
        path: 'icons',
        name: 'icons',
        component: Icons,
      },
      {
        path: 'maps',
        name: 'maps',
        component: Maps,
      },
      {
        path: 'typography',
        name: 'typography',
        component: Typography,
      },
      {
        path: 'table-list',
        name: 'table-list',
        component: TableList,
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/museu',
    name: 'museu',
    component: Museu,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/lista1',
    name: 'lista1',
    component: Lista1,
  },
  {
    path: '/lista2',
    name: 'lista2',
    component: Lista2,
  },
  {
    path: '/lista3',
    name: 'lista3',
    component: Lista3,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  { path: '*', component: NotFound },
];

const router = new VueRouter({
  mode: 'history', // Ensure history mode is enabled
  routes,
  linkExactActiveClass: 'active',
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
