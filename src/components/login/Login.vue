<template>
  <div
    v-if="!isLoading"
    class="container"
    :style="isNewAccount ? { height: '600px' } : ''"
  >
    <div class="row">
      <h2>
        <i class="fa fa-lock" aria-hidden="true"></i>
        {{ isNewAccount ? "Create Account" : "Login" }}
      </h2>
    </div>
    <br />
    <form class="form-signup" @submit.prevent="onSUbmit">
      <div class="input-group" v-if="isNewAccount">
        <div class="input-group-prepend">
          <span class="input-group-text"><i class="fa fa-user"></i></span>
        </div>
        <input
          type="text"
          name="name"
          class="form-control"
          placeholder="name"
          v-model.trim="user.name"
        />
      </div>
      <br />

      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text"><i class="fa fa-envelope"></i></span>
        </div>
        <input
          type="text"
          name="email"
          class="form-control"
          placeholder="email"
          v-model.trim="user.email"
        />
      </div>
      <br />
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text"><i class="fa fa-key icon"></i></span>
        </div>
        <input
          type="Password"
          name="password"
          class="form-control"
          placeholder="password"
          v-model.trim="user.password"
        />
      </div>
      <br />
      <div class="input-group" v-if="isNewAccount">
        <div class="input-group-prepend">
          <span class="input-group-text"><i class="fa fa-key icon"></i></span>
        </div>
        <input
          type="Password"
          name="confirmPassword"
          class="form-control"
          placeholder="confirm password"
          v-model.trim="user.confirmPassword"
        />
      </div>
      <br />

      <div class="checkbox">
        <label><input type="checkbox" value="" /> Remember me</label>
      </div>
      <br />
      <div></div>
      <button type="submit" class="btn btn-success mr-2">
        <span class="glyphicon glyphicon-off"></span>
        {{ isNewAccount ? "Register" : "Login" }}
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
      <p v-if="!isNewAccount">
        Don't have an Account!
        <a href="#" @click="isNewAccount = true">Sign Up Here</a>
      </p>
      <p v-if="isNewAccount">
        Have an Account!
        <a href="#" @click="isNewAccount = false">Login Here</a>
      </p>
      <p>Forgot <a href="#">Password?</a></p>
    </div>
  </div>
  <Circle8 style="width: 100%" v-if="isLoading"></Circle8>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      isNewAccount: false,
      user: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      isLoading: false,
    };
  },
  methods: {
    ...mapActions("login", ["login", "createAccount"]),
    async onSUbmit() {
      // console.log(this.user);
      if (this.ValidateEmail(this.user.email) === false) {
        alert("Please provide a valid Email address");
        return;
      }

      this.isLoading = true;

      if (this.isNewAccount) {
        if (
          this.matchConfirmPassword(
            this.user.password,
            this.user.confirmPassword
          ) === false
        ) {
          alert("Confirm password not match. Please try again!");
          return;
        }

        try {
          await this.createAccount({ ...this.user });
          this.$router.replace('/login')
        } catch (err) {
          console.log(err);
          this.$router.back()
        }
        this.isLoading = false;

        if (this.successMessage) {
          this.isNewAccount = false;
        }
      } else {
        const loginData = {
          email: this.user.email,
          password: this.user.password,
        };

        try {
          await this.login(loginData);
          this.$router.back()
        } catch (err) {
          console.log(err);
        }

        this.isLoading = false;
      }
    },
    ValidateEmail(mail) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
      }
      return false;
    },
    matchConfirmPassword(password, confirmPassword) {
      if (password === confirmPassword) {
        return true;
      }
      return false;
    },
  },
  computed: mapGetters("login", ["isAuthenticated", "successMessage"]),
};
</script>

<style scoped>
.container {
  border: 2px solid darkgreen;
  text-align: center;
  height: 515px;
  width: 400px;
  margin-bottom: 25px;
}
.row h2 {
  margin: 0 auto;
  display: flex;
  align-items: center;
  font-size: 40px;
}
.row {
  height: 90px;
  width: 396px;
  background-color: paleturquoise;
}
a:hover {
  color: darkgreen;
  font-weight: bold;
}
</style>
