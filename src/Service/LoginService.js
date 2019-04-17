import WSProvider from "../Provider/WSProvider";

var LoginService={
    getuser:(param)=>{
        debugger
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxPost("http://localhost/productproject/src/test.php",param).then((response)=>{
                resolve(response)
            })

        });
        return deferred

    }
}


export  default  LoginService