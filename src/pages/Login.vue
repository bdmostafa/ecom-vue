<template>
  <login-register>
    <slot></slot>
  </login-register>
</template>

<script>
import LoginRegister from "../components/login/Login.vue";

export default {
  components: {
    LoginRegister,
  },
};
</script>
