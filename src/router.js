import  Vue from  'vue';
import  Header  from  './components/shared/Header'
import  Footer from  './components/shared/Footer'
import AppNav from './components/shared/Nav.vue'
const Login = resolve => {
    require.ensure(['./components/Login/Login'], () => {
        resolve(require('./components/Login/Login'))
    })
}
const Dashboard = resolve => {
    require.ensure(['./components/Dashboard/UserDash'], () => {
        resolve(require('./components/Dashboard/UserDash'))
    })
}
const Register = resolve => {
    require.ensure(['./components/Register/Register'], () => {
        resolve(require('./components/Register/Register'))
    })
}
const ForgetPass = resolve => {
    require.ensure(['./components/ForgetPassword/ForgetPassword'], () => {
        resolve(require('./components/ForgetPassword/ForgetPassword'))
    })
}
const RegisterCheck = resolve => {
    require.ensure(['./components/RegisterCheck/RegisterCheck'], () => {
        resolve(require('./components/RegisterCheck/RegisterCheck'))
    })
}
const CreateNewPass = resolve => {
    require.ensure(['./components/CreateNewPassword/CreateNewPassword'], () => {
        resolve(require('./components/CreateNewPassword/CreateNewPassword'))
    })
}
const FavProduct = resolve => {
    require.ensure(['./components/FavoriteProduct/FavoriteProduct'], () => {
        resolve(require('./components/FavoriteProduct/FavoriteProduct'))
    })
}
const Policy = resolve => {
    require.ensure(['./components/Policy/Policy'], () => {
        resolve(require('./components/Policy/Policy'))
    })
}
const Rules = resolve => {
    require.ensure(['./components/Rules/Rules'], () => {
        resolve(require('./components/Rules/Rules'))
    })
}
const ProtectionPersonalData = resolve => {
    require.ensure(['./components/ProtectionPersonalData/ProtectionPersonalData'], () => {
        resolve(require('./components/ProtectionPersonalData/ProtectionPersonalData'))
    })
}
const SharedProduct = resolve => {
    require.ensure(['./components/SharedProduct/SharedProduct'], () => {
        resolve(require('./components/SharedProduct/SharedProduct'))
    })
}
const NotificationList = resolve => {
    require.ensure(['./components/NotificationList/NotificationList'], () => {
        resolve(require('./components/NotificationList/NotificationList'))
    })
}
const User = resolve => {
    require.ensure(['./components/Profile/User'], () => {
        resolve(require('./components/Profile/User'))
    })
}
const MessageBox = resolve => {
    require.ensure(['./components/Message/Message'], () => {
        resolve(require('./components/Message/Message'))
    })
}
const Revenue = resolve => {
    require.ensure(['./components/Revenue/Revenue'], () => {
        resolve(require('./components/Revenue/Revenue'))
    })
}
const Product = resolve => {
    require.ensure(['./components/Product/Product'], () => {
        resolve(require('./components/Product/Product'))
    })
}
const CreateNewProduct = resolve => {
    require.ensure(['./components/CreateNewProduct/CreateNewProduct'], () => {
        resolve(require('./components/CreateNewProduct/CreateNewProduct'))
    })
}
const CreateNewAnnouncement = resolve => {
    require.ensure(['./components/CreateNewAnnouncement/CreateNewAnnouncement'], () => {
        resolve(require('./components/CreateNewAnnouncement/CreateNewAnnouncement'))
    })
}
const SharedAnnouncement = resolve => {
    require.ensure(['./components/SharedAnnouncement/SharedAnnouncement'], () => {
        resolve(require('./components/SharedAnnouncement/SharedAnnouncement'))
    })
}
const DiscountPr = resolve => {
    require.ensure(['./components/DiscountProducts/DiscountProducts'], () => {
        resolve(require('./components/DiscountProducts/DiscountProducts'))
    })
}
const UserDetail = resolve => {
    require.ensure(['./components/Profile/UserDetail'], () => {
        resolve(require('./components/Profile/UserDetail'))
    })
}
const ProductDetail = resolve => {
    require.ensure(['./components/Product/ProductDetail'], () => {
        resolve(require('./components/Product/ProductDetail'))
    })
}
const EditPr = resolve => {
    require.ensure(['./components/Product/EditProduct'], () => {
        resolve(require('./components/Product/EditProduct'))
    })
}
const Admin = resolve => {
    require.ensure(['./components/Admin/Admin'], () => {
        resolve(require('./components/Admin/Admin'))
    })
}
const Warning = resolve => {
    require.ensure(['./components/Complaint/Complaint'], () => {
        resolve(require('./components/Complaint/Complaint'))
    })
}
import  VueRouter from 'vue-router';
import store from "./store"
import Complaint from "./components/Complaint/Complaint";
Vue.use(VueRouter)
export const router = new VueRouter({
    routes: [
        {
            path: "/Login",
            component: Login,
        },
        {
            path:"/",
            name:"Dash",
            components:{
              default:Dashboard,
              "appheader":Header,
              "appnav":AppNav,
                "appfooter":Footer
            },
            beforeEnter(to,from,next) {
                store.commit("setpopupstyle","none")
                next()
            }

        },

        {
            path:"/ManageWebApp",
            name:"Admin",
            components:{
                default:Admin
            },
            beforeEnter(to,from,next){
                store.commit("setpopupstyle","none")
                store.dispatch("initAuth").then((res)=>{
                    if(res==true){
                        next();
                    }
                    else{
                        next("/Login")
                    }
                })
            }
        },
        {
            path:"/Register",
            name:"Register",
            components:{
              default:Register,
            },
            beforeEnter(to,from,next) {
                store.commit("setpopupstyle","none")
                next()
            }
          },
        {
            path:"/RegisterCheck/:tempcode",
            name:"RegisterCheck",
            components:{
                default:RegisterCheck,
            },
            beforeEnter(to,from,next) {
                store.commit("setpopupstyle","none")
                next()
            }
        },
        {
            path:"/ForgetPassword",
            name:"Forget",
            components:{
                default:ForgetPass,
            },
            beforeEnter(to,from,next) {
                store.commit("setpopupstyle","none")
                next()
            }
        },
        {
            path:"/CreateNewPass",
            name:"CreateNewPass",
            components:{
                default:CreateNewPass,
            },
            beforeEnter(to,from,next) {
                store.commit("setpopupstyle","none")
                next()
            }
        },
        {
            path:"/PrivacyPolicy",
            name:"Policy",
            components:{
                default:Policy,
                "appheader":Header,
              "appnav":AppNav,
                "appfooter":Footer
            },
            beforeEnter(to,from,next) {
                store.commit("setpopupstyle","none")
                next()
            }
        },
        {
            path:"/DiscountProducts",
            name:"Discount",
            components:{
                default:DiscountPr,
                "appheader":Header,
              "appnav":AppNav,
                "appfooter":Footer
            },
            beforeEnter(to,from,next) {
                store.commit("setpopupstyle","none")
                next()
            }
        },
        {
            path:"/ProductDetail/:prid",
            name:"PrDetail",
            components:{
                default:ProductDetail,
                "appheader":Header,
                "appnav":AppNav,
                  "appfooter":Footer
            },
            beforeEnter(to,from,next) {
                store.commit("setpopupstyle","none")
                next()
            }
        },
        {
            path:"/CreateProduct",
            name:"CreateNewProduct",
            components:{
                default:CreateNewProduct,
                "appheader":Header,
              "appnav":AppNav,
                "appfooter":Footer
            },
            beforeEnter(to,from,next){
                store.commit("setpopupstyle","none")
                store.dispatch("initAuth").then((res)=>{
                    if(res==true){
                        next();
                    }
                    else{
                        next("/Login")
                    }
                })

            }
        },
        {
            path:"/CreateNewAnnouncement",
            name:"NewAnnouncement",
            components:{
                default:CreateNewAnnouncement,
                "appheader":Header,
                "appnav":AppNav,
                  "appfooter":Footer
            },
            beforeEnter(to,from,next){
                store.commit("setpopupstyle","none")
                store.dispatch("initAuth").then((res)=>{
                    if(res==true){
                        next();
                    }
                    else{
                        next("/Login")
                    }
                })

            }
        },

        {
            path:"/Products",
            name:"Product",
            components:{
                default:Product,
                "appheader":Header,
                "appnav":AppNav,
                  "appfooter":Footer
            },
            beforeEnter(to,from,next) {
                store.commit("setpopupstyle","none")
                next()
            }
        },
        {
            path:"/UserRevenue",
            name:"Revenue",
            components:{
                default:Revenue,
                "appheader":Header,
                "appnav":AppNav,
                  "appfooter":Footer
            },
            beforeEnter(to,from,next){
                store.commit("setpopupstyle","none")
                store.dispatch("initAuth").then((res)=>{
                    if(res==true){
                        next();
                    }
                    else{
                        next("/Login")
                    }
                })

            }
        },
        {
            path:"/FavProduct",
            name:"Favorite",
            components:{
                default:FavProduct,
                "appheader":Header,
                "appnav":AppNav,
                  "appfooter":Footer
            },
            beforeEnter(to,from,next){
                store.commit("setpopupstyle","none")
                store.dispatch("initAuth").then((res)=>{
                    if(res==true){
                        next();
                    }
                    else{
                        next("/Login")
                    }
                })

            }

        },
        {
            path:"/Profile",
            name:"Prof",
            components:{
                default:User,
                "appheader":Header,
                "appnav":AppNav,
                  "appfooter":Footer
            },
            beforeEnter(to,from,next){
                store.commit("setpopupstyle","none")
                store.dispatch("initAuth").then((res)=>{
                    if(res==true){
                        next();
                    }
                    else{
                        next("/Login")
                    }
                })

            }
        },
        {
            path:"/ProtectionPersonalData",
            name :"Protection",
            components:{
                default:ProtectionPersonalData,
                "appheader":Header,
                "appnav":AppNav,
                  "appfooter":Footer
            },
            beforeEnter(to,from,next) {
                store.commit("setpopupstyle","none")
                next()
            }
        },
        {
            path:"/CommunityRules",
            name:"Rules",
            components:{
                default:Rules,
              "appheader":Header,
              "appnav":AppNav,
                "appfooter":Footer
            },
            beforeEnter(to,from,next) {
                store.commit("setpopupstyle","none")
                next()
            }
        },
        {
            path:"/EditProduct/:prid",
            name:"EditPr",
            components:{
                default:EditPr,
              "appheader":Header,
              "appnav":AppNav,
                "appfooter":Footer
            },
            beforeEnter(to,from,next){
                store.commit("setpopupstyle","none")
                store.dispatch("initAuth").then((res)=>{
                    if(res==true){
                        store.commit("setpopupstyle","none")
                        next();
                    }
                    else{
                        next("/Login")
                    }
                })

            }
        },
        {
            path:"/MessageBox",
            name:"Message",
            components:{
                default:MessageBox,
              "appheader":Header,
              "appnav":AppNav,
                "appfooter":Footer
            },
            beforeEnter(to,from,next){
                store.dispatch("initAuth").then((res)=>{
                    if(res==true){
                        store.commit("setpopupstyle","none")
                        next();
                    }
                    else{
                        next("/Login")
                    }
                })

            }
        },
        {
            path:"/NotificationList",
            name:"Notification",
            components:{
                default:NotificationList,
              "appheader":Header,
              "appnav":AppNav,
                "appfooter":Footer
            },
            beforeEnter(to,from,next){
                store.commit("setpopupstyle","none")
                store.dispatch("initAuth").then((res)=>{
                    if(res==true){
                        next();
                    }
                    else{
                        next("/Login")
                    }
                })

            }
        },
        {
            path:"/Shared",
            name:"Share",
            components:{
                default:SharedProduct,
              "appheader":Header,
              "appnav":AppNav,
                "appfooter":Footer
            },
            beforeEnter(to,from,next){
                store.commit("setpopupstyle","none")
                store.dispatch("initAuth").then((res)=>{
                    if(res==true){

                        next();
                    }
                    else{
                        next("/Login")
                    }
                })

            }
        },
        {
            path:"/SharedAnnouncement",
            name:"ShareAnnouncement",
            components:{
                default:SharedAnnouncement,
              "appheader":Header,
              "appnav":AppNav,
                "appfooter":Footer
            },
            beforeEnter(to,from,next){
                store.dispatch("initAuth").then((res)=>{
                    if(res==true){
                        next();
                    }
                    else{
                        next("/Login")
                    }
                })

            }
        },
        {
            path:"/UserDetail/:userid",
            name:"UsDetail",
            components:{
                default:UserDetail,
              "appheader":Header,
              "appnav":AppNav,
                "appfooter":Footer
            },
            beforeEnter(to,from,next){
                store.commit("setpopupstyle","none")
                next()
            }
        },

          {path:"*",redirect:"/"}
    ],
    mode: "history"
})