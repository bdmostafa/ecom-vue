<template>
    <product-card :category="this.$route.params.category">
      <slot></slot>
    </product-card>
</template>

<script>
export default {
    name: 'Category',
}
</script>