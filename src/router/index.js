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
            component: resolve => require(['@/components/login/register'], resolve)
        },
        {
            path: '/login',
            component: resolve => require(['@/components/login/login'], resolve)
        },
        {
            path: '/',
            component: resolve => require(['@/components/navigator'], resolve),
            meta: { title: '导航',isKeepAlive: true },
            children: [
                {
                    path: '/home',
                    component: resolve => require(['@/components/user/user.vue'], resolve),
                    meta: { title: '首页', isKeepAlive: true }
                },

                // 用户管理
                {
                    path: '/user',
                    component: resolve => require(['@/components/user/user.vue'], resolve),
                    meta: { title: '用户管理', isKeepAlive: true }
                },
                {
                    path: '/role',
                    component: resolve => require(['@/components/user/role.vue'], resolve),
                    meta: { title: '角色设置', isKeepAlive: true }
                },
                {
                    path: '/auth',
                    component: resolve => require(['@/components/user/auth.vue'], resolve),
                    meta: { title: '权限设置', isKeepAlive: true }
                },

                // 风控
                {
                    path: '/risk',
                    component: resolve => require(['@/components/risk/risk.vue'], resolve),
                    meta: { title: '风控', isKeepAlive: true }
                },


                // 监控
                {
                    path: '/monitor',
                    component: resolve => require(['@/components/monitor/monitor.vue'], resolve),
                    meta: { title: '实时监控', isKeepAlive: true }
                },

                // 数据
                {
                    path: '/future',
                    component: resolve => require(['@/components/data/future.vue'], resolve),
                    meta: { title: '期货合约', isKeepAlive: true }
                },

                // 分析
                {
                    path: '/analyze',
                    component: resolve => require(['@/components/analyze/analyze.vue'], resolve),
                    meta: { title: '分析', isKeepAlive: true }
                },

            ]
        },

    ]
})
