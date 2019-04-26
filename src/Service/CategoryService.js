import WSProvider from "../Provider/WSProvider";

var CategoryService={
    getallcategory:()=>{
        debugger
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxGet("http://localhost:8000/api/getcategory").then((response)=>{
                resolve(response)
            })

        });
        return deferred
    },


}


export  default  CategoryService