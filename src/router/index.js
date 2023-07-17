import { createRouter, createWebHistory } from "vue-router";
import Welcome from '../views/Welcome.vue';
import Home from '../views/Home.vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
            title: "Feed || Bluesea",
            requiresAuth: true,
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener();
                resolve(user);
            },
            reject
        );
    });
};

router.beforeEach(async (to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (await getCurrentUser()) {
            next();
        } else {
            // alert("You do not have access ");
            next("/");
        }
    }
    else {
        next();
    }
});

export default router;