<template>
  <div class="humberger__menu__overlay"></div>
  <div class="humberger__menu__wrapper">
    <div class="humberger__menu__logo">
      <router-link to="/" class="logo">
        <img src="../../../public/assets/img/logo/logo.png" alt="" />
      </router-link>
    </div>
    <div class="humberger__menu__cart">
      <ul>
        <li>
          <a href="#"><i class="fa fa-heart"></i> <span>1</span></a>
        </li>
        <li>
          <router-link to="/cart"
            ><i class="fa fa-shopping-bag"></i>
            <span> {{ cartItems.length }} </span></router-link
          >
        </li>
      </ul>
      <div class="header__cart__price">
        item: <span>${{ totalPrice.toFixed(2) }}</span>
      </div>
    </div>
    <div class="humberger__menu__widget">
      <div class="header__top__right__language">
        <img src="../../../public/assets/img/language.png" alt="" />
        <div>English</div>
        <span class="arrow_carrot-down"></span>
        <ul>
          <li><a href="#">Bangla</a></li>
          <li><a href="#">English</a></li>
        </ul>
      </div>
      <div class="header__top__right__auth" v-if="!isAuthenticated">
        <router-link to="/login"><i class="fa fa-user"></i> Login</router-link>
      </div>
      <div v-if="isAuthenticated" class="header__top__right__auth">
        <h4>Hi, {{ loggedInUser.user.name }}!</h4>
        <h6>Logout</h6>
      </div>
    </div>
    <nav class="humberger__menu__nav mobile-menu">
      <ul>
        <li class="active"><router-link to="/">Home</router-link></li>
        <li><router-link to="/shop">Shop</router-link></li>
        <li>
          <a href="#">Pages</a>
          <ul class="header__menu__dropdown">
            <li><router-link to="/about-us">About Us</router-link></li>
            <li><router-link to="/cart">Shoping Cart</router-link></li>
            <li><router-link to="/checkout">Check Out</router-link></li>
            <li>
              <router-link to="/privacy-policy">Privacy Policy</router-link>
            </li>
            <li>
              <router-link to="/terms-and-conditions">
                Terms & Conditions
              </router-link>
            </li>
            <li><router-link to="/faq">FAQ</router-link></li>
          </ul>
        </li>
        <li><router-link to="/blog">Blog</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <div id="mobile-menu-wrap"></div>
    <div class="header__top__right__social">
      <a href="#"><i class="fa fa-facebook"></i></a>
      <a href="#"><i class="fa fa-twitter"></i></a>
      <a href="#"><i class="fa fa-linkedin"></i></a>
      <a href="#"><i class="fa fa-pinterest-p"></i></a>
    </div>
    <div class="humberger__menu__contact">
      <ul>
        <li><i class="fa fa-envelope"></i> test@test.com</li>
        <li>Free Shipping for all Order of $99</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MobileNav",
  computed: {
    ...mapGetters("cart", ["totalPrice", "cartItems"]),
    ...mapGetters("login", ["isAuthenticated", "loggedInUser"]),
  },
};
</script>
