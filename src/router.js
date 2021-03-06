import { createRouter, createWebHistory } from "vue-router";
import store from "./store/index.js"; // <-- aliased path

import Home from "./pages/Home.vue";
import Cart from "./pages/Cart.vue";
import Shop from "./pages/Shop.vue";
import Checkout from "./pages/Checkout.vue";
import Blog from "./pages/Blog.vue";
import Contact from "./pages/Contact.vue";
import Login from "./pages/Login.vue";
import Category from "./pages/Category.vue";
import ProductDetails from "./components/products/ProductDetails.vue";
import AboutUs from "./pages/AboutUs.vue";
import PrivacyPolicy from "./pages/PrivacyPolicy.vue";
import NotFound from "./pages/NotFound.vue";
import UserDashboard from "./pages/UserDashboard.vue";

// const isLoggedIn = store.getters["login/isAuthenticated"];

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", name: "home", component: Home },
    { path: "/cart", name: "cart", component: Cart },
    { path: "/shop", name: "shop", component: Shop },
    { path: "/login", name: "login", component: Login },
    { path: "/about-us", component: AboutUs },
    { path: "/privacy-policy", component: PrivacyPolicy },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout,
      beforeEnter: (to, _, next) => {
        if (store.getters["login/isAuthenticated"]) {
          next();
        } else {
          // console.log("---------",isLoggedIn, store.getters["login/isAuthenticated"])
          next({
            name: "login",
            query: {
              from: to.name,
            },
          });
        }
      },
    },
    {
      path: "/user-dashboard",
      name: "user",
      component: UserDashboard,
      beforeEnter: (to, _, next) => {
        if (store.getters["login/isAuthenticated"]) {
          next();
        } else {
          next({
            name: "login",
            query: {
              from: to.name,
            },
          });
        }
      },
    },
    { path: "/blog", component: Blog },
    { path: "/contact", component: Contact },
    { path: "/category/:category", component: Category },
    { path: "/products/:productId", component: ProductDetails },
    { path: "/:notFound(.*)*", component: NotFound },
  ],
});

export default router;
