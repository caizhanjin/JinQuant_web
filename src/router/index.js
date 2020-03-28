import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '*',
            redirect: '/login'
        },
        {
            path: '/demo',
            component: resolve => require(['@/components/demo'], resolve)
        },
        {
            path: '/register',
            component: resolve => require(['@/components/user/register'], resolve)
        },
        {
            path: '/login',
            component: resolve => require(['@/components/user/login'], resolve)
        },
        {
            path: '/navigator',
            component: resolve => require(['@/components/navigator'], resolve)
        },

    ]
})
