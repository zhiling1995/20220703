import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
let a = 100;

new Vue({
    render: h => h(App),
}).$mount('#app')