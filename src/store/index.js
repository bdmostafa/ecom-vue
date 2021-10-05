import { createStore } from 'vuex';

import productsModule from './modules/product/index.js';

const store = createStore({
  modules: {
    products: productsModule,
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations: {
    LOGIN(state) {
      state.isLoggedIn = true;
    },
    LOGOUT(state) {
      state.isLoggedIn = false;
    }
  },
  actions: {
    login({ commit }) {
      commit('LOGIN');
    },
    logout({ commit }) {
      commit('LOGOUT');
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn;
    }
  }
});

export default store;
