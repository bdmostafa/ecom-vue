import axios from "axios";

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
      state.order = payload.order;
      state.success = payload.success;
    },
  },
  actions: {
    async checkoutFromCart({ commit }, payload) {
        const cartData = payload.cartInfo
        const token = payload.token;
      await axios
        .post("https://ecombs.herokuapp.com/orders/payment", null)
        .then((response) => {
          const paymentInfo = response.data;
// console.log(paymentInfo);
          if (paymentInfo) {
            axios
              .post("https://ecombs.herokuapp.com/orders/create", cartData,
              {
                headers: {
                  Authorization: "Bearer " + token,
                },
              }
              )
              .then((response) => {
                const orderData = response.data;
                console.log(orderData);
                commit("CREATE_ORDER", orderData);
                alert("You have ordered successfully")
              })
              .catch((error) => {
                alert(error.response.data);
              });
          }
        })
        .catch((error) => {
          alert(error.response.data);
        });
    },
  },
  getters: {
    myOrders(state) {
      return state.orders;
    },
  },
};
