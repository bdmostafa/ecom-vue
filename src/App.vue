<template>
  <ScrollView>
    <the-header></the-header>
  </ScrollView>

  <div style="margin-top: 200px">
    <router-view :key="this.$route.path"></router-view>
  </div>

  <Footer />
</template>

<script>
import TheHeader from "./components/nav/TheHeader.vue";
import ScrollView from "./components/nav/ScrollFixedNavbar.vue";

export default {
  components: {
    TheHeader,
    ScrollView,
  },
};
</script>

<style>
.spinner--circle-8 {
  min-height: 50vh;
  width: 100%;
}

/* @import '~bootstrap/dist/css/bootstrap.css' */
@import "./App.css";
</style>
