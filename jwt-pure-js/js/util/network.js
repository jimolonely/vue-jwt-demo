
const HOST = "http://localhost:8080";

funtion post(url, data, callback){
    $.ajax({
        url: HOST + url,
        type: "POST",
        data: data,
        success: function (re) {
            if (re.ok) {
                callback(re);
            } else {
                alert("false:" + re.msg);
            }
        },
        error: function (e) {
            console.log(e)
            alert("error")
        }
    })
}