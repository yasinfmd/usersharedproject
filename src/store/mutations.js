export const setToken = (state, token) => {
    state.token = token
}
export const setactivepagination = (state, number) => {
    debugger
    state.isactivepaginate = number
}
export const setUs = (state, user) => {
    debugger
    state.user = user;
    StorageControls.setItem("us", user)
}
export const setntfcount = (state, count) => {
    state.ntf = count
}
export const setpopupstyle = (state, popupstyle) => {
    state.chatpopupstyle = popupstyle
}
export const setappicontxt = (state, appcon) => {
    state.appicon = appcon.icon;
    state.apptxt = appcon.txt;
}
export const setsearchbar = (state, search) => {
    state.headersearch = search;
}
export const clearsearchbar = (state) => {
    state.headersearch = ""
}
export const clearToken = (state) => {
    state.token = ""
}
export const clearUs = (state) => {
    state.token = ""
}
export const clearlocation = (state) => {
    state.location = ""
}

export const setuserlocation = (state, location) => {
    debugger
    state.location = location
}