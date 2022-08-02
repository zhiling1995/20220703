import Vue from 'vue'
import App from './App.vue'
//映入路由
import router from '@/router'

Vue.config.productionTip = false
let a = 100;

new Vue({
    render: h => h(App),
    //注册路由   路由组件需要有一个出口进行展示  在app.vue
    //注册路由，当这里书写router的时候，组件身上都有$route、 $router属性，不管路由组件还是非路由组件都有$route、 $router属性
    router
}).$mount('#app')