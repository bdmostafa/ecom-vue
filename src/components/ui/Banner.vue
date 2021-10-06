<template>
  <div class="banner">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12 mb-3">
          <div class="banner__pic">
            <img src="assets/img/banner/banner1.jpg" alt="" />
            <div class="banner__text__section">
              <h2 class="banner__text">New Summer Collection upto 30% OFF</h2>
              <h6 class="banner__text__shop">
                <router-link to="/shop"> Shop Now </router-link>
              </h6>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="banner__pic">
            <img src="assets/img/banner/banner2.jpg" alt="" />
            <div class="banner__text__section">
              <h2 class="banner__text">Casual Collection upto 25% OFF</h2>
              <h6 class="banner__text__shop">
                <router-link to="/shop"> Shop Now </router-link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style scoped>
.banner__pic {
  position: relative;
}
.banner__text__section {
  position: absolute;
  top: 25%;
  text-align: center;
  width: 80%;
  left: 10%;
  font-weight: 700;
  display: inline-grid;
}
.banner__text {
  color: white;
}
.banner__text__shop {
  background: red;
  width: 100px;
  padding: 10px;
  text-align: center;
  font-weight: 700;
  color: white;
  margin: 0 auto;
}
.banner__text__shop a {
  color: white;
}
</style>
