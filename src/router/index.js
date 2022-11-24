import { createRouter, createWebHashHistory } from 'vue-router';

import indexRouters from './modules/index';

const routes = [...indexRouters];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    };
  },
});

export default router;