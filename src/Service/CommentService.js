import WSProvider from "../Provider/WSProvider";

var CommentService={
    addcomment:(param)=>{
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost:8000/api/addcomment",param).then((response)=>{
                resolve(response)
            })
        });
        return deferred
    },
    getcommentlist:(param)=>{
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost:8000/api/getcomment",param).then((response)=>{
                resolve(response)
            })
        });
        return deferred
    },
}


export  default  CommentService