import LoginService from '../Service/LoginService'
import ProductService from '../Service/ProductService'
import { router } from "../routers/routers"
export const setLocation = ({ commit }, location) => {
    debugger
    commit("setuserlocation", location)
    StorageControls.setItem("location", JSON.stringify(location));
}
export const initAuth = ({ commit, dispatch }) => {
    debugger
    return new Promise((resolve, reject) => {
        let token = StorageControls.getItem("token");
        let user = StorageControls.getItem("us");
        if (token && user) {
            let time = new Date().getTime();
            let expirationdate = StorageControls.getItem("exp")
            if (time > expirationdate) {
                dispatch("logout");
            } else {
                commit("setToken", token);
                commit("setUs", user);
                let newsecond = expirationdate - time;
                console.log(newsecond)
                dispatch("timetologout", newsecond);
                resolve(true)
            }
        } else {
            resolve(false)
        }
    })
}
export const setcardimg = ({ commit, dispatch, state }, list) => {
    debugger
    state.cardimg = list;
}
export const setbigphoto = ({ commit, dispatch, state }, photo) => {
    state.bigphoto = photo
}
export const setpagination = ({ commit, dispatch, state }, list) => {
    debugger
    // liste sayısı verilecek
    // get isteği atılacak listedeki indexten çekilip

    //statusa bak

    ProductService.getproduct({
        urlparse: Component.urlParse("photo.seqnumber=0 & userproduct.userid=" + this.getters.getuser.userid + "& product.productstatus=" + list[0]),
        token: this.getters.getuser.token,
        email: this.getters.getuser.username,
        userid: this.getters.getuser.userid,
        pagination: list[1]
    }).then((res) => {
        debugger
        res.data.forEach((x) => {
            var startdate = x.date
            var new_date = moment(startdate, "DD-MM-YYYY").add('days', 30);
            var day = new_date.format('DD');
            var month = new_date.format('MM');
            var year = new_date.format('YYYY');
            x.newdate = day + '.' + month + '.' + year
        })
        dispatch("setpaginationcount", { data: res.data, count: res.count })
    })
    state.isactivepaginate = list[1] - 1
    state.islastpaginate = list[1] * 10;
    state.isfirstpaginete = (list[1] * 10) - 10
}
export const setpaginationcount = ({ commit, dispatch, state }, list) => {
    debugger
    const pagination = list.count / 10;
    if (pagination.toString().includes('.')) {
        state.paginationcount = Math.floor(pagination) + 1;

    } else {
        state.paginationcount = Math.floor(pagination);

    }
    // liste verilecek
    state.paginationlist = list.data.slice(0, 10)
}
export const login = ({ commit, dispatch, state }, user) => {
    debugger
    return new Promise((resolve, reject) => {
        LoginService.getuser(user).then((response) => {
            if (response[0].status === "NotDefine") {
                resolve("NotDefine")
            } else if (response[0].status === "Blocked") {
                resolve("Blocked")
            } else {
                commit("setToken", response.token)
                commit("setUs", response)
                debugger

                StorageControls.setItem("token", { token: response[0].token }, "")
                StorageControls.setItem("exp", new Date().getTime() + 3600000);
                dispatch("timetologout", 3600000)
                resolve(true)
            }
        })
    });
}
export const searchdata = ({ commit, dispatch, state }, search) => {
    commit("setsearchbar", search)
}

export const logout = ({ commit }) => {
    debugger
    commit("clearToken")
    commit("clearUs");
    commit("clearlocation");
    LoginService.logout({
        urlparse: Component.urlParse("id=" + StorageControls.getItem("us")[0].logintime[Object.keys(StorageControls.getItem("us")[0].logintime)[0]].id)
    }).then((res) => {})
    localStorage.clear()
    router.replace("/Login");
}
export const timetologout = ({ dispatch }, time) => {
    setTimeout(() => {
        dispatch("logout");
    }, time)
}
export const userisempty = ({ commit, dispatch }, time) => {
    $(window).on("blur focus", function(e) {
        var prevType = $(this).data("prevType");
        if (prevType != e.type) {
            switch (e.type) {
                case "blur":
                    dispatch("timetologout", 3600000)
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