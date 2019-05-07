import Vue from "vue"
import Vuex from "vuex"
import { router } from "./router"
import LoginService from './Service/LoginService'
import ProductService from './Service/ProductService'
Vue.use(Vuex)

const store = new Vuex.Store({
    state : {
        user:"",
        ntf:0,
        token : "",
        headersearch:"",
        setpr:"",
        alertcontent:"",
        target:"",
        apptxt:"Giriş Yap",
        chatpopupstyle:"none",
        appicon:"fas fa-sign-in-alt",
        paginationlist:[],
        paginationcount:"",
        isactivepaginate:0,
        isfirstpaginete:0,
        islastpaginate:10,
        cardimg:"",
        bigphoto:"",
        location:"",
    },
    mutations : {
        setToken(state, token){
            state.token = token
        },
        setactivepagination(state,number){
            debugger
            state.isactivepaginate=number
        },
        setUs(state,user){
            debugger
            state.user=user;
            StorageControls.setItem("us",user)
        },
        setntfcount(state,count){
          state.ntf=count
        },
        setpopupstyle(state,popupstyle){
          state.chatpopupstyle=  popupstyle
        },
        setappicontxt(state,appcon){
                state.appicon=appcon.icon;
                state.apptxt=appcon.txt;
            },
        setsearchbar(state,search){
          state.headersearch= search;
        },
        clearsearchbar(state){
            state.headersearch=""
        },
        clearToken(state){
            state.token = ""
        },
        clearUs(state){
          state.token=""
        },
        clearlocation(state){
            state.location=""
        },
        setproduct(state,product){
            state.setpr=product
        },
        clearproduct(state){
            state.setpr=""
        },
        setuserlocation(state,location){
            debugger
            state.location=location
        }
    },
    actions : {
        setLocation({commit},location){
            debugger
            commit("setuserlocation",location)
            StorageControls.setItem("location",JSON.stringify(location));
        },
        initAuth({commit,dispatch}){
            debugger
            return new Promise((resolve,reject)=>{
            let token=StorageControls.getItem("token");
            let user=StorageControls.getItem("us");
            if(token && user){
                let time=new Date().getTime();
                let expirationdate=StorageControls.getItem("exp")
                if(time>expirationdate){
                    dispatch("logout");
                }else{
                    commit("setToken",token);
                    commit("setUs",user);
                    let newsecond=expirationdate-time;
                    console.log(newsecond)
                    dispatch("timetologout",newsecond);
                        resolve(true)
                }
            }else{
                resolve(false)
            }
            })
        },
        setcardimg({commit,dispatch,state},list){
            debugger
            state.cardimg=list;
        },
        setbigphoto({commit,dispatch,state},photo){
            state.bigphoto=photo
        },
        setpagination({commit,dispatch,state},list){
            debugger
            // liste sayısı verilecek
            // get isteği atılacak listedeki indexten çekilip

            //statusa bak

            ProductService.getproduct({urlparse:
                    Component.urlParse("photo.seqnumber=0 & userproduct.userid="+this.getters.getuser.userid+"& product.productstatus="+list[0]),
                token:this.getters.getuser.token,
                email:this.getters.getuser.username,
                userid:this.getters.getuser.userid,
                pagination:list[1]
            }).then((res)=>{
                debugger
                res.data.forEach((x)=>{
                    var startdate=x.date
                    var new_date = moment(startdate, "DD-MM-YYYY").add('days', 30);
                    var day = new_date.format('DD');
                    var month = new_date.format('MM');
                    var year = new_date.format('YYYY');
                    x.newdate=day + '.' + month + '.' + year
                })
               dispatch("setpaginationcount",{data:res.data,count:res.count})
            })
            state.isactivepaginate=list[1]-1
            state.islastpaginate=list[1]*10;
            state.isfirstpaginete=(list[1]*10)-10
        },
        setpaginationcount({commit,dispatch,state},list){
            debugger
            const pagination=list.count/10;
            if(pagination.toString().includes('.')){
                state.paginationcount=Math.floor(pagination)+1;

            }else{
                state.paginationcount=Math.floor(pagination);

            }
            // liste verilecek
            state.paginationlist=list.data.slice(0,10)
        },
        login({ commit, dispatch, state}, user){
            debugger
          return new Promise((resolve, reject) => {
              LoginService.getuser(user).then((response)=>{
                  if(response[0].status==="NotDefine"){
                      resolve("NotDefine")
                  }else if(response[0].status==="Blocked"){
                        resolve("Blocked")
                  }else{
                commit("setToken", response.token)
               commit("setUs",response)
                      debugger

                StorageControls.setItem("token",{token:response[0].token},"")
                StorageControls.setItem("exp",new Date().getTime()+3600000);
                dispatch("timetologout",3600000)
                resolve(true)
                  }
              })
          });
        },
        searchdata({ commit, dispatch, state}, search){
                commit("setsearchbar",search)
        },
        setprdata({commit},prdata){
            const setprdata=StorageControls.getItem("prdata")
            if(setprdata!=undefined && setprdata!=""){
                debugger
                commit("setproduct",JSON.parse(Base64.decode(setprdata)))
            }else{
                debugger
                StorageControls.setItem("prdata",Base64.encode(JSON.stringify(prdata)),"")
                commit("setproduct",prdata)
            }
        },
        logout({ commit}){
            debugger
            commit("clearToken")
            commit ("clearUs");
            commit ("clearlocation");
            LoginService.logout({urlparse:
                    Component.urlParse("id="+StorageControls.getItem("us")[0].logintime[Object.keys(StorageControls.getItem("us")[0].logintime)[0]].id)
            }).then((res)=>{
            })
            localStorage.clear()
            router.replace("/Login");
        },
        timetologout({dispatch},time){
            setTimeout(()=>{
                dispatch("logout");
            },time)
        },
        userisempty({commit,dispatch},time){
            $(window).on("blur focus", function(e) {
                var prevType = $(this).data("prevType");
                if (prevType != e.type) {
                    switch (e.type) {
                        case "blur":
                            dispatch("timetologout",3600000)
                            console.log("sayfadan cıktı")
                            break;
                        case "focus":
                            console.log("sayfaya geldi")
                            break;
                    }
                }

                $(this).data("prevType", e.type);
            })
        }
    },
    getters : {
        isAuthenticated(state){
            return state.token !=="";
        },
        searchbardata(state){
            return state.headersearch;
        },
        editprdata(state){
            return state.setpr;
        },
        getappicon(state){
            return state.appicon
        },
        getnotification(state){
            return state.ntf
        },
        getapptxt(state){
            return state.apptxt
        },
        getpopupstyle(state){
            return state.chatpopupstyle
        },
        getactivepaginate(state){
        return state.isactivepaginate
        },
        getpaginationcount(state){
         return   state.paginationcount
        },
        getfirspaginate(state){
          return state.isfirstpaginete
        },
        getlastpaginate(state){
            return state.islastpaginate
        },
        getpaginationlist(state){
           return state.paginationlist
        },
        getimglist(state){
            return state.cardimg
        },
        getbigphoto(state){
            return state.bigphoto
        },
        getlocation(state){
            debugger
            return state.location
        },
        getuser(state){
            return state.user[0]
        }
    }
})

export default store