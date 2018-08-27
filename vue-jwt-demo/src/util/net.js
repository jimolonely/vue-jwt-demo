/**
 * 本工具类与网络相关
 */
import $ from 'jquery';

const SERVER_URL = 'http://localhost:8081/'

export default {
    /**
     * 检查token是否合法，需要服务器认证
     */
    isTokenValid() {
        var token = localStorage.getItem('token');
        if (token) {
            this.get("user/checkToken?token=" + token, function () {
                return true;
            })
        } else {
            console.log("token不存在")
            this.$router.push('login');
        }
    },
    postJson(url, json, callback) {
        var token = localStorage.getItem('token');
        if (token || url === "user/login") {
            $.ajax({
                url: SERVER_URL + url,
                type: 'POST',
                dataType: 'json',
                contentType: 'application/json;charset=utf-8',
                data: JSON.stringify(json),
                success: function (re) {
                    console.log(re)
                    if (re.ok) {
                        callback(re.data);
                    } else {
                        alert(re.msg);
                    }
                },
                error: function (e) {
                    console.log(e)
                }
            })
        } else {
            console.log("token不存在")
            this.$router.push('login');
        }
    },
    get(url, callback) {
        var token = localStorage.getItem('token');
        if (token) {
            $.ajax({
                url: SERVER_URL + url,
                type: 'GET',
                dataType: 'JSON',
                // beforeSend: function (xhr) {
                //     xhr.setRequestHeader("Authorization", 'Bearer ' + token);
                // },
                headers: {
                    "Authorization": "Bearer " + token
                },
                success: function (re) {
                    if (re.ok) {
                        callback(re.data);
                    } else {
                        alert(re.msg);
                    }
                },
                error: function (e) {
                    console.log(e)
                }
            })
        } else {
            console.log("token不存在")
            this.$router.push('login');
        }
    },
    post(url, json, callback) {
        $.ajax({
            url: SERVER_URL + url,
            type: 'POST',
            dataType: 'json',
            // ContentType: 'application/json;charset=utf-8',
            data: JSON.stringify(json),
            success: function (re) {
                console.log(re)
                if (re.ok) {
                    callback(re.data);
                } else {
                    alert(re.msg);
                }
            },
            error: function (e) {
                console.log(e)
            }
        })
    }
}