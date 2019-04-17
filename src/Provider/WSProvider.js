var WSProvider = {
    ajaxPost: function(serviceName, jsonParams) {
      var deferred = new Promise(function(resolve, reject) {
        return $.ajax({
          type: 'POST',
          url: serviceName,
          datatype: 'application/json',
          headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
          data: jsonParams,
          success: function(result) {
            if (result) {
              resolve(result)
            }
            else{
              resolve("")
            }
          },
          error: function(request) {
          }
        })
      });
      return deferred
    },
    ajaxGet: function(serviceName, methodName, jsonParams) {
      var deferred = new Promise(function(resolve, reject) {
        return $.ajax({
          type: 'GET',
          url: serviceName,
          datatype: 'application/json',
          success: function(result) {
            debugger
            resolve(result)
          },
          error: function(request) {
            debugger
            resolve(false);
          }
        })
      });
      return deferred
    },
  }
  export  default  WSProvider