<template>
  <section class="featured spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>{{ category }} Product</h2>
          </div>
        </div>
      </div>
      <div class="row featured__filter">
        <div
          v-for="product in filteredProducts"
          :key="product._id"
          class="col-lg-3 col-md-4 col-sm-6"
        >
          <div class="featured__item">
            <router-link :to="`/products/${product._id}`">
              <div
                class="featured__item__pic set-bg"
                :style="{ backgroundImage: `url(${product.image})` }"
              >
                <p
                  class="featured__item__text__soldout"
                  v-show="product.quantity === 0"
                >
                  SOLD OUT
                </p>
                <ul class="featured__item__pic__hover">
                  <li>
                    <a href="#"><i class="fa fa-heart"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-retweet"></i></a>
                  </li>
                  <li>
                    <a href="#" @click="addToCart(product._id)">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </router-link>
            <div class="featured__item__text">
              <h6>
                <router-link :to="`/products/${product._id}`">
                  {{ product.title.slice(0, 50) }}
                </router-link>
              </h6>
              <h5>${{ product.price }}</h5>
              <div class="featured__item__footer">
                <h6>
                  <router-link
                    :to="`/category/${product.category}`"
                    class="featured__item__category"
                  >
                    {{ product.category }}
                  </router-link>
                </h6>
                <h6 class="featured__item__stock">
                  {{
                    product.quantity > 0
                      ? `(In Stock ${product.quantity} )`
                      : "No Stock"
                  }}
                </h6>
              </div>
              <button
                :disabled="product.quantity === 0"
                :class="{ disabled: product.quantity === 0 }"
                class="btn btn__addToCart"
                @click="addToCart(product._id)"
              >
                Add To Cart
              </button>
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
  name: "ProductCard",
  props: ["category"],
  methods: {
    ...mapActions("products", ["getFilteredProducts"]),
    ...mapActions("cart", ["addToCart"]),
  },
  computed: mapGetters("products", ["filteredProducts"]),

  created() {
    this.getFilteredProducts(this.category);
    // console.log("cat===", this.$route.params.category)
  },
};
</script>

<style scoped>
.featured__filter {
  justify-content: center;
}
.featured__item {
  height: 30rem;
}
.featured__item:hover {
  height: 30rem;
  box-shadow: 0px 0px 20px 0px lightgrey;
}
.featured__item__text__soldout {
  background: red;
  width: 85px;
  text-align: center;
  color: white;
  font-weight: 700;
  position: absolute;
  right: 0px;
}
.featured__item__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px;
}

.featured__item__stock {
  color: red;
  font-weight: 500;
  /* width: 60%; */
}

.featured__item__category {
  font-weight: bold;
  color: green;
}
.btn__addToCart {
  display: inline-block;
  font-size: 14px;
  padding: 10px 28px 10px;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 700;
  background: #7fad39;
  letter-spacing: 2px;
  width: 95%;
  cursor: pointer;
}
.disabled {
  cursor: not-allowed;
}
</style>
