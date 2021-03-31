import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/login",
            component: Login,
        },
        {
            path: '/users'
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