import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false,
      loggedInUser: {},
    };
  },
  mutations: {
    LOGIN(state, payload) {
      state.isLoggedIn = true;
      state.loggedInUser = payload;
    },
    LOGOUT(state) {
      state.isLoggedIn = false;
      state.loggedInUser = {};
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
  },
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn;
    },
    loggedInUser(state) {
      return state.loggedInUser;
    },
  },
};
