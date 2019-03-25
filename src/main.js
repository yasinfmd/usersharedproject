import Vue from 'vue'
import App from './App.vue'
import { router } from "./router"
import  Undescore from  'vue-underscore'
import  Moment from  'vue-moment'
import store from "./store"


Vue.use(Moment);
Vue.use(Undescore);
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
})
