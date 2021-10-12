<template>
  <hero-call-to-action></hero-call-to-action>

  <product-carousel></product-carousel>

  <featured-products v-if="!isLoading"></featured-products>
  <Circle8 style="width: 100%" v-if="isLoading"></Circle8>

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
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    HeroCallToAction,
    ProductCarousel,
    FeaturedProducts,
    Banner,
    ProductListCarousel,
    BlogSection,
  },
  methods: {
    ...mapActions("products", ["fetchProducts"]),
    //   loadProducts() {
    //   this.products = this.$store.getters['products/products']
    //   console.log(this.products)
    //   },
  },
  computed: {
    ...mapGetters("products", ["products"]),
  },
  created() {
    this.isLoading = true;

    setTimeout(() => {
      this.fetchProducts();
      this.isLoading = false;
    }, 1500);
  },
};
</script>
