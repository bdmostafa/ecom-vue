<template>
    <div class="container my-5">
  <!-- When the cart is empty-->
  <div class="text-center my-5" v-if="true">
    <h4>Cart Is Empty</h4>
    <button class="btn btn__goToShop btn-lg mt-3">
      <router-link style="color: #fff" to="/shop"> GO TO SHOP </router-link>
    </button>
  </div>

  <!--When the cart has some items -->
  <div v-if="true">
    <div class="row">
      <div class="col-md-12">
        <table class="table">
          <thead class="table-dark">
            <tr class="text-center">
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Qty * Price</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="cart in cartItems" :key="cart">
              <td class="d-flex align-items-center justify-content-around">
                <img
                  :src="cart.product.image"
                  :alt="cart.product.title"
                  height="60"
                  class="order-1"
                />
              </td>

              <td>
                <p
                  class="d-flex align-items-center justify-content-center mt-4"
                >
                  {{ cart.product.title }}
                </p>
              </td>

              <td>
                <p
                  class="d-flex align-items-center justify-content-center mt-4"
                >
                  ${{ cart.product.price }}
                </p>
              </td>

              <td>
                <form>
                  <div
                    class="qty-btn"
                    id="decrease"
                    @click="changeQty(idx, false)"
                  >
                    <i class="fa fa-minus mt-2"></i>
                  </div>
                  <input
                    type="number"
                    id="qty-number"
                    :value="cart.product.qtyOrdered"
                    readonly
                    :max="cart.product.quantity"
                  />
                  <div
                    class="qty-btn"
                    id="increase"
                    @click="changeQty(idx, true)"
                  >
                    <i class="fa fa-plus mt-2"></i>
                  </div>
                </form>
              </td>

              <td>
                <p
                  class="d-flex align-items-center justify-content-center mt-4"
                >
                  {{ cart.product.qtyOrdered }} *
                  ${{ cart.product.price }}
                </p>
              </td>

              <td>
                <p
                  class="d-flex align-items-center justify-content-center mt-4"
                >
                  ${{ cart.product.qtyOrdered * cart.product.price }}
                </p>
              </td>

              <td>
                <span
                  class="text-danger d-flex justify-content-center mt-4"
                  style="cursor: pointer"
                  ><i
                    class="fa fa-trash"
                    (click)="cartService.deleteProductFromCart(idx)"
                  ></i
                ></span>
              </td>
            </tr>

            <tr class="border-0">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><h5>TOTAL</h5></td>
              <td>
                <h5>${{ cartTotal }}</h5>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="col-md-12 d-flex mb-5">
        <div class="d-flex justify-content-end w-100">
          <!-- TODO SHIPPING INFO PROCESS -->
          <a href="/" class="btn btn-success btn-sm"
            ><i class="fa fa-arrow-circle-left"></i>Continue Shopping</a
          >
          <routerLink to="/checkout" class="btn btn-danger btn-sm ml-2"
            >Checkout <i class="fa fa-arrow-circle-right"></i
          ></routerLink>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'Cart',
    methods: {
    ...mapActions("cart", ["addToCart"]),
  },
  computed: mapGetters("cart", ["cartItems", "totalPrice", "cartTotal"]),
}
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
