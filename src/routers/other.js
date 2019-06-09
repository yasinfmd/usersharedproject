import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import AppNav from '../components/shared/Nav.vue'
import store from "../store"
const ProtectionPersonalData = resolve => {
    require.ensure(['../components/ProtectionPersonalData/ProtectionPersonalData'], () => {
        resolve(require('../components/ProtectionPersonalData/ProtectionPersonalData'))
    })
}

const NotificationList = resolve => {
    require.ensure(['../components/NotificationList/NotificationList'], () => {
        resolve(require('../components/NotificationList/NotificationList'))
    })
}

const MessageBox = resolve => {
    require.ensure(['../components/Message/Message'], () => {
        resolve(require('../components/Message/Message'))
    })
}



const Nfound = resolve => {
    require.ensure(['../components/NotFound/404'], () => {
        resolve(require('../components/NotFound/404'))
    })
}


const otherrouters = {
    routes: {
        personaldata: {
            path: "/ProtectionPersonalData",
            name: "Protection",
            components: {
                default: ProtectionPersonalData,
                "appheader": Header,
                "appnav": AppNav,
                "appfooter": Footer
            },
            beforeEnter(to, from, next) {
                store.commit("setpopupstyle", "none")
                next()
            }
        },
        msgbox: {
            path: "/MessageBox",
            name: "Message",
            components: {
                default: MessageBox,
                "appheader": Header,
                "appnav": AppNav,
                "appfooter": Footer
            },
            beforeEnter(to, from, next) {
                store.dispatch("initAuth").then((res) => {
                    if (res == true) {
                        store.commit("setpopupstyle", "none")
                        next();
                    } else {
                        next("/Login")
                    }
                })

            }
        },
        ntflist: {
            path: "/NotificationList",
            name: "Notification",
            components: {
                default: NotificationList,
                "appheader": Header,
                "appnav": AppNav,
                "appfooter": Footer
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
        notfound: {
            path: "/NotFound",
            name: "404",
            components: {
                default: Nfound,
                "appheader": Header,
                "appnav": AppNav,
                "appfooter": Footer
            },
            beforeEnter(to, from, next) {
                store.commit("setpopupstyle", "none")
                next()
            }
        },




    }
}
export default otherrouters