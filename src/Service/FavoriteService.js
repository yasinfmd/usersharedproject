import WSProvider from "../Provider/WSProvider";

var FavoriteProductService={
    addfav:(param)=>{
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost:8000/api/addfav",param).then((response)=>{
                resolve(response)
            })
        });
        return deferred
    },
    delfav:(param)=>{
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost:8000/api/delfav",param).then((response)=>{
                resolve(response)
            })
        });
        return deferred
    },

}


export  default  FavoriteProductService