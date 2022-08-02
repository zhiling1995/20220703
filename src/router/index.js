//配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";
//使用插件
Vue.use(VueRouter);
//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
//配置路由  虽然暴露了 但是要执行一次，所以在入口main.js文件进行注册，映入路由
export default new VueRouter({
    //配置路由
    routes: [{
            path: "/home",
            component: Home
        },
        {
            path: "/search",
            component: Search
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/register",
            component: Register
        },
        //重定向，在项目跑起来的时候，访问/,立马让他重定向到首页
        {
            path: "*",
            redirect: '/home'
        },
    ]
})