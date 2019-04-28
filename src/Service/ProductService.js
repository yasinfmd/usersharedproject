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
    }
}


export  default  ProductService