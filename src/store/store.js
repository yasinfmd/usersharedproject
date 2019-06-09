import Vue from "vue"
import Vuex from "vuex"
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';
Vue.use(Vuex)
const namespaced = true;
const store = new Vuex.Store({
    state: {
        user: "",
        ntf: 0,
        token: "",
        headersearch: "",
        apptxt: "Giriş Yap",
        chatpopupstyle: "none",
        appicon: "fas fa-sign-in-alt",
        paginationlist: [],
        paginationcount: "",
        isactivepaginate: 0,
        isfirstpaginete: 0,
        islastpaginate: 10,
        cardimg: "",
        bigphoto: "",
        location: "",
    },
    namespaced,
    getters,
    mutations,
    actions
})

export default store