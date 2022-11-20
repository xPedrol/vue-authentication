import Login from './Login.view.vue';
import Register from './Register.view.vue';

export default [
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {authRoute: true}
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {authRoute: true}
    },
];