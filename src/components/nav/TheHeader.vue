<template>
  <mobile-nav />

  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="header__top__left">
              <ul>
                <li><i class="fa fa-envelope"></i> test@test.com</li>
                <li>Free Shipping for all Order of $99</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="header__top__right">
              <div class="header__top__right__social">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-pinterest-p"></i></a>
              </div>
              <div class="header__top__right__language">
                <img src="assets/img/language.png" alt="" />
                <div>English</div>
                <span class="arrow_carrot-down"></span>
                <ul>
                  <li><a href="#">Bangla</a></li>
                  <li><a href="#">English</a></li>
                </ul>
              </div>
              <div class="header__top__right__auth">
                <router-link to="/login"
                  ><i class="fa fa-user"></i> Login</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="header__logo">
            <router-link to="/" class="logo">Ecom Vue</router-link>
          </div>
        </div>
        <div class="col-lg-6">
          <nav class="header__menu">
            <ul>
              <li class="active"><router-link to="/">Home</router-link></li>
              <li><router-link to="/shop">Shop</router-link></li>
              <li>
                <a href="#">Pages</a>
                <ul class="header__menu__dropdown">
                  <li><router-link to="#">About Us</router-link></li>
                  <li><router-link to="/cart">Shoping Cart</router-link></li>
                  <li><router-link to="/checkout">Check Out</router-link></li>
                  <li><router-link to="#">Privacy Policy</router-link></li>
                  <li><router-link to="#">Terms & Conditions</router-link></li>
                  <li><router-link to="#">FAQ</router-link></li>
                </ul>
              </li>
              <li><router-link to="/blog">Blog</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </nav>
        </div>
        <div class="col-lg-3">
          <div class="header__cart">
            <ul>
              <li>
                <a href="#"><i class="fa fa-heart"></i> <span>1</span></a>
              </li>
              <li>
                <router-link to="/cart">
                  <i class="fa fa-shopping-bag"></i>
                  <span> {{ cartItems.length }} </span>
                </router-link>
              </li>
            </ul>
            <div class="header__cart__price">
              item: <span>${{ totalPrice.toFixed(2) }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="humberger__open">
        <i class="fa fa-bars"></i>
      </div>
    </div>
  </header>
</template>

<script>
import MobileNav from "./MobileNav.vue";
import { mapGetters } from "vuex";

export default {
  name: "TheHeader",
  components: {
    MobileNav,
  },
  computed: mapGetters("cart", ["totalPrice", "cartItems"]),
};
</script>

<style scoped></style>
