import {createRouter, createWebHistory} from 'vue-router';
import Index from '@/views/Index.view.vue';
import AuthRoutes from '../views/auth/auth.router';
import {useUserStore} from '@/stores/User.store';
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
        ...AuthRoutes
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
