<template>
  <section class="categories">
    <div class="container">
      <div class="row">
        <div class="categories__slider owl-carousel">
          <!-- <div class="col-lg-3" v-for="product in products.products" :key="product._id">
            <div
              class="categories__item set-bg"
              :dataSetbg="product.image"
            >
              <h5><a href="#">{{ product.category }}</a></h5>
            </div>
          </div> -->
          
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductCarousel",
  props: ['products'],
  created() {
      console.log("carousel====", this.products)
  }
};
</script>
