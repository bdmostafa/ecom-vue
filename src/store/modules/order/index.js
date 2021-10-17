import axios from "axios";
import {
    successToaster,
    errorToaster,
  } from "../../../services/Handler.js";

export default {
  namespaced: true,
  state() {
    return {
      orders: [],
      success: "",
    };
  },
  mutations: {
    CREATE_ORDER(state, payload) {
      state.orders = payload.order;
      state.success = payload.success;
    },
    GET_MY_ORDERS(state, payload) {
        state.orders = payload.orders;
        state.success = payload.success;
      },
  },
  actions: {
    async checkoutFromCart({ commit }, payload) {
      const cartData = payload.cartInfo;
      const token = payload.token;
      await axios
        .post("https://ecombs.herokuapp.com/orders/payment", null)
        .then((response) => {
          const paymentInfo = response.data;
          // console.log(paymentInfo);
          if (paymentInfo) {
            successToaster("Payment Status", "Your payment is accepted successfully")
            axios
              .post("https://ecombs.herokuapp.com/orders/create", cartData, {
                headers: {
                  Authorization: "Bearer " + token,
                },
              })
              .then((response) => {
                const orderData = response.data;
                console.log(orderData);
                commit("CREATE_ORDER", orderData);
                successToaster("Order Status", "You have ordered successfully")
              })
              .catch((error) => {
                errorToaster("Order Status", error.response.data);
              });
          }
        })
        .catch((error) => {
            errorToaster("Order Status", error.response.data);
        });
    },
    async getMyOrders({ commit }, payload) {
        const token = payload.token;
        await axios
          .get("https://ecombs.herokuapp.com/orders/user/my-orders",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((response) => {
            const ordersData = response.data;
            // console.log(ordersData);
            commit("GET_MY_ORDERS", ordersData);
            successToaster("My Order", "Your order is loaded successfully");
            
          })
          .catch((error) => {
            errorToaster(error.response.statusText, error.response.data);
          });
      },
  },
  getters: {
    myOrders(state) {
      return state.orders;
    },
  },
};
