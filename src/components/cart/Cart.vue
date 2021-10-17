<template>
  <div class="container my-5">
    <!-- When the cart is empty-->
    <div class="text-center my-5" v-if="!cartItems.length">
      <h4>Cart Is Empty</h4>
      <button class="btn btn__goToShop btn-lg mt-3">
        <router-link style="color: #fff" to="/shop"> GO TO SHOP </router-link>
      </button>
    </div>

    <!--When the cart has some items -->
    <div v-else>
      <div class="row">
        <div class="col-md-12">
          <table class="table">
            <thead class="table-dark">
              <tr class="text-center">
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th style="width: 7rem;">Qty * Price</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="cart in cartItems" :key="cart._id">
                <td class="d-flex align-items-center justify-content-around">
                  <img
                    :src="cart.image"
                    :alt="cart.title"
                    height="60"
                    class="order-1"
                  />
                </td>

                <td>
                  <p
                    class="d-flex align-items-center justify-content-center mt-4"
                  >
                    {{ cart.title }}
                  </p>
                </td>

                <td>
                  <p
                    class="d-flex align-items-center justify-content-center mt-4"
                  >
                    ${{ cart.price }}
                  </p>
                </td>

                <td>
                  <form>
                    <div
                      class="quantity__btn"
                      id="decrease"
                      @click="changeQty(cart._id, false)"
                    >
                      <i class="fa fa-minus"></i>
                    </div>
                    <input
                      type="number"
                      class="quantity__input"
                      :value="cart.qtyOrdered"
                      readonly
                      :max="cart.quantity"
                    />
                    <div
                      class="quantity__btn"
                      id="increase"
                      @click="changeQty(cart._id, true)"
                    >
                      <i class="fa fa-plus"></i>
                    </div>
                  </form>
                </td>

                <td>
                  <p
                    class="d-flex align-items-center justify-content-center mt-4"
                  >
                    {{ cart.qtyOrdered }} * ${{ cart.price }}
                  </p>
                </td>

                <td>
                  <p
                    class="d-flex align-items-center justify-content-center mt-4"
                  >
                    ${{ (cart.qtyOrdered * cart.price).toFixed(2) }}
                  </p>
                </td>

                <td>
                  <span
                    class="text-danger d-flex justify-content-center mt-4"
                    style="cursor: pointer"
                    ><i
                      class="fa fa-trash"
                      @click="removeFromCart(cart._id)"
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
                  <h5>${{ totalPrice.toFixed(2) }}</h5>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="col-md-12 d-flex mb-5">
          <div class="d-flex justify-content-end w-100">
            <!-- TODO SHIPPING INFO PROCESS -->
            <routerLink to="/checkout" class="btn btn-success btn-sm"
              ><i class="fa fa-arrow-circle-left"></i>Continue
              Shopping</routerLink
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
  name: "Cart",
  methods: {
    ...mapActions("cart", ["addToCart", "updateCart", "removeFromCart"]),
    changeQty(id, isIncrease) {
      this.updateCart({ id, isIncrease });
    },
  },
  computed: mapGetters("cart", ["cartItems", "totalPrice", "cartQty"]),
};
</script>

<style scoped>
form {
  margin: 0 auto;
  width: 130px;
}
form #decrease {
  margin-right: -4px;
  border-radius: 8px 0 0 8px;
  background: rgba(255, 0, 0, 0.973);
  color: hsla(0, 0%, 100%, 0.973);
}
form #increase {
  margin-left: -4px;
  border-radius: 0 8px 8px 0;
  background: rgba(0, 128, 0, 0.973);
  color: hsla(0, 0%, 100%, 0.973);
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
  cursor: pointer;
}
.quantity__input {
  text-align: end;
  border: 0.25px solid #e7e7e7;
  border-right: none;
  border-left: none;
  margin: 0;
  width: 40px;
  height: 40px;
}
.quantity__btn {
  display: inline-block;
  border: 1px solid hsla(0, 0%, 87%, 0.986);
  margin: 0;
  width: 40px;
  height: 40px;
  padding: 10px 0 12px;
  background: hsla(0, 0%, 93%, 0.986);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  vertical-align: top;
}
.table td,
.table th {
  padding: 0.75rem;
  vertical-align: middle;
  border-top: 1px solid #dee2e6;
  text-align: center;
}
.table .fa {
  margin-top: -15px;
}
</style>
