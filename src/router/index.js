import Vue from 'vue';
import VueRouter from 'vue-router';
import Launches from '../views/Launches.vue';
import SingleLaunchView from '../views/SingleLaunchView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Launches',
    component: Launches,
  },
  {
    path: '/launch/:id',
    component: SingleLaunchView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
