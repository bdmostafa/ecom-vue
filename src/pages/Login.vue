<template>
  <div class="container">
    <div class="row">
      <h1><i class="fa fa-lock" aria-hidden="true"></i> Login</h1>
    </div>
    <br /><br />
<form class="form-signup" @submit.prevent="submitLogin">
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text"><i class="fa fa-user"></i></span>
      </div>
      <input
        type="text"
        name=""
        class="form-control"
        placeholder="email"
        v-model="user.email"
      />
    </div>
    <br />

    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text"><i class="fa fa-key icon"></i></span>
      </div>
      <input
        type="Password"
        name=""
        class="form-control"
        placeholder="password"
        v-model="user.password"
      />
    </div>
    <br />
    <div class="checkbox">
      <label><input type="checkbox" value="" /> Remember me</label>
    </div>
    <br />
    <div>

    </div>
    <button type="submit" class="btn btn-success mr-2">
      <span class="glyphicon glyphicon-off"></span> Login
    </button>

    <button type="submit" class="btn btn-info">
      <span class="glyphicon glyphicon-remove"></span>Login with Google</button
    ><br />
    </form>
    <br />
    <center>
      <div style="border:1px solid black;height:1px;width:300px;"></div>
    </center>
    <br />
    <div>
      <p>Don't have an Account! <a href="#">Sign Up Here</a></p>
      <p>Forgot <a href="#">Password?</a></p>
    </div>

  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
      ...mapActions('login', ["login"]),
    submitLogin() {

      if (this.ValidateEmail(this.user.email) === false) {
        alert("Please provide a valid Email address");
      }

      this.login({...this.user})

    },
    ValidateEmail(mail) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
      }
      return false;
    },
  },
  computed: mapGetters('login', ["isAuthenticated"]),
};
</script>

<style scoped>
.container {
  border: 2px solid darkgreen;
  text-align: center;
  height: 500px;
  width: 400px;
  margin-bottom: 25px;
}
.row h1 {
    margin: 0 auto;
}
.row {
  height: 90px;
  width: 396px;
  background-color: paleturquoise;
}
</style>
