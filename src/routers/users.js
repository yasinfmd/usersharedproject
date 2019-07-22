import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import AppNav from '../components/shared/Nav.vue'
import store from "../store/store"
const Revenue = resolve => {
    require.ensure(['../components/Revenue/Revenue'], () => {
        resolve(require('../components/Revenue/Revenue'))
    })
}
const SharedDetail = resolve => {
    require.ensure(['../components/SharedAnnouncement/SharedAnnouncementDetail'], () => {
        resolve(require('../components/SharedAnnouncement/SharedAnnouncementDetail'))
    })
}
const Warning = resolve => {
    require.ensure(['../components/Complaint/Complaint'], () => {
        resolve(require('../components/Complaint/Complaint'))
    })
}
const Register = resolve => {
    require.ensure(['../components/Register/Register'], () => {
        resolve(require('../components/Register/Register'))
    })
}
const UserDetail = resolve => {
    require.ensure(['../components/Profile/UserDetail'], () => {
        resolve(require('../components/Profile/UserDetail'))
    })
}
const User = resolve => {
    require.ensure(['../components/Profile/User'], () => {
        resolve(require('../components/Profile/User'))
    })
}
const ForgetPass = resolve => {
    require.ensure(['../components/ForgetPassword/ForgetPassword'], () => {
        resolve(require('../components/ForgetPassword/ForgetPassword'))
    })
}
const CreateNewPass = resolve => {
    require.ensure(['../components/CreateNewPassword/CreateNewPassword'], () => {
        resolve(require('../components/CreateNewPassword/CreateNewPassword'))
    })
}
const Policy = resolve => {
    require.ensure(['../components/Policy/Policy'], () => {
        resolve(require('../components/Policy/Policy'))
    })
}
const Rules = resolve => {
    require.ensure(['../components/Rules/Rules'], () => {
        resolve(require('../components/Rules/Rules'))
    })
}
const Login = resolve => {
    require.ensure(['../components/Login/Login'], () => {
        resolve(require('../components/Login/Login'))
    })
}
const ActiveVerify = resolve => {
    require.ensure(['../components/ActivationVerify/ActivationVerify'], () => {
        resolve(require('../components/ActivationVerify/ActivationVerify'))
    })
}
const userrouters = {
    routes: {
        register: {
            path: "/Register",
            name: "Register",
            components: {
                default: Register,
            },
            beforeEnter(to, from, next) {
                store.commit("setpopupstyle", "none")
                next()
            }
        },
        forgotpass: {
            path: "/ForgetPassword",
            name: "Forget",
            components: {
                default: ForgetPass,
            },
            beforeEnter(to, from, next) {
                store.commit("setpopupstyle", "none")
                next()
            }
        },
        newpass: {
            path: "/CreateNewPass",
            name: "CreateNewPass",
            components: {
                default: CreateNewPass,
            },
            beforeEnter(to, from, next) {
                store.commit("setpopupstyle", "none")
                next()
            }
        },
        policy: {
            path: "/PrivacyPolicy",
            name: "Policy",
            components: {
                default: Policy,
                "appheader": Header,
                "appnav": AppNav,
                "appfooter": Footer
            },
            beforeEnter(to, from, next) {
                store.commit("setpopupstyle", "none")
                next()
            }
        },
        rules: {
            path: "/CommunityRules",
            name: "Rules",
            components: {
                default: Rules,
                "appheader": Header,
                "appnav": AppNav,
                "appfooter": Footer
            },
            beforeEnter(to, from, next) {
                store.commit("setpopupstyle", "none")
                next()
            }
        },
        verify: {
            path: "/AccountVerify/:code",
            name: "Verify",
            components: {
                default: ActiveVerify
            },
            beforeEnter(to, from, next) {
                store.commit("setpopupstyle", "none")
                next();
            }
        },
        user: {
            path: "/Profile",
            name: "Prof",
            components: {
                default: User,
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
        detail: {
            path: "/UserDetail/:userid",
            name: "UsDetail",
            components: {
                default: UserDetail,
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
        compalintuser: {
            path: "/Complaint/:userid",
            name: "Warn",
            components: {
                default: Warning,
                "appheader": Header,
                "appnav": AppNav,
                "appfooter": Footer
            },
            beforeEnter(to, from, next) {
                store.commit("setpopupstyle", "none")
                next()
            }
        },
        revenue: {
            path: "/UserRevenue",
            name: "Revenue",
            components: {
                default: Revenue,
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
        shareddetail: {
            path: "/SharedDetail/:id",
            name: "ShDetail",
            components: {
                default: SharedDetail,
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
        login: {
            path: "/Login",
            component: Login,
        },
    }
}
export default userrouters