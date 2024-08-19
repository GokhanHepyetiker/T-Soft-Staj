<template>
  <div class="product-detail">
    <h2>{{ product.name }}</h2>
    <p>{{ product.price }}</p>
    <p>{{ product.description }}</p>
    <button @click="addToCart(product)">Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  data() {
    return {
      product: {}
    };
  },
  mounted() {
    const productId = this.$route.params.id;
    // Ürün verisini al
    this.product = { id: productId, name: `Product ${productId}`, price: `$${productId * 10}`, description: 'Product description' };
  },
  methods: {
    addToCart(product) {
      this.$emit('add-to-cart', product);
    }
  }
};
</script>

<style scoped>
.product-detail {
  padding: 20px;
  border: 1px solid #ccc;
}
</style>