<template>

<ScrollView>
  <the-header></the-header>
</ScrollView>

  <router-view style="margin-top: 200px" :key="this.$route.path"></router-view>

  <Footer />
</template>

<script>
import TheHeader from "./components/nav/TheHeader.vue";
import ScrollView from "./components/nav/ScrollFixedNavbar.vue"

export default {
  components: {
    TheHeader,
    ScrollView
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
