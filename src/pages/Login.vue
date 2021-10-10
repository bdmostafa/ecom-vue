<template>
  <div class="container">
    <div class="row">
      <h1><i class="fa fa-lock" aria-hidden="true"></i> Login</h1>
    </div>
    <br /><br />

    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text"><i class="fa fa-user"></i></span>
      </div>
      <input
        type="text"
        name=""
        class="form-control"
        placeholder="username or email"
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
      />
    </div>
    <br />
    <div class="checkbox">
      <label><input type="checkbox" value="" /> Remember me</label>
    </div>
    <br />
    <button type="submit" class="btn btn-success mr-2">
      <span class="glyphicon glyphicon-off"></span> Login
    </button>

    <button type="submit" class="btn btn-info">
      <span class="glyphicon glyphicon-remove"></span>Login with Facebook</button
    ><br />
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
export default {
  name: "Login",
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
