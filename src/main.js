import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import Footer from "./components/shared/Footer.vue";
import ProductCard from "./components/products/ProductCard.vue";
import ShopProducts from "./components/products/ShopProducts.vue";
import store from "./store/index.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "toastr/build/toastr.min.css";
import "toastr/build/toastr.min.css";
import { Circle8 } from "vue-loading-spinner";
import "./assets/css/font-awesome.min.css";
// import VueScrollFixedNavbar from "vue-scroll-fixed-navbar";

const app = createApp(App);

app.use(router);
app.use(store);
// app.use(VueScrollFixedNavbar);

// Global Component
app.component("Footer", Footer);
app.component("ProductCard", ProductCard);
app.component("ShopProducts", ShopProducts);
app.component("Circle8", Circle8);

app.mount("#app");
