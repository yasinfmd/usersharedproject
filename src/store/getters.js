 export const isAuthenticated = (state) => {
     return state.token !== "";
 }
 export const searchbardata = (state) => {
     return state.headersearch;
 }
 export const getappicon = (state) => {
     return state.appicon
 }
 export const getnotification = (state) => {
     return state.ntf
 }
 export const getapptxt = (state) => {
     return state.apptxt
 }
 export const getpopupstyle = (state) => {
     return state.chatpopupstyle
 }
 export const getactivepaginate = (state) => {
     return state.isactivepaginate
 }
 export const getpaginationcount = (state) => {
     return state.paginationcount
 }
 export const getfirspaginate = (state) => {
     return state.isfirstpaginete
 }
 export const getlastpaginate = (state) => {
     return state.islastpaginate
 }
 export const getpaginationlist = (state) => {
     return state.paginationlist
 }
 export const getimglist = (state) => {
     return state.cardimg
 }
 export const getbigphoto = (state) => {
     return state.bigphoto
 }
 export const getlocation = (state) => {
     debugger
     return state.location
 }
 export const getuser = (state) => {
     return state.user[0]
 }
