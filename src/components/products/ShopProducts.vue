<template>
  <section class="featured spad">
    <div v-if="!isLoading && products.length > 0" class="container">
      <div v-for="(arrayOfProducts, idx) in categorizedProducts" :key="idx">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h2>{{ arrayOfProducts[0].category }} Product</h2>
            </div>
          </div>
        </div>
        <div class="row featured__filter">
          <div
            v-for="product in categorizedProducts[idx]"
            :key="product._id"
            class="col-lg-3 col-md-4 col-sm-6"
          >
            <div class="featured__item">
              <router-link :to="`/products/${product._id}`">
                <div
                  class="featured__item__pic set-bg"
                  :style="{ backgroundImage: `url(${product.image})` }"
                  :data-setbg="product.image"
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
    </div>
    <LoadingSpinner style="width: 100%" v-if="isLoading"></LoadingSpinner>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ShopProducts",
  data() {
    return {
      categorizedProducts: {},
      isLoading: false,
    };
  },
  methods: {
    ...mapActions("cart", ["addToCart"]),
    ...mapActions("products", ["fetchProducts"]),

    getCategorizedProducts() {
      this.products.forEach((p) => {
        if (
          !this.categorizedProducts ||
          !this.categorizedProducts[p.category]
        ) {
          this.categorizedProducts[p.category] = [p];
        } else {
          this.categorizedProducts[p.category].push(p);
        }
      });

      this.categorizedProducts = Object.keys(this.categorizedProducts).map(
        (key) => this.categorizedProducts[key]
      );
      // console.log(this.categorizedProducts);
    },
  },
  computed: mapGetters("products", ["products"]),

  created() {
    this.isLoading = true;

    this.fetchProducts();

    setTimeout(() => {
      this.getCategorizedProducts();
      this.isLoading = false;
    }, 1500);
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
