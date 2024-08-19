<template>
  <div>
    <ProductDetail @add-to-cart="addToCart" />
  </div>
</template>

<script>
import ProductDetail from '@/components/ProductDetail.vue';

export default {
  name: 'ProductPage',
  components: {
    ProductDetail
  },
  methods: {
    addToCart(product) {
      this.$emit('add-to-cart', product);
    }
  }
};
</script>