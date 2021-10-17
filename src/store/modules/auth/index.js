export default {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false,
      loggedInUser: JSON.parse(localStorage.getItem("userData")) || {},
    };
  },
  mutations: {},
  actions: {},
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
};
