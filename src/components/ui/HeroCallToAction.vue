<template>
  <section class="hero">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="hero__categories">
            <div class="hero__categories__all">
              <i class="fa fa-bars"></i>
              <span>All departments</span>
            </div>
            <ul>
              <li v-for="category in categories" :key="category">
                <router-link :to="`/category/${category}`">
                  {{ category }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="hero__search">
            <div class="hero__search__form">
              <form action="#">
                <div class="hero__search__categories">
                  Search Products
                  <span class="arrow_carrot-down"></span>
                </div>
                <input type="text" placeholder="What do yo u need?" />
                <button type="submit" class="site-btn">SEARCH</button>
              </form>
            </div>
            <div class="hero__search__phone">
              <div class="hero__search__phone__icon">
                <i class="fa fa-phone"></i>
              </div>
              <div class="hero__search__phone__text">
                <h5>111-222-333</h5>
                <span>support 24/7 time</span>
              </div>
            </div>
          </div>
          <div
            class="hero__item set-bg"
            data-setbg="assets/img/hero/banner.jpg"
          >
            <div class="hero__text">
              <span>Unique Design</span>
              <h2>Vegetable <br />100% Organic</h2>
              <p>Free Pickup and Delivery Available</p>
              <router-link to="/shop" class="primary-btn">SHOP NOW</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HeroCallToAction",
  computed: mapGetters("products", ["categories"]),
};
</script>
