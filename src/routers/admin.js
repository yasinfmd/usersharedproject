import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import AppNav from '../components/shared/Nav.vue'
import store from "../store"
const Admin = resolve => {
    require.ensure(['../components/Admin/Admin'], () => {
        resolve(require('../components/Admin/Admin'))
    })
}
const adminrouters = {
    routes: {
        admin: {
            path: "/ManageWebApp",
            name: "Admin",
            components: {
                default: Admin
            },
            beforeEnter(to, from, next) {
                store.commit("setpopupstyle", "none")
                store.dispatch("initAuth").then((res) => {
                    if (res == true) {
                        next();
                    } else {
                        next("/Login")
                    }
                })
            }
        },
    }
}
export default adminrouters