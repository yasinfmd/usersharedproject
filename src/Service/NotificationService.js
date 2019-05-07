import WSProvider from "../Provider/WSProvider";

var NotificationService={
    add:(param)=>{
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost:8000/api/addnotification",param).then((response)=>{
                resolve(response)
            })
        });
        return deferred
    },
    del:(param)=>{
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost:8000/api/delnotification",param).then((response)=>{
                resolve(response)
            })
        });
        return deferred
    },
    get:(param)=>{
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost:8000/api/getnotification",param).then((response)=>{
                resolve(response)
            })
        });
        return deferred
    },
    set:(param)=>{
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost:8000/api/setnotification",param).then((response)=>{
                resolve(response)
            })
        });
        return deferred
    }

}


export  default  NotificationService