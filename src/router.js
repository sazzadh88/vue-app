import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'



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
        name: 'register'
    },
    {
        path: '/me',
        component: Dashboard,
         secure: true,
        name: 'me'
    }

];

const router = new VueRouter({
    routes,
    mode:'history'
});



export default router;