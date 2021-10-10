<template>
    <product-cart>
        <slot></slot>
    </product-cart>
</template>

<script>
import ProductCart from '../components/cart/Cart.vue'

export default {
    name: 'Cart',
    components: {
        ProductCart
    }
}
</script>