import Vue from 'vue';
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import AppNav from '../components/shared/Nav.vue'
import UserRouters from './users'
import ProductRouters from './product'
import AdminRouters from './admin'
import OtherRouters from './other'
const Dashboard = resolve => {
    require.ensure(['../components/Dashboard/UserDash'], () => {
        resolve(require('../components/Dashboard/UserDash'))
    })
}

import VueRouter from 'vue-router';
import store from "../store"
Vue.use(VueRouter)
export const router = new VueRouter({
    routes: [{
            path: "/",
            name: "Dash",
            components: {
                default: Dashboard,
                "appheader": Header,
                "appnav": AppNav,
                "appfooter": Footer
            },
            beforeEnter(to, from, next) {
                store.commit("setpopupstyle", "none")
                next()
            }
        },
        UserRouters.routes.forgotpass,
        UserRouters.routes.login,
        UserRouters.routes.newpass,
        UserRouters.routes.policy,
        UserRouters.routes.register,
        UserRouters.routes.rules,
        UserRouters.routes.verify,
        UserRouters.routes.detail,
        UserRouters.routes.user,
        UserRouters.routes.revenue,
        UserRouters.routes.compalintuser,
        ProductRouters.routes.discountpr,
        ProductRouters.routes.editproduct,
        ProductRouters.routes.favproduct,
        ProductRouters.routes.newannouncement,
        ProductRouters.routes.newproduct,
        ProductRouters.routes.productdetail,
        ProductRouters.routes.products,
        ProductRouters.routes.sharedproduct,
        AdminRouters.routes.admin,
        OtherRouters.routes.msgbox,
        OtherRouters.routes.notfound,
        OtherRouters.routes.ntflist,
        OtherRouters.routes.personaldata,
        { path: "*", redirect: "/" }
    ],
    mode: "history"
})