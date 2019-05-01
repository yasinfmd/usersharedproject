import WSProvider from "../Provider/WSProvider";

var ProductService={
    addnewproduct:(param)=>{
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost:8000/api/addnewproduct",param).then((response)=>{
                resolve(response)
            })
        });
        return deferred
    },
    addproductuesr:(param)=>{
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost:8000/api/addproductuser",param).then((response)=>{
                resolve(response)
            })
        });
        return deferred
    },
    addprphotos:(param)=>{
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost:8000/api/addprphotos",param).then((response)=>{
                resolve(response)
            })
        });
        return deferred
    },
    getproduct:(param)=>{
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost:8000/api/getproduct",param).then((response)=>{
                resolve(response)
            })
        });
        return deferred
    },
    getallproductphotos:(param)=>{
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost:8000/api/getphotos",param).then((response)=>{
                resolve(response)
            })
        });
        return deferred
    },

    getproductdetail:(param)=>{
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost:8000/api/productdetail",param).then((response)=>{
                resolve(response)
            })
        });
        return deferred
    },
    softdelproduct:(param)=>{
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost:8000/api/delproduct",param).then((response)=>{
                resolve(response)
            })
        });
        return deferred
    },
    updatesell:(param)=>{
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost:8000/api/updateproduct",param).then((response)=>{
                resolve(response)
            })
        });
        return deferred
    }
}


export  default  ProductService