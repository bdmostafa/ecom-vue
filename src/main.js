import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import Footer from "./components/shared/Footer.vue";
import ProductCard from "./components/products/ProductCard.vue";
import ShopProducts from "./components/products/ShopProducts.vue";
import store from "./store/index.js";
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'jquery/src/jquery.js'
// import 'bootstrap/dist/js/bootstrap.min.js'

const app = createApp(App);

app.use(router);
app.use(store);

// Global Component
app.component("Footer", Footer);
app.component("ProductCard", ProductCard);
app.component("ShopProducts", ShopProducts);

app.mount("#app");
