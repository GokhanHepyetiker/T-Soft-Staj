<template>
  <div class="cart">
    <h2>Shopping Cart</h2>
    <div v-for="item in cart" :key="item.id" class="cart-item">
      <p>{{ item.name }} - {{ item.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  props: {
    cart: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.cart {
  padding: 20px;
  border: 1px solid #ccc;
}
.cart-item {
  margin: 10px 0;
}
</style>