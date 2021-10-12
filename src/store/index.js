import { createStore } from "vuex";

import productsModule from "./modules/product/index.js";
import cartModule from "./modules/cart/index.js";
import loginModule from "./modules/login/index.js";
import orderModule from './modules/order/index';

const store = createStore({
  modules: {
    products: productsModule,
    cart: cartModule,
    login: loginModule,
    order: orderModule
  },
});

export default store;
