<template>
  <div class="product-list">
    <div v-for="product in filteredProducts" :key="product.id" class="product-item">
      <img :src="product.image" alt="product.name" class="product-image" />
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p>{{ formatPrice(product.price) }}</p>
      <button @click="addToCart(product)">Add to Cart</button>
      <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">View Details</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    searchQuery: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 10, image: 'path/to/image1.jpg' },
        { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 20, image: 'path/to/image2.jpg' },
        // Diğer ürünler
      ]
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => {
        if (product.name && this.searchQuery) {
          return product.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        }
        return true;
      });
    }
  },
  methods: {
    addToCart(product) {
      this.$emit('add-to-cart', product);
    },
    formatPrice(price) {
      return `$${price.toFixed(2)}`;
    }
  }
};
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
}
.product-item {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  width: 200px;
  text-align: center;
}
.product-image {
  width: 100%;
  height: auto;
}
</style>