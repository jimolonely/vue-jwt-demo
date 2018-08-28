
const SERVER_URL = 'http://localhost:8081'
const LOGIN_URL = SERVER_URL + '/user/login'

import net from '../util/net';

export default {
    data: {
        authenticated: false
    },
    // login(context, info) {
    //     net.postJson('/user/login', info, function (token) {
    //         localStorage.setItem('token', token);
    //         this.$router.push('home');
    //     })
        // context.$http.post(LOGIN_URL, info).then(function (data) {
        //     console.log(data)
        //     var re = data.body;
        //     console.log(re.ok);
        //     if (re.ok) {
        //         localStorage.setItem('token', re.data);
        //         this.authenticated = true
        //         this.$router.push('home')
        //     } else {
        //         console.log(re)
        //     }
        // }, function (err) {
        //     console.log(err + "," + err.body.message)
        //     context.error = err.body.message
        // })
    // },
    getAuthHeader() {
        return {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    },
    checkAuth(context) {
        var token = localStorage.getItem('token')
        if (token) {
            this.authenticated = true
        } else {
            this.authenticated = false
        }
    }
}
