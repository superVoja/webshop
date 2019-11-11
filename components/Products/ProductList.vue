<template>
  <section>
    <Product
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :name="product.name"
      :price="product.price"
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
.post-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 1rem;
}
</style>