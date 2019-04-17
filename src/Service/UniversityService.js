import WSProvider from "../Provider/WSProvider";

var UniversityService={
    getcityuni:(param)=>{
        debugger
        var deferred = new Promise(function(resolve, reject) {
            WSProvider.ajaxGet("http://localhost:8000/api/cityuni/"+param).then((response)=>{
                resolve(response)
            })

        });
        return deferred

    }
}


export  default  UniversityService