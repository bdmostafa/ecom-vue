import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';
import Footer from './components/shared/Footer.vue'

const app = createApp(App);

app.use(router)

// Global Component
app.component('Footer', Footer)

app.mount('#app')
