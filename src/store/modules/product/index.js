import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      products: [],
      categories: [],
      filteredProducts: null,
    };
  },
  mutations: {
    FETCH_PRODUCTS: (state, payload) => (state.products = payload.products),
    ALL_CATEGORIES: (state, payload) => (state.categories = payload),
    GET_FILTERED_PRODUCTS: (state, payload) =>
      (state.filteredProducts = payload),
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await axios.get("https://ecombs.herokuapp.com/products");

      commit("FETCH_PRODUCTS", response.data);
      // console.log("====", response.data)
    },
    async getCategories({ commit }) {
      const response = await axios.get("https://ecombs.herokuapp.com/products");

      let categoriesArray = response.data.products.map(
        (product) => product.category
      );
      let uniqueCategories = categoriesArray.filter(
        (elem, index, self) => index === self.indexOf(elem)
      );

      commit("ALL_CATEGORIES", uniqueCategories);
    },
    async getFilteredProducts({ commit }, payload) {
      const response = await axios.get(
        `https://ecombs.herokuapp.com/products/category/${payload}`
      );

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
  },
};
