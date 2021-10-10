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
