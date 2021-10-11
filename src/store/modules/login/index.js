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
      await axios
        .post(`https://ecombs.herokuapp.com/users/login`, { ...payload })
        .then((response) => {
          const userData = response.data;
          commit("LOGIN", userData);
        })
        .catch((error) => {
          alert(error.response.data);
        });
    },
    async logout({ commit }, payload) {
      // console.log(payload)
      const response = await axios.post(
        `https://ecombs.herokuapp.com/users/logout`,
        {},
        {
          headers: {
            Authorization: "Bearer " + payload,
          },
        }
      );

      const userData = response.data;
      commit("LOGOUT", userData);
    },
    async createAccount({ commit }, payload) {
      await axios
        .post(`https://ecombs.herokuapp.com/users/create`, {
          ...payload,
          role: "user",
        })
        .then((response) => {
          const userData = response.data;
          commit("CREATE_ACCOUNT", userData);
        })
        .catch((error) => {
          alert(error.response.data);
        });
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
