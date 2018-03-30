import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Logout from './components/Logout.vue'
// import axios from 'axios'


Vue.use(VueRouter);

const routes = [{
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
    },
    {
        path: '/register',
        component: Register,
        name: 'register',
    },
    {
        path: '/logout',
        component: Logout,
        name: 'logout'
    },
         
    {
        path: '/me',
        component: Dashboard,
        name: 'me',
        meta: { requiresAuth: true }
    }

];

const router = new VueRouter({
    routes,
    mode:'history'
});


router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const authUser = JSON.parse(localStorage.getItem('authUser'))
    if (authUser && authUser.access_token) {
      next();
    } else {
      next({name: 'login'});
    }
  }
  next()
});





export default router;