<template>
  <nuxt-link :to="'/products/' + id">
    <figure class="poduct-preview">
      <p class="product-price">{{ price | toUSD}}</p>
      <img src="@/assets/images/prod-04.jpg" class="product-img" alt />
      <h2 class="product-title">{{ title }}</h2>
    </figure>
  </nuxt-link>
</template>
<script>
export default {
  name: 'Product',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
a {
  text-decoration: none;
  color: grey;
}
.product-preview {
  margin: 25px 0 25px 0;
  padding: 12px;
  transition: all 200ms;
  display: flex;
  flex-direction: column;
  max-height: 40rem;
}
.product-price {
  font-family: 'Larsseit';
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 12px;
}
.product-img {
  width: 100%;
}
.product-title {
  font-family: 'Larsseit';
  color: grey;
  margin-top: 16px;
  font-size: 14px;
  font-weight: 300;
}
@media (min-width: 35rem) {
}
</style>