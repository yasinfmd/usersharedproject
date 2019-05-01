var Component={
    validateemail: function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },
    makeRandomText:function(){
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    },
    urlParse: function(value, type) {
        var dizi = [];
        var param = value.split('&');
        param.forEach(function(row, index) {
            if (row.indexOf("=") > 0) {
                var value = row.split('=');

                dizi.push({
                    PropertyName: value[0],
                    Operation: value[1].split(",").length > 1 ? "IN" : "EQ",
                    PropertyValue: value[1]
                })

            } else if (row.indexOf("<") > 0) {
                var value = row.split('<');
                dizi.push({
                    PropertyName: value[0],
                    Operation: "LT",
                    PropertyValue: value[1]
                })
            } else if (row.indexOf(">") > 0) {
                var value = row.split('>');
                dizi.push({
                    PropertyName: value[0],
                    Operation: "GT",
                    PropertyValue: value[1]
                })
            } else if (row.indexOf("%") > 0) {
                var value = row.split('%');
                dizi.push({
                    PropertyName: value[0],
                    Operation: "CT",
                    PropertyValue: value[1]
                })
            } else if (row.indexOf("!") > 0) {
                var value = row.split('!');
                if (type == "N") {
                    value[1] = parseFloat(value[1])
                }
            }
        })
        return dizi;
    },
    datatable:function(tableid){
        $('#'+tableid).DataTable(
            {

                responsive: true,
                keys: true,
                rowGroup: true,
                "orderClasses": true,
                "order": [[ 0, 'asc' ], [ 1, 'asc' ]],
                "orderCellsTop": true,
                "autoWidth": true,
                "ordering": true,
                "aLengthMenu": [[5, 10, 25, -1], [5, 10, 25, "Tümü"]],
                "iDisplayLength": 5,
                "searching": true,
                "processing": true,
                "info": true,
                destroy:true,
                "lengthChange": true,
                language: {
                    searchPlaceholder: "Kayıtlarda Ara..",
                    "search":"Ara:",
                    "emptyTable":"selaö",
                    "zeroRecords":"Aramanızla Eşleşen Bir Kayıt Bulamadık..",
                    "loadingRecords": "Yükleniyor...",
                    "info":"_TOTAL_  Kayıt Arasında Gösterilen _START_ - _END_  ",
                    "lengthMenu":     "Gösterilecek  Kayıt Sayısı _MENU_ ",
                    "infoFiltered":   "(Toplam _MAX_ Kayıttan Filtrelenen)",
                    paginate: {
                        "next":       "› İleri",
                        "previous":   "‹ Geri"

                    },

                },

            }
        );
    },
    base64url:function(source) {
    encodedSource = CryptoJS.enc.Base64.stringify(source);
    encodedSource = encodedSource.replace(/=+$/, '');
    encodedSource = encodedSource.replace(/\+/g, '-');
    encodedSource = encodedSource.replace(/\//g, '_');
    return encodedSource;
    },
    showntf:function(msg){
        if (Notification.permission !== 'denied') {
            Notification.requestPermission(function (permission) {
                if (permission === "granted") {
                    // onaylarsa bilgilendirme bildirimi gönderilecek
                    var notification = new Notification('Öğrenciysen.com', {
                        body:msg,
                        icon: "https://cdn1.iconfinder.com/data/icons/icons-for-a-site-1/64/advantage_teamwork-64.png"
                    });
                }
            });
        }
    },
    readFileToBase64: function (file) {

        return new Promise(function(resolve, reject) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var binaryFile = "";
                var base64File;
                if (typeof reader.readAsBinaryString == "undefined") {
                    var bytes = new Uint8Array(e.target.result);
                    for (var i = 0; i < bytes.byteLength; i++) {
                        binaryFile += String.fromCharCode(bytes[i]);
                    }
                    base64File = btoa(binaryFile) ;
                } else {
                    base64File = btoa(e.target.result);
                }
                var data = {
                    name: file.name,
                    type: file.type != null ? file.type : file.name.split(".").pop(),
                    size: file.size.toString(),
                    base64: base64File
                };
                resolve(data);
            };
            if (typeof reader.readAsBinaryString != "undefined") {
                reader.readAsBinaryString(file);
            } else {
                reader.readAsArrayBuffer(file);
            }
        })

    }
}