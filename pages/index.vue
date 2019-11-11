<template>
  <section>
    <TheHero />
    <ProductList :products="loadedProducts" />
  </section>
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

<style>
</style>
