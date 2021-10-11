<template>
    {{ isAuthenticated ? 'auth' : 'not auth'}}
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'Checkout',
    computed: mapGetters('login', ["isAuthenticated"])
}
</script>