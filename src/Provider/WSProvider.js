var WSProvider = {
    ajaxPost: function(serviceName, methodName, jsonParams) {
      var deferred = new Promise(function(resolve, reject) {
  
        return $.ajax({
          type: 'POST',
          url: "http://localhost/productproject/src/test.php",
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
          url: serviceUrl,
          datatype: 'application/json',
          success: function(result) {
            resolve(result)
          },
          error: function(request) {
            resolve(false);
          }
        })
      });
      return deferred
    },
  }
  