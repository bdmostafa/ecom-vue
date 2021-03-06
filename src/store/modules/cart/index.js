import {
  successToaster,
  infoToaster,
  errorToaster,
  warnToaster,
} from "../../../services/Handler.js";

const saveToLocalStorage = (state) => {
  localStorage.setItem(
    "cart",
    JSON.stringify({
      cartItems: state.cartItems,
      cartTotalInNumbers: state.cartTotalInNumbers,
      totalPrice: state.totalPrice,
    })
  );
};

export default {
  namespaced: true,
  state() {
    return {
      cartItems: [],
      cartTotalInNumbers: 0,
      totalPrice: 0,
      productIsAdded: false,
    };
  },
  mutations: {
    ADD_TO_CART(state, payload) {
      const productData = payload;
      const productInCartIndex = state.cartItems.findIndex(
        (item) => item._id === productData._id
      );

      if (productInCartIndex >= 0) {
        // When a product is in cart already, return here
        infoToaster("Add To Cart", `This product ${productData.title} has already been added.`);
        return;
      }
      // When a product is in cart newly
      else {
        // If product has no stock, return from here
        if (productData.quantity < 1) {
          warnToaster("No Stock", `Oops! ${productData.title} has no stock`);
          return;
        }

        const newItem = {
          _id: productData._id,
          image: productData.image,
          title: productData.title,
          price: productData.price,
          quantity: productData.quantity,
          qtyOrdered: 1,
        };
        state.cartItems.push(newItem);

        successToaster(
          "Add To Cart",
          `${productData.title} has been added successfully`
        );
      }

      state.cartTotalInNumbers++;
      state.totalPrice += productData.price;

      saveToLocalStorage(state);
    },
    UPDATE_CART(state, payload) {
      const product = payload.selectedProduct;
      const isIncrease = payload.isIncrease;

      const productInCartIndex = state.cartItems.findIndex(
        (item) => item._id === product._id
      );

      // When a product is in cart already, increase qtyOrdered
      if (productInCartIndex >= 0) {
        if (isIncrease) {
          // If product quantity is more than number in Cart
          // Increase by one, otherwise product quantity remains
          state.cartItems[productInCartIndex].qtyOrdered < product.quantity
            ? (state.cartItems[productInCartIndex].qtyOrdered++,
              (state.totalPrice += product.price))
            : product.quantity;

          saveToLocalStorage(state);
        } else {
          // Decrease by one upto one in cart
          state.cartItems[productInCartIndex].qtyOrdered > 1
            ? (state.cartItems[productInCartIndex].qtyOrdered--,
              (state.totalPrice -= product.price))
            : 1;
        }
        // console.log(state.cartItems);
        saveToLocalStorage(state);
      } else {
        errorToaster("Update Cart", "You must add to cart first");
      }
    },
    REMOVE_FROM_CART(state, payload) {
      const productId = payload;
      const productInCartIndex = state.cartItems.findIndex(
        (cartItem) => cartItem._id === productId
      );

      if (productInCartIndex >= 0) {
        const productData = state.cartItems[productInCartIndex];

        state.cartItems.splice(productInCartIndex, 1);

        state.cartTotalInNumbers--;
        state.totalPrice -= productData.price * productData.qtyOrdered;

        saveToLocalStorage(state);

        successToaster(
          "Remove From Cart",
          `${productData.title} has been removed successfully`
        );
      } else {
        errorToaster(
          "Remove From Cart",
          "Something went wrong. Please try again"
        );
        return;
      }
    },
    PRODUCT_IS_ADDED_TO_CART(state, payload) {
      const productId = payload;
      const productInCartIndex = state.cartItems.findIndex(
        (cartItem) => cartItem._id === productId
      );

      if (productInCartIndex >= 0) {
        this.productIsAdd = true;
      } else {
        this.productIsAdd = false;
      }
    },
  },
  actions: {
    addToCart({ commit, rootGetters }, payload) {
      // console.log(payload);
      const productId = payload;
      const products = rootGetters["products/products"];

      const selectedProduct = products.find(
        (product) => product._id === productId
      );
      commit("ADD_TO_CART", selectedProduct);
    },
    updateCart({ commit, rootGetters }, payload) {
      const products = rootGetters["products/products"];
      const productId = payload.id;
      const isIncrease = payload.isIncrease;

      const selectedProduct = products.find(
        (product) => product._id === productId
      );

      commit("UPDATE_CART", { selectedProduct, isIncrease });
    },
    removeFromCart({ commit }, payload) {
      commit("REMOVE_FROM_CART", payload);
    },
    productIsAddedToCart({ commit }, payload) {
      commit("PRODUCT_IS_ADDED_TO_CART", payload);
    },
  },
  getters: {
    cartItems(state) {
      return state.cartItems;
    },
    cartQty(state) {
      return state.cartTotalInNumbers;
    },
    totalPrice(state) {
      return state.totalPrice;
    },
    productIsAdded(state) {
      return state.productIsAdded;
    },
  },
};
