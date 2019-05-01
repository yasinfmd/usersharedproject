import WSProvider from "../Provider/WSProvider";

var UserProductService={
    isuserproduct:(param)=>{
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost:8000/api/isuserproduct",param).then((response)=>{
                resolve(response)
            })
        });
        return deferred
    },
}


export  default  UserProductService