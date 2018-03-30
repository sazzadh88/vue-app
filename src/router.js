import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import axios from 'axios'


Vue.use(VueRouter);

const routes = [{
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/register',
        component: Register,
        name: 'register',
        meta: { requiresAuth: true }
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
    const currentUser = null;
    const token = localStorage.getItem('token'); 
    if(token){
        axios.get('https://app.web/api/me?='+token)
        .then(response => {
            this.currentUser = response.data;
        })
    }  
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if(requiresAuth && !currentUser) {
       next('/login');
    } else {
      next();
    }

});




export default router;