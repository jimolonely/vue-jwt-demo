
const SERVER_URL = 'http://localhost:8081'
const LOGIN_URL = SERVER_URL+'/login2'

export default{
    data:{
        authenticated:false
    },
    login(context,info){
        context.$http.post(LOGIN_URL,info).then(function(data){
            console.log(data.bodyText)
            localStorage.setItem('token',data.bodyText);
            this.authenticated = true
            this.$router.push('home')
        },function(err){
            console.log(err+","+err.body.message)
            context.error = err.body.message
        })
    },
    getAuthHeader(){
        return {
            'Authorization':'Bearer '+localStorage.getItem('token')
        }
    },
    checkAuth(){
        var token = localStorage.getItem('token')
        if(token){
            this.authenticated = true
        }else{
            this.authenticated = false
        }
    }
}
