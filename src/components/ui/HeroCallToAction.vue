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
          <div class="hero__item set-bg">
            <div class="hero__text">
              <span>Winter Design</span>
              <h2>Winter Collection<br />100% Unique</h2>
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

<style scoped>
.hero__text h2 {
  font-size: 50px;
  color: ghostwhite;
  line-height: 50px;
  font-weight: 700;
  margin: 10px 0px;
}
.hero__categories__all:after {
  position: absolute;
  right: 18px;
  top: 9px;
  content: "";
  font-family: "ElegantIcons";
  font-size: 18px;
  color: #ffffff;
}
.hero__text span {
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 10px;
  color: black;
}
.hero__item {
  height: 431px;
  display: flex;
  align-items: center;
  padding-left: 75px;
  background-image: url(https://cdn.pixabay.com/photo/2015/08/17/18/27/shopping-892811_1280.jpg);
}
.hero__text p {
  margin-bottom: 35px;
  color: ghostwhite;
  font-size: 22px;
  margin-top: 20px;
}
</style>
