import WSProvider from "../Provider/WSProvider";

var ProductPhotoService={
    addphoto:(param)=>{
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost:8000/api/addnewphoto",param).then((response)=>{
                resolve(response)
            })
        });
        return deferred
    },
    delphotos:(param)=>{
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost:8000/api/delproductphotos",param).then((response)=>{
                resolve(response)
            })
        });
        return deferred
},
    updatephoto:(param)=>{
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost:8000/api/updatephoto",param).then((response)=>{
                resolve(response)
            })
        });
        return deferred
    }
}


export  default  ProductPhotoService