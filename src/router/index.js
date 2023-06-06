import { createRouter, createWebHistory } from "vue-router";
import Welcome from '../views/Welcomecomponent.vue';

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome,
        meta: {
            title: "Welcome to Bluesea"
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router