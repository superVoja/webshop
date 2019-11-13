<template>
  <section class="product-list">
    <Product
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :thumbnail="product.thumbnail"
      :title="product.title"
      :price="product.price"
      class="product"
    />
  </section>
</template>
<script>
import Product from '@/components/Products/Product'
export default {
  components: {
    Product
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>
.product-list {
  display: flex;
}
.product {
  flex-basis: 25%;
  max-width: 25%;
}
</style>