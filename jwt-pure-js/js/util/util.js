
/**
 * 网络请求封装模块
 */
var net = {
    HOST: "http://localhost:8081",
    /**
     * JSON请求，后台使用RequestBody接收数据
     */
    postJson: function (url, data, callback) {
        $.ajax({
            url: net.HOST + url,
            type: "POST",
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            data: JSON.stringify(data),
            success: function (re) {
                if (re.ok) {
                    callback(re);
                } else {
                    console.log(re.msg);
                }
            },
            error: function (e) {
                console.log(e)
                alert("error")
            }
        })
    }
}

/**
 * 本地存储模块
 */
var storage = {
    TOKEN_KEY: "token_key",
    /**
     * 存储token到cookie
     */
    tokenStore: function (token) {
        console.log(document.cookie)
        // cookie.setCookie(storage.TOKEN_KEY, token, 1);
        sessionStorage.TOKEN_KEY = token;
    },
    /**
     * 获取token
     */
    tokenGet: function () {
        // var token = cookie.getCookie(storage.TOKEN_KEY);
        // return token;
        return sessionStorage.TOKEN_KEY;
    },
    isTokenValid: function () {
        if (storage.tokenGet() === null) {
            return false;
        }
        return true;
    }
}

/**
 * js操作cookie工具类
 */
var cookie = {
    //写cookies
    setCookie: function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    },
    //读取cookies 
    getCookie: function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
        }
        return "";
    },
    //删除cookies 
    delCookie: function (name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = cookie.getCookie(name);
        if (cval != null) {
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
        }
    }
}