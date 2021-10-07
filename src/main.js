import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';
import Footer from './components/shared/Footer.vue'
import ProductCard from './components/products/ProductCard.vue'
import store from './store/index.js'

const app = createApp(App);

app.use(router)
app.use(store)

// Global Component
app.component('Footer', Footer)
app.component('ProductCard', ProductCard)

app.mount('#app')
