<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-4 col-md-5 item-photo">
        <img style="max-width:100%;" :src="product.image" />
      </div>
      <div class="col-xs-5 col-md-7" style="border:0px solid gray">
        <h2>
          {{ product.title }}
        </h2>

        <div class="product__rating">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star-o"></i>
        </div>
        <p class="review__link">10 Review(s) | Add your review</p>
        <p>{{ product.description }}</p>
        <h4 class="title-price"><small>PRICE</small></h4>
        <h3 style="margin-top:0px; font-weight: bold">
          ${{ product.price }}
          <span class="stock__number">
            {{
              product.quantity !== 0
                ? `In Stock (${product.quantity})`
                : "No stock"
            }}
          </span>
        </h3>

        <div class="section" style="padding-bottom:20px;">
          <h6 class="title-attr"><small>Quantity</small></h6>
          <div>
            <div
              @click="updateQty(product._id, false, product.quantity)"
              class="btn-minus"
            >
              <span class="fa fa-minus"></span>
            </div>
            <input
              type="number"
              v-model="cartInputValue"
              min="1"
              :max="product.quantity >= 1 ? product.quantity : 0"
              ref="qtyInput"
            />
            <div
              @click="updateQty(product._id, true, product.quantity)"
              class="btn-plus"
            >
              <span class="fa fa-plus"></span>
            </div>
          </div>
        </div>

        <div class="section" style="padding-bottom:20px;">
          <button
            :disabled="product.quantity === 0 || isAdded"
            :class="{ disabled: product.quantity === 0 || isAdded }"
            class="btn btn-success"
            @click="processToAdd(product._id)"
          >
            <span
              style="margin-right:20px; font-weight: 700"
              class="fa fa-shopping-cart"
              aria-hidden="true"
            >
              {{ isAdded ? " Added" : " Add To Cart" }}
            </span>
          </button>

          <ul class="social__links">
            <li>
              <a href="#"><i class="fa fa-heart"></i> add to wishlist</a>
            </li>
            <li>
              <a href="#"><i class="fa fa-exchange"></i> add to compare</a>
            </li>
          </ul>

          <ul class="social__links">
            <li>Category:</li>
            <li>
              <router-link :to="`/category/${product.category}`">
                {{ product?.category }}
              </router-link>
            </li>
          </ul>

          <ul class="social__links">
            <li>Share:</li>
            <li>
              <a href="http://facebook.com"><i class="fa fa-facebook"></i></a>
            </li>
            <li>
              <a href="http://twitter.com"><i class="fa fa-twitter"></i></a>
            </li>
            <li>
              <a href="http://youtube.com"><i class="fa fa-youtube"></i></a>
            </li>
            <li>
              <a href="http://pinterest.com"><i class="fa fa-pinterest"></i></a>
            </li>
            <li>
              <a href="http://instagram.com"><i class="fa fa-instagram"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <product-card :category="product.category">
      <slot></slot>
    </product-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProductDetails",
  components: {},
  data() {
    return {
      isAdded: false,
      productId: this.$route.params.productId,
      cartInputValue: 1,
    };
  },
  methods: {
    // ...mapActions({
    //   fetchProduct: ["products/fetchProduct"],
    //   addToCart: ["cart/addToCart"],
    // }),
    ...mapActions("products", ["fetchProduct"]),
    ...mapActions("cart", ["addToCart", "updateCart"]),
    processToAdd(id) {
      this.addToCart(id);
      this.isAdded = true;
    },
    updateQty(id, isIncrease, productQty) {
      // let inputValue = this.$refs.qtyInput.value;
      if (isIncrease) {
        productQty > this.$refs.qtyInput.value
          ? this.$refs.qtyInput.value++
          : this.$refs.qtyInput.value;
      } else {
        this.$refs.qtyInput.value > 1
          ? this.$refs.qtyInput.value--
          : this.$refs.qtyInput.value;
      }

      this.updateCart({ id, isIncrease });
    },
    getQtyInputValue(id) {
      this.cartItems.forEach((cartItem) => {
        if (cartItem._id === id) {
          this.cartInputValue = cartItem.qtyOrdered;
        }
      });
    },
  },
  computed: {
    ...mapGetters("products", ["product"]),
    ...mapGetters("cart", ["cartItems"]),
  },
  created() {
    this.fetchProduct(this.productId);
    this.getQtyInputValue(this.productId);
    // this.isProductAdded(this.productId);
  },
  // mounted: {
  //   isStock() {
  //     if (this.product.quantity === 0) {
  //       return true
  //     }
  //     return false
  //   }
  // },
};
</script>

<style scoped>
.disabled {
  cursor: not-allowed;
}
.product__rating {
  color: red;
}
.review__link {
  color: blue;
}
.social__links {
  list-style: none;
  text-transform: uppercase;
  margin-bottom: 10px;
  display: flex;
  margin-top: 10px;
  font-weight: 700;
}
.stock__number {
  text-transform: uppercase;
  color: red;
  font-size: 16px;
  margin-left: 20px;
  font-weight: 600;
}
ul > li {
  margin-right: 25px;
  font-weight: lighter;
  cursor: pointer;
}
li.active {
  border-bottom: 3px solid silver;
}

.item-photo {
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #f6f6f6;
}
.menu-items {
  list-style-type: none;
  font-size: 11px;
  display: inline-flex;
  margin-bottom: 0;
  margin-top: 20px;
}
.btn-success {
  width: 100%;
  border-radius: 0;
}
.section {
  width: 100%;
  margin-left: -15px;
  padding: 2px;
  padding-left: 15px;
  padding-right: 15px;
  background: #f8f9f9;
}
.title-price {
  margin-top: 30px;
  margin-bottom: 0;
  color: black;
}
.title-attr {
  margin-top: 0;
  margin-bottom: 0;
  color: black;
}
.btn-minus {
  cursor: pointer;
  font-size: 7px;
  display: flex;
  align-items: center;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid gray;
  border-radius: 2px;
  border-right: 0;
}
.btn-plus {
  cursor: pointer;
  font-size: 7px;
  display: flex;
  align-items: center;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid gray;
  border-radius: 2px;
  border-left: 0;
}
div.section > div {
  width: 100%;
  display: inline-flex;
}
div.section > div > input {
  margin: 0;
  padding-left: 5px;
  font-size: 10px;
  padding-right: 5px;
  max-width: 18%;
  text-align: center;
}
.attr,
.attr2 {
  cursor: pointer;
  margin-right: 5px;
  height: 20px;
  font-size: 10px;
  padding: 2px;
  border: 1px solid gray;
  border-radius: 2px;
}
.attr.active,
.attr2.active {
  border: 1px solid orange;
}

@media (max-width: 426px) {
  .container {
    margin-top: 0px !important;
  }
  .container > .row {
    padding: 0 !important;
  }
  .container > .row > .col-xs-12.col-sm-5 {
    padding-right: 0;
  }
  .container > .row > .col-xs-12.col-sm-9 > div > p {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .container > .row > .col-xs-12.col-sm-9 > div > ul {
    padding-left: 10px !important;
  }
  .section {
    width: 104%;
  }
  .menu-items {
    padding-left: 0;
  }
}
</style>
