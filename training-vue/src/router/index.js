import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import HomePage from '../components/HomePage'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/login",
            component: Login,
        },
        {
            path: '/users',
            component: HomePage,
        },
        {
            path: 'users:id'
        },
        {
            path: 'posts'
        },
        {
            path: 'posts/:id'
        }
    ]
})