<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      searchQuery: '',
      cart: []
    };
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
    }
  }
};
</script>

<style>
/* Stil tanımları burada olabilir */
</style>