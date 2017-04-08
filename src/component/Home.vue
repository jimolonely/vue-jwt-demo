<template>
  <div id="home">
    <h1>{{msg}}</h1>
    <button @click="getEmail()">Get Email</button>
    <h2>Email:{{email}}</h2>
  </div>
</template>

<script>
import auth from '../auth/auth'

export default {
  name: 'home',
  data () {
    return {
      msg: '欢迎您登录成功',
      email:''
    }
    },
    beforeCreate(){
        //如果没有token的话需要重新登录
         if(!auth.authenticated){
            this.$router.push('login')
        }
    },
    methods:{
        getEmail(){
            this.$http.get('http://localhost:8081/user/getEmail',{
                headers:auth.getAuthHeader()
            }).then(function(re){
                this.email = re.bodyText
            },function(){
                console.log("get email error")
            })
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
