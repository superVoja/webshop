<template>
  <div class="product-page">
    <ProductList :products="loadedProducts" />
  </div>
</template>
<script>
import ProductList from '@/components/Products/ProductList'
export default {
  components: {
    ProductList
  },
  computed: {
    loadedProducts() {
      return this.$store.getters.loadedProducts
    }
  }
}
</script>