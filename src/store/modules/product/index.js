import axios from "axios";
import { api } from "../../../api/http.js";

export default {
  namespaced: true,
  state() {
    return {
      products: [],
      categories: [],
      filteredProducts: null,
      product: {},
    };
  },
  mutations: {
    FETCH_PRODUCTS: (state, payload) => (state.products = payload.products),
    ALL_CATEGORIES: (state, payload) => (state.categories = payload),
    GET_FILTERED_PRODUCTS: (state, payload) =>
      (state.filteredProducts = payload),
    FETCH_PRODUCT: (state, payload) => (state.product = payload),
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await axios.get(`${api}/products`);

      commit("FETCH_PRODUCTS", response.data);
      // console.log("====", response.data)
    },
    async fetchProduct({ commit, dispatch }, productId) {
      const response = await axios.get(`${api}/products/${productId}`);

      dispatch("products/getFilteredProducts", response.data.product.category, {
        root: true,
      });
      commit("FETCH_PRODUCT", response.data.product);
    },
    async getCategories({ commit }) {
      const response = await axios.get(`${api}/products`);

      let categoriesArray = response.data.products.map(
        (product) => product.category
      );
      let uniqueCategories = categoriesArray.filter(
        (elem, index, self) => index === self.indexOf(elem)
      );

      commit("ALL_CATEGORIES", uniqueCategories);
    },
    async getFilteredProducts({ commit }, payload) {
      const response = await axios.get(`${api}/products/category/${payload}`);

      //   let filteredProducts = response.data.products.filter(
      //     (product) => product.category === payload
      //   );

      const filteredProducts = response.data.products;

      commit("GET_FILTERED_PRODUCTS", filteredProducts);
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
    categories(state) {
      return state.categories;
    },
    filteredProducts(state) {
      return state.filteredProducts;
    },
    product(state) {
      return state.product;
    },
  },
};
