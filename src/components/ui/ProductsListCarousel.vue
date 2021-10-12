<template>
  <section class="latest-product spad">
    <div class="container">
      <h4>Lowest Price Products</h4>
      <div class="row">
        <div class="products__section">
          <div
            v-for="product in lowestProducts"
            :key="product._id"
            class="col-md-4 latest-prdouct__slider__item"
          >
            <router-link
              :to="`/products/${product._id}`"
              class="lowest__product__item"
            >
              <div class="lowest__product__item__pic">
                <img :src="product.image" :alt="product.title" />
              </div>
              <div class="lowest__product__item__text">
                <h6>{{ product.title.slice(0, 25) }}</h6>
                <span>${{ product.price.toFixed(2) }}</span>
                <p>
                  <router-link
                    :to="`/category/${product.category}`"
                    class="lowest__product__item__text"
                  >
                    {{ product.category }}
                  </router-link>
                </p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProductListCarousel",
  data() {
    return {
      lowestProducts: [],
    };
  },
  methods: {
    getLowestPriceProduct() {
      this.lowestProducts = this.products.filter(
        (product) => product.price < 100
      );
    },
  },
  computed: mapGetters("products", ["products"]),
  created() {
    this.getLowestPriceProduct();
  },
};
</script>

<style scoped>
.container h4 {
  text-align: center;
  font-weight: bold;
  margin-bottom: 50px;
}
.products__section {
  display: contents;
}
.lowest__product__item {
  margin-bottom: 20px;
  overflow: hidden;
  display: block;
}
.lowest__product__item__pic {
  float: left;
  margin-right: 26px;
  width: 3rem;
}
.lowest__product__item__text {
  overflow: hidden;
  padding-top: 10px;
}
.lowest__product__item__text span {
  color: black;
}
.lowest__product__item__text span:hover {
  font-weight: bold;
}
.lowest__product__item__text p a:hover {
  font-weight: bold;
  color: darkblue;
}
</style>
