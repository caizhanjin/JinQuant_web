import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            redirect: '/404'
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
            path: '/404',
            component: resolve => require(['@/components/common/404'], resolve),
        },
        {
            path: '/nav',
            component: resolve => require(['@/components/navigator'], resolve),
            meta: { title: '导航',isKeepAlive: true },
            redirect: '/nav/home',
            children: [
                {
                    path: '/nav/home',
                    component: resolve => require(['@/components/user/user.vue'], resolve),
                    meta: { title: '首页', isKeepAlive: true }
                },
                {
                    path: '/nav/404',
                    component: resolve => require(['@/components/common/404'], resolve),
                    meta: { title: '404', isKeepAlive: false }
                },

                // 用户管理
                {
                    path: '/nav/user',
                    component: resolve => require(['@/components/user/user.vue'], resolve),
                    meta: { title: '用户管理', isKeepAlive: true }
                },
                {
                    path: '/nav/role',
                    component: resolve => require(['@/components/user/role.vue'], resolve),
                    meta: { title: '角色设置', isKeepAlive: true }
                },
                {
                    path: '/nav/auth',
                    component: resolve => require(['@/components/user/auth.vue'], resolve),
                    meta: { title: '权限设置', isKeepAlive: true }
                },

                // 风控
                {
                    path: '/nav/risk',
                    component: resolve => require(['@/components/risk/risk.vue'], resolve),
                    meta: { title: '风控', isKeepAlive: true }
                },


                // 监控
                {
                    path: '/nav/monitor',
                    component: resolve => require(['@/components/monitor/monitor.vue'], resolve),
                    meta: { title: '实时监控', isKeepAlive: true }
                },

                // 数据
                {
                    path: '/nav/future',
                    component: resolve => require(['@/components/data/future.vue'], resolve),
                    meta: { title: '期货合约', isKeepAlive: true }
                },

                // 分析
                {
                    path: '/nav/analyze',
                    component: resolve => require(['@/components/analyze/analyze.vue'], resolve),
                    meta: { title: '分析', isKeepAlive: true }
                },

            ]
        },

    ]
})
