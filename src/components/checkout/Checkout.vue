<template>
  <div>
    <div class="section" v-If="cartItems.length">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <!-- Billing Details -->
            <div class="billing-details">
              <div class="section-title">
                <h3 class="title">Billing address</h3>
              </div>
              <div class="form-group">
                <input
                  class="input"
                  type="text"
                  name="full-name"
                  placeholder="Full Name"
                />
              </div>
              <div class="form-group">
                <input
                  class="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <input
                  class="input"
                  type="text"
                  name="address"
                  placeholder="Full Address"
                />
              </div>
              <div class="form-group">
                <input
                  class="input"
                  type="tel"
                  name="tel"
                  placeholder="Telephone"
                />
              </div>
              <div class="form-group">
                <div class="input-checkbox">
                  <input type="checkbox" id="create-account" />
                  <label for="create-account">
                    <span></span>
                    Create Account?
                  </label>
                  <div class="caption">
                    <p>To create an account, just enter a password.</p>
                    <input
                      class="input"
                      type="password"
                      name="password"
                      placeholder="Enter Your Password"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- /Billing Details -->

            <!-- Shipping Details -->
            <div class="shiping-details">
              <div class="section-title">
                <h3 class="title">Shipping address</h3>
              </div>
              <div class="input-checkbox">
                <input type="checkbox" id="shiping-address" />
                <label for="shiping-address">
                  <span></span>
                  Ship to a different address?
                </label>
                <div class="caption">
                  <div class="form-group">
                    <input
                      class="input"
                      type="text"
                      name="full-name"
                      placeholder="Full Name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      class="input"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      class="input"
                      type="text"
                      name="address"
                      placeholder="Full Address"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      class="input"
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
              <div class="section-title">
                <h3 class="title mb-3">Other Notes</h3>
                <textarea
                  class="input"
                  placeholder="Please write your necessary notes here..."
                ></textarea>
              </div>
            </div>
            <!-- /Order notes -->
          </div>

          <!-- Order Details -->
          <div class="col-md-6 order__details">
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

            <div class="payment__method">
              <div class="input-radio">
                <input type="radio" name="payment" id="payment-1" />
                <label for="payment-1">
                  <span></span>
                  Direct Bank Transfer
                </label>
                <div class="caption">
                  <p>
                    Direct Bank Transfer, or Bank Account Clearing System
                    (BACS), is a gateway that require no payment be made online
                  </p>
                </div>
              </div>
              <div class="input-radio">
                <input type="radio" name="payment" id="payment-2" />
                <label for="payment-2">
                  <span></span>
                  Cheque Payment
                </label>
                <div class="caption">
                  <p>
                    A Cheque is a document that orders a bank to pay a specific
                    amount of money from a person's account to the person in
                    whose name the cheque has been issued.
                  </p>
                </div>
              </div>
              <div class="input-radio">
                <input type="radio" name="payment" id="payment-3" />
                <label for="payment-3">
                  <span></span>
                  Paypal System
                </label>
                <div class="caption">
                  <p>
                    The PayPal is a tool that allows developers to test
                    applications and explore the PayPal API in an environment
                    that is isolated from PayPal's live site.
                  </p>
                </div>
              </div>
            </div>

            <div class="input__checkbox">
              <input type="checkbox" id="terms" />
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
              class="btn btn-outline-danger btn-lg mt-2 btn-block"
              @click="processCheckout"
            >
              Place order
            </button>
          </div>
          <!-- /Order Details -->
        </div>
      </div>
    </div>

    <div class="text-center my-5" v-if="!cartItems.length">
      <h4>Cart Is Empty</h4>
      <button class="btn btn__goToShop btn-lg mt-3">
        <router-link style="color: #fff" to="/shop"> GO TO SHOP </router-link>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Checkout",
  methods: {
    processCheckout() {
      console.log("ok checkout");
    },
  },
  computed: {
    ...mapGetters("login", ["isAuthenticated"]),
    ...mapGetters("cart", ["cartItems", "totalPrice"]),
  },
  created() {
    console.log(this.cartItems, this.totalPrice);
  },
};
</script>

<style scoped>
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
</style>
