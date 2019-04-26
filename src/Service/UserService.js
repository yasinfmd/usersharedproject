import WSProvider from "../Provider/WSProvider";

var UserService={
    adduser:(param)=>{
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost:8000/api/user",param).then((response)=>{
                resolve(response)
            })
        });
        return deferred
    },
    deleteuser:(param)=>{
        var deferred=new Promise(function (resolve,reject) {
            WSProvider.ajaxDelete("http://localhost:8000/api/delregister/"+param).then((response)=>{
                resolve(response)
            })

        })
    },
    updateuser:(param)=>{
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost:8000/api/updateuseravatar",param).then((response)=>{
                resolve(response)
            })
        });
        return deferred
    },
    getuser:(param)=>{
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost:8000/api/userget",param).then((response)=>{
                resolve(response)
            })
        });
        return deferred
    }
}


export  default  UserService