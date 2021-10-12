<template>
  <div class="about__content container">
    <div class="about__content__img">
      <img src="../../public/assets/img/banner/about-us.jpg" alt="" />
    </div>
    <div class="about__content__text">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nobis
        itaque blanditiis ratione quos repellat, maiores veritatis accusamus
        ullam tenetur deleniti corporis labore, qui, nesciunt id suscipit nulla!
        Sint fugit numquam iste molestiae corporis accusamus deserunt laborum
        eveniet itaque. Quod, ex amet? Mollitia nostrum eius labore earum
        doloribus reiciendis deserunt...
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>
.about__content__img img {
  width: 100%;
  height: 30rem;
}
.about__content__text {
  text-align: center;
  padding: 50px;
}
.about__content__text h2 {
  font-weight: 700;
  margin-bottom: 30px;
}
</style>
