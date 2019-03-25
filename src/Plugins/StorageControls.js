var StorageControls = {
    setItem: function(key, data,type) {
        if (type == "s") {
            sessionStorage.setItem(key, Base64.encode(JSON.stringify(data)))
        } else {
            localStorage.setItem(key, Base64.encode(JSON.stringify(data)))
        }
    },
    getItem: function(key, type) {
        if (type == "s") {
            if(sessionStorage.getItem(key) !=null || localStorage.getItem(key).length>0 ){
                var sessionstorage = JSON.parse(Base64.decode(sessionStorage.getItem(key)));
                return sessionstorage;
            }
        } else {
            if(localStorage.getItem(key) !=null ){
                var localstorage = JSON.parse(Base64.decode(localStorage.getItem(key)));
                return localstorage;
            }
        }
    }
}
