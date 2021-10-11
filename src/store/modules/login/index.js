import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false,
      loggedInUser: {},
      success: "",
    };
  },
  mutations: {
    LOGIN(state, payload) {
      state.isLoggedIn = true;
      state.loggedInUser = payload;
      state.success = payload.success.message;
    },
    LOGOUT(state) {
      state.isLoggedIn = false;
      state.loggedInUser = {};
    },
    CREATE_ACCOUNT(state, payload) {
      state.isLoggedIn = false;
      state.success = payload.success.message;
    },
  },
  actions: {
    async login({ commit }, payload) {
      const response = await axios.post(
        `https://ecombs.herokuapp.com/users/login`,
        { ...payload }
      );

      const userData = response.data;
      commit("LOGIN", userData);
    },
    async logout({ commit }) {
      const response = await axios.post(
        `https://ecombs.herokuapp.com/users/logout`,
        {}
      );

      const userData = response.data;
      commit("LOGOUT", userData);
    },
    async createAccount({ commit }, payload) {
      console.log(payload);
      const response = await axios.post(
        `https://ecombs.herokuapp.com/users/create`,
        { ...payload, role: "user" }
      );

      const userData = response.data;
      commit("CREATE_ACCOUNT", userData);
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn;
    },
    loggedInUser(state) {
      return state.loggedInUser;
    },
    successMessage(state) {
      return state.success;
    },
  },
};
