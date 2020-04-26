import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


/****** 请求相关 ******/
import {get, post, patch, put, del} from '@/request/http'
import axios from 'axios'
// 全局注册
Vue.prototype.$axios=axios;
Vue.prototype.$post=post;
Vue.prototype.$get=get;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.prototype.$del=del;
/****** 请求相关 ******/


/****** element引入 ******/
import '@/assets/element_#000000/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
/****** element引入 ******/


/****** rem自适应 ******/
import 'amfe-flexible/index.js'
/****** rem自适应 ******/


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
