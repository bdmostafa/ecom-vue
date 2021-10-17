<template>
  <div class="sticky">
    <div id="myHeader">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueScrollFixedNavbar",
  props: {
    isFixed: {
      type: Boolean,
      default: true,
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      window.onscroll = function() {
        myFunction();
      };
      const header = document.getElementById("myHeader");
      const sticky = header.offsetTop;
      function myFunction() {
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }
    },
  },
};
</script>

<style scoped>
.sticky {
  width: 100%;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  background: ghostwhite;
}
</style>
