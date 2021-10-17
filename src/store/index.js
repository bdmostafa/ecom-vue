import { createStore } from "vuex";

import productsModule from "./modules/product/index.js";
import cartModule from "./modules/cart/index.js";
import loginModule from "./modules/login/index.js";
import orderModule from './modules/order/index';
import authModule from "./modules/auth/index.js";

const store = createStore({
  modules: {
    products: productsModule,
    cart: cartModule,
    login: loginModule,
    order: orderModule,
    auth: authModule,
  },
});

export default store;
