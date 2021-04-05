import { createRouter, createWebHistory } from 'vue-router';
import Users from '../views/Users.vue';
import Login from '../views/Login.vue';

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
    {
        path: '/users',
        name: 'Users',
        component: Users,
    },
    {
        path: '/posts',
        name: 'Posts',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Posts.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
