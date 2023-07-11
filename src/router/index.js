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
        path: '/feed',
        name: 'Feed',
        component: Home,
        meta: {
            title: "Feed || Bluesea"
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;