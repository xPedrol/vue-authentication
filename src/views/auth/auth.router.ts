export default [
    {
        path: '/login',
        name: 'login',
        component: import('./Login.view.vue'),
        meta: {authRoute: true}
    },
    {
        path: '/register',
        name: 'register',
        component: import('./Register.view.vue'),
        meta: {authRoute: true}
    },
];