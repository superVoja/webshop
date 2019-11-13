<template>
  <div>
    <section>
      <TheHero />
    </section>
    <section class="product-list">
      <ProductList :products="loadedProducts" />
    </section>
  </div>
</template>

<script>
import TheHero from '@/components/TheHero/TheHero'
import ProductList from '@/components/Products/ProductList'
export default {
  components: {
    TheHero,
    ProductList
  },
  computed: {
    loadedProducts() {
      return this.$store.getters.loadedProducts
    }
  }
}
</script>

<style scoped>
.product-list {
  padding: 80px 40px;
}
</style>
