import { createRouter, createWebHistory } from 'vue-router';
import Users from '../views/Users.vue';
import Login from '../views/Login.vue';
import Posts from '../views/Posts.vue';
import Register from '../views/Register.vue';

const routes = [
    {
        path: '/',
        name: 'Users',
        component: Users,
    },
    {
        path: '/posts',
        name: 'Posts',
        component: Posts,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
