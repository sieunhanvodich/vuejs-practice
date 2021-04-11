import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login'
import Users from '../pages/Users/Users'
import UserDetail from '../pages/Users/UserDetail'
import Posts from '../pages/Posts/Posts'
import PostDetail from '../pages/Posts/PostDetail'

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
            component: Users,
        },
        {
            path: '/users/:id',
            component: UserDetail,
            name: 'userDetail'
        },
        {
            path: '/posts',
            component: Posts,
        },
        {
            path: '/posts/:id',
            component: PostDetail,
            name: 'postDetail'
        }
    ]
})