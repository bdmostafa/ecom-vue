<template>
  <div v-if="isAuthenticated">
    <div class="text-center my-5" v-if="!cartItems.length">
      <h4>Cart Is Empty</h4>
      <button class="btn btn__goToShop btn-lg mt-3">
        <router-link style="color: #fff" to="/shop">
          GO TO SHOP
        </router-link>
      </button>
    </div>
    <!-- <div class="section" v-show="cartItems.length > 0"> -->
    <div class="section">
      <div class="container" v-if="cartItems.length">
        <div class="row">
          <div class="col-md-5">
            <!-- Billing Details -->
            <div class="section__title">
              <h3 class="title">Billing address</h3>
            </div>
            <div class="form-group">
              <input
                class="checkout__input"
                type="text"
                name="full-name"
                placeholder="Full Name"
              />
            </div>
            <div class="form-group">
              <input
                class="checkout__input"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div class="form-group">
              <input
                class="checkout__input"
                type="text"
                name="address"
                placeholder="Full Address"
              />
            </div>
            <div class="form-group">
              <input
                class="checkout__input"
                type="tel"
                name="tel"
                placeholder="Telephone"
              />
            </div>

            <!-- /Billing Details -->

            <!-- Shipping Details -->
            <div class="section__title">
              <h3 class="title">Shipping address</h3>
            </div>
            <div>
              <input
                class="mr-2"
                type="checkbox"
                id="shiping-address"
                @click="isShipToDifferentAddress = !isShipToDifferentAddress"
              />
              <label for="shiping-address">
                <span> Ship to a different address? </span>
              </label>
              <div v-if="isShipToDifferentAddress">
                <div class="caption">
                  <div class="form-group">
                    <input
                      class="checkout__input"
                      type="text"
                      name="full-name"
                      placeholder="Full Name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      class="checkout__input"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      class="checkout__input"
                      type="text"
                      name="address"
                      placeholder="Full Address"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      class="checkout__input"
                      type="tel"
                      name="tel"
                      placeholder="Telephone"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- /Shipping Details -->

            <!-- Order notes -->
            <div class="order-notes">
              <div class="section__title">
                <h3 class="title mb-3">Other Notes (Optional)</h3>
                <textarea
                  class="checkout__input__textarea"
                  placeholder="Please write your necessary notes here..."
                ></textarea>
              </div>
            </div>
            <!-- /Order notes -->
          </div>

          <!-- Order Details -->
          <div class="col-md-7 order__details">
            <div class="section-title text-center">
              <h3 class="title">Your Order</h3>
            </div>
            <div class="order__summary">
              <table class="table">
                <thead class="table-info">
                  <tr class="text-left">
                    <th>Product</th>
                    <th>Qty * Price</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="cart in cartItems" :key="cart._id">
                    <td class="border-0">
                      <p class="mt-0">
                        {{ cart.title }}
                      </p>
                    </td>
                    <td class="border-0">
                      <p class="mt-0">
                        {{ cart.qtyOrdered }} *
                        {{ cart.price.toFixed(2) }}
                      </p>
                    </td>
                    <td class="border-0">
                      <p class="mt-0">
                        {{ (cart.qtyOrdered * cart.price).toFixed(2) }}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Shipping</td>
                    <td></td>
                    <td><strong>FREE</strong></td>
                  </tr>
                  <tr>
                    <td>
                      <strong class="mt-0"> TOTAL </strong>
                    </td>
                    <td></td>
                    <td class="order-col">
                      <strong class="mt-0 order-total" style="font-size: 18px">
                        {{ totalPrice.toFixed(2) }}
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <input class="mr-2" type="checkbox" id="terms" />
              <label for="terms">
                <span></span>
                I've read and accept the <a href="/">terms & conditions</a>
              </label>
              <div class="caption">
                <p>
                  I follow this terms & conditions under the rules and
                  regulations of the company. I have no complain in this regard.
                </p>
              </div>
            </div>
            <button
              class="btn btn-outline-success btn-lg mt-2 btn-block mb-4"
              @click="processCheckout"
            >
              Place order
            </button>
          </div>
          <!-- /Order Details -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Checkout",
  data() {
    return {
      isShipToDifferentAddress: false,
    };
  },
  methods: {
    ...mapActions("order", ["checkoutFromCart"]),
    processCheckout() {
        const cartInfo = [];
         this.cartItems.map((cart) => {
            const product = cart._id;
            const quantity = cart.qtyOrdered;
            cartInfo.push({
              product,
              quantity,
            });
          });
      this.checkoutFromCart({
        cartInfo,
        token: this.loggedInUser.token,
      });
    },
  },
  computed: {
    ...mapGetters("login", ["isAuthenticated", "loggedInUser"]),
    ...mapGetters("cart", ["cartItems", "totalPrice"]),
  },
  created() {
    // console.log(this.cartItems, this.totalPrice, this.isAuthenticated);
  },
};
</script>

<style scoped>
.section__title {
  text-align: left;
  margin: 20px 0 20px 0;
}
.btn__goToShop {
  display: inline-block;
  font-size: 14px;
  padding: 10px 28px 10px;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 700;
  background: #7fad39;
  letter-spacing: 2px;
}
.checkout__input {
  height: 40px;
  padding: 0px 15px;
  border: 1px solid #b3b8c2;
  background-color: #fff;
  width: 100%;
}
.form-group {
  margin-bottom: -1rem;
}
.checkout__input__textarea {
  height: 75px;
  padding: 0px 15px;
  border: 1px solid #b3b8c2;
  background-color: #fff;
  width: 100%;
}
</style>
