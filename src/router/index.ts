import {createRouter, createWebHistory} from 'vue-router';
import Index from '@/views/Index.view.vue';
import AuthRoutes from '../views/auth/auth.router';
import {useUserStore} from '@/stores/User.store';

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
    const user = userStore.getUser();
    console.warn(user);
    if (to.meta.requiresAuth && !user) {
        next({name: 'login'});
    } else if (to.meta.authRoute && user) {
        next({name: 'home'});
    } else {
        next();
    }
});
export default router;
