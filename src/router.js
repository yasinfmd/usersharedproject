import  Vue from  'vue';
import  Login from  './components/Login/Login'
import  Dashboard from  './components/Dashboard/UserDash'
import  Header  from  './components/shared/Header'
import  Footer from  './components/shared/Footer'
import  Register from  './components/Register/Register'
import  ForgetPass from  './components/ForgetPassword/ForgetPassword'
import  RegisterCheck from  './components/RegisterCheck/RegisterCheck'
import  CreateNewPass from  './components/CreateNewPassword/CreateNewPassword'
import  FavProduct from  './components/FavoriteProduct/FavoriteProduct'
import  Policy from  './components/Policy/Policy'
import  Rules from   './components/Rules/Rules'
import  ProtectionPersonalData from  './components/ProtectionPersonalData/ProtectionPersonalData'
import  SharedProduct from  './components/SharedProduct/SharedProduct'
import  NotificationList from  './components/NotificationList/NotificationList'
import  User from  './components/Profile/User'
import  MessageBox from './components/Message/Message'
import  Revenue from  './components/Revenue/Revenue'
import  Product from  './components/Product/Product'
import  CreateNewProduct from  './components/CreateNewProduct/CreateNewProduct'
import  CreateNewAnnouncement from  './components/CreateNewAnnouncement/CreateNewAnnouncement'
import SharedAnnouncement from './components/SharedAnnouncement/SharedAnnouncement'
import  DiscountPr from  './components/DiscountProducts/DiscountProducts'
import  UserDetail from './components/Profile/UserDetail'
import  ProductDetail from  './components/Product/ProductDetail'
import  EditPr from  './components/Product/EditProduct'
import Admin from  './components/Admin/Admin'
import  VueRouter from 'vue-router';
import store from "./store"

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