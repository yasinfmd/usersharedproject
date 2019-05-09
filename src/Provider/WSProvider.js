var WSProvider = {
    ajaxPost: function(serviceName, jsonParams) {
      debugger
      var deferred = new Promise(function(resolve, reject) {
        return $.ajax({
          type: 'POST',
          url: serviceName,
          datatype: 'application/json',
          headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
          data: jsonParams,
          success: function(result) {
            if (result) {
              debugger
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
          headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
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
    ajaxDelete:function (serviceName, jsonParams) {
      debugger
      var deferred = new Promise(function(resolve, reject) {
        return $.ajax({
          type: 'DELETE',
          url: serviceName,
          datatype: 'application/json',
          headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
          success: function(result) {
            if (result) {
              debugger
              resolve(result)
            }
            else{
              resolve("")
            }
          },
          error: function(request) {
          }
        })


      })
      return deferred
    }
  }
export  default  WSProvider;