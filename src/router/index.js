import { createRouter, createWebHistory } from "vue-router";
import Welcome from '../views/Welcome.vue';
import Home from '../views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome,
        meta: {
            title: "Welcome to Bluesea"
        }
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            title: "Home || Bluesea"
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router