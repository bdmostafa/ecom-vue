<template>
  <the-header></the-header>

  <router-view :key="this.$route.path"></router-view>

  <Footer />
</template>

<script>
import TheHeader from "./components/nav/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
.spinner--circle-8 {
  min-height: 50vh;
  width: 100%;
}

/* @import '~bootstrap/dist/css/bootstrap.css' */
@import './App.css'
</style>
