<template>
  <div>
    <h2>登录</h2>
    <p>{{ error }}</p>
    <div>
      <input
        type="text"
        placeholder="Enter your username"
        v-model="info.username"
      >
    </div>
    <div>
      <input
        type="password"
        placeholder="Enter your password"
        v-model="info.password"
      >
    </div>
    <button @click="submit()">登录</button>
  </div>
</template>

<script>
import net from "../util/net";

export default {
  data() {
    return {
      info: {
        username: "",
        password: ""
      },
      error: ""
    };
  },
  methods: {
    submit() {
      var info = {
        username: this.info.username,
        password: this.info.password
      };

      let context = this;
      net.postJson("user/login", info, function(token) {
        localStorage.setItem("token", token);
        context.$router.push("home");
      });
    }
  }
};
</script>
