<template>
  <section class="featured spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>Featured Product</h2>
          </div>
          <div class="featured__controls">
            <ul>
              <li class="active" @click="processAll">
                All
              </li>
              <li
                v-for="category in categories"
                :key="category"
                @click="processFilter(category)"
              >
                {{ category }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row featured__filter">
        <div
          v-for="product in isAll ? products : filteredProducts"
          :key="product._id"
          class="col-lg-3 col-md-4 col-sm-6"
        >
          <div class="featured__item">
            <div
              class="featured__item__pic set-bg"
              :style="{ backgroundImage: `url(${product.image})` }"
              :data-setbg="product.image"
            >
              <ul class="featured__item__pic__hover">
                <li>
                  <a href="#"><i class="fa fa-heart"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-retweet"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-shopping-cart"></i></a>
                </li>
              </ul>
            </div>
            <div class="featured__item__text">
              <h6>
                <a href="#"> {{ product.title }} </a>
              </h6>
              <h5>${{ product.price }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "FeaturedProducts",
  props: ["products"],
  data() {
    return {
      isAll: true,
      isFilter: false,
    };
  },
  methods: {
    ...mapActions("products", ["getCategories", "getFilteredProducts"]),
    processAll() {
      this.isAll = true;
      this.isFiltered = false;
    },
    processFilter(category) {
      this.getFilteredProducts(category);
      this.isAll = false;
      this.isFiltered = true;
    },
  },
  computed: {
    ...mapGetters("products", ["categories", "filteredProducts"]),
  },
  created() {
    this.getCategories();
  },
};
</script>
