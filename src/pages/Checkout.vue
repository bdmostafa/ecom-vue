<template>
  <checkout-layout>
    <slot></slot>
  </checkout-layout>
</template>

<script>
import CheckoutLayout from "../components/checkout/Checkout.vue";

export default {
  name: "Checkout",
  components: {
    CheckoutLayout,
  },
};
</script>
