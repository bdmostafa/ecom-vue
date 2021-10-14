<template>
  <div class="container">
    <h2 class="text-center mb-3">
      Hi,
      <span class="font-weight-bold"> {{ loggedInUser.user.name }}! </span>
      Welcome to your dashboard
    </h2>
    <div class="col-md-12">
      <!-- When Orders are available -->
      <table v-if="myOrders.length > 0 && showMyOrders" class="table">
        <thead class="table-dark">
          <tr class="text-center">
            <th>#Order Qty</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>

        <tbody>
          <template v-for="(order, idx) in myOrders" :key="order._id">
            <tr>
              <td>{{ idx + 1 }}</td>
            </tr>

            <tr v-for="prod of order.productOrdered" :key="prod.product._id">
              <td></td>
              <td class="d-flex align-items-center justify-content-around">
                <img
                  :src="prod.product.image"
                  :alt="prod.product.title"
                  height="60"
                />
              </td>

              <td>
                <p
                  class="
                      d-flex
                      align-items-center
                      justify-content-center
                      mt-4
                    "
                >
                  {{ prod.product.title }}
                </p>
              </td>

              <td>
                <p
                  class="
                      d-flex
                      align-items-center
                      justify-content-center
                      mt-4
                    "
                >
                  ${{ prod.product.price }}
                </p>
              </td>

              <td>
                <p
                  class="
                      d-flex
                      align-items-center
                      justify-content-center
                      mt-4
                    "
                >
                  {{ prod.quantity }}
                </p>
              </td>
              <td>
                <p
                  class="
                      d-flex
                      align-items-center
                      justify-content-center
                      mt-4
                    "
                >
                  ${{ (prod.quantity * prod.product.price).toFixed(2) }}
                </p>
              </td>
            </tr>
          </template>
        </tbody>
        <tr class="border-0">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td><h5 style="font-weight: bold;">TOTAL</h5></td>
          <td>
            <h5 style="padding-left: 25px; font-weight: bold;">
              {{ calculateTotal.toFixed(2) }}
            </h5>
          </td>
        </tr>
      </table>

      <!-- When Orders are empty -->
      <div class="text-center my-5" v-if="!myOrders.length && showMyOrders">
        <h4>Cart Is Empty</h4>
        <button class="btn btn__goToShop btn-lg mt-3">
          <router-link style="color: #fff" to="/shop">
            GO TO SHOP
          </router-link>
        </button>
      </div>

      <div @click="fetchOrders" class="text-center my-5" v-if="!showMyOrders">
        <button class="btn btn__goToShop btn-lg mt-3">
          Show My Orders
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "UserDashboard",
  data() {
    return {
      showMyOrders: false,
    };
  },
  methods: {
    ...mapActions("order", ["getMyOrders"]),
    fetchOrders() {
      this.getMyOrders({ token: this.loggedInUser.token });
      this.showMyOrders = true;
    },
  },
  computed: {
    ...mapGetters("order", ["myOrders"]),
    ...mapGetters("login", ["loggedInUser"]),
    
    // Calculate total price of loggedInUser orders
    calculateTotal: function() {
      let total = 0;
      if (this.myOrders.length > 0) {
        this.myOrders.forEach((orders) => {
          orders.productOrdered.forEach((item) => {
            const subTotal = item?.product?.price * item?.quantity;
            total = Number(total + subTotal);
            // console.log(total);
          });
        });
        return total;
      } else return total;
    },
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
