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

import { mapGetters, mapActions } from "vuex";

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
  methods: {
    ...mapActions("products", ["fetchProducts", "getCategories"]),
    //   loadProducts() {
    //   this.products = this.$store.getters['products/products']
    //   console.log(this.products)
    //   },
  },
  computed: {
    ...mapGetters("products", ["products"]),
  },
  created() {
      this.fetchProducts();
      this.getCategories();
  },
};
</script>
