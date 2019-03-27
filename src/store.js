import Vue from "vue"
import Vuex from "vuex"
import { router } from "./router"

Vue.use(Vuex)

const store = new Vuex.Store({
    state : {
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
    },
    mutations : {
        setToken(state, token){
            state.token = token
        },
        setpopupstyle(state,popupstyle){
          state.chatpopupstyle=  popupstyle
        },
        setappicontxt(state,appcon){
                state.appicon=appcon.icon;
                state.apptxt=appcon.txt;
            },
        setModal(state,content){
            state.alertcontent=content
        },
        setModalTarget(state,modaltarget){
            state.target=modaltarget
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
        setproduct(state,product){
            state.setpr=product
        },
        clearproduct(state){
            state.setpr=""
        },
    },
    actions : {
        initAuth({commit,dispatch}){
            return new Promise((resolve,reject)=>{
            let token=StorageControls.getItem("token");
            if(token){
                let time=new Date().getTime();
                let expirationdate=StorageControls.getItem("exp")
                if(time>expirationdate){
                    dispatch("logout");
                }else{
                    commit("setToken",token);
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
        setpagination({commit,dispatch,state},list){
            debugger
            state.paginationlist=list[0].slice((list[1]*10)-10,(list[1]*10))
            state.islastpaginate=list[1]*10;
            state.isfirstpaginete=(list[1]*10)-10
            state.isactivepaginate=list[1]-1

        },
        setpaginationcount({commit,dispatch,state},list){
            const pagination=list.length/10;
            if(pagination.toString().includes('.')){
                state.paginationcount=Math.floor(pagination)+1;

            }else{
                state.paginationcount=Math.floor(pagination);

            }
            state.paginationlist=list.slice(0,10)
        },
        login({ commit, dispatch, state}, user){
            debugger
          return new Promise((resolve, reject) => {
            WSProvider.ajaxPost("","",user)
            .then((response)=>{
                commit("setToken", response.token)
                StorageControls.setItem("token",response.token,"")
                StorageControls.setItem("exp",new Date().getTime()+3600000);
                dispatch("timetologout",3600000)
                resolve(true)
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
            commit("clearToken")
            localStorage.clear()
            router.replace("/Login");
        },
        timetologout({dispatch},time){
            setTimeout(()=>{
                dispatch("logout");
            },time)
        },
        register({ commit, dispatch, state}, user){

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
        gettarget(state){
            return state.target
        },
        getmodalcontent(state){
            return  state.alertcontent
        },
        getappicon(state){
            return state.appicon
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
        }
    }
})

export default store