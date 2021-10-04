<template>
  <hero-call-to-action></hero-call-to-action>

  <product-carousel></product-carousel>

  <featured-products></featured-products>

  <banner></banner>

  <product-list-carousel></product-list-carousel>

  <blog-section></blog-section>
</template>

<script>
import HeroCallToAction from "../components/ui/HeroCallToAction.vue";
import ProductCarousel from "../components/ui/ProductCarousel.vue";
import FeaturedProducts from "../components/ui/FeaturedProducts.vue";
import Banner from "../components/ui/Banner.vue";
import ProductListCarousel from "../components/ui/ProductsListCarousel.vue";
import BlogSection from "../components/ui/BlogSection.vue";

export default {
  name: "Home",
  components: {
    HeroCallToAction,
    ProductCarousel,
    FeaturedProducts,
    Banner,
    ProductListCarousel,
    BlogSection,
  },
};
</script>
