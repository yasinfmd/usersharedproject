import WSProvider from "../Provider/WSProvider";

var ProductSeenService={
    add:(param)=>{
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost:8000/api/addseen",param).then((response)=>{
                resolve(response)
            })
        });
        return deferred
    },
}


export  default  ProductSeenService