import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue'
import Cart from './pages/Cart.vue'
import Shop from './pages/Shop.vue'
import Checkout from './pages/Checkout.vue'
import Blog from './pages/Blog.vue'
import Contact from './pages/Contact.vue'
import Login from './pages/Login.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/cart', component: Cart },
    { path: '/shop', component: Shop },
    { path: '/checkout', component: Checkout },
    { path: '/blog', component: Blog },
    { path: '/contact', component: Contact },
    { path: '/login', component: Login }
  ]
});

export default router;