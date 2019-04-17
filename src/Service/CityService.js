import WSProvider from "../Provider/WSProvider";

var CityService={
            gettallcity:(methodname)=>{
                debugger
                var deferred = new Promise(function(resolve, reject) {
                    WSProvider.ajaxGet("http://localhost:8000/api/getallcity").then((response)=>{
                        resolve(response)
                    })

                });
                return deferred

            }
}


export  default  CityService