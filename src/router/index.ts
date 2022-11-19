import {createRouter, createWebHistory} from 'vue-router';
import Index from '../views/Index.view.vue';
import Auth from '../views/auth/auth.router.js';
import {useUserStore} from '@/stores/User.store';
import type {IUser} from "@/models/User.mode";
import {storeToRefs} from "pinia";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Index,
            meta: {
                requiresAuth: true
            }
        },
        ...Auth
    ]
});
router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    const {user} = storeToRefs(userStore);
    console.warn('userStore', user.value === null);
    if (to.meta.requiresAuth && user.value === null) {
        next({name: 'login'});
    } else {
        next();
    }
});
export default router;
