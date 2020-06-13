import Vue from 'vue';
import VueRouter from 'vue-router';
import Launches from '../views/Launches.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Launches',
    component: Launches,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
