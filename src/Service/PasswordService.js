import WSProvider from "../Provider/WSProvider";

var PasswordService={
    updatepassword:(param)=>{
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost:8000/api/SetPassword",param).then((response)=>{
                resolve(response)
            })
        });
        return deferred
    },
    getpassword:(param)=>{
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost:8000/api/GetPassword",param).then((response)=>{
                resolve(response)
            })
        });
        return deferred
    },

}


export  default  PasswordService