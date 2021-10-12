<template>
  <div class="text-center my-5 not__found__section">
    <h2>Page Not Found</h2>
    <button class="btn btn__goToHome btn-lg mt-3">
      <router-link style="color: #fff" to="/"> GO TO HOME </router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not__found__section{
    min-height: 25vh;
}
.btn__goToHome {
  display: inline-block;
  font-size: 14px;
  padding: 10px 28px 10px;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 700;
  background: #7fad39;
  letter-spacing: 2px;
}
</style>
