import WSProvider from "../Provider/WSProvider";

var UserAvatarService={
    addavatar:(param)=>{
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost:8000/api/setnewavatar",param).then((response)=>{
                resolve(response)
            })
        });
        return deferred
    },
    updateuser:(param)=>{
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost:8000/api/updateuseravatar",param).then((response)=>{
                resolve(response)
            })
        });
        return deferred
    },
}


export  default  UserAvatarService