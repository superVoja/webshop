<template>
  <div class="product-page">
    <section class="product">
      <div class="hero-left">
        <div class="hero-image">
          <img class="img" src="@/assets/images/prod-01.jpg" alt="the img" />
        </div>
      </div>
      <div class="hero-right">
        <div class="product-options">
          <h3 class="product-title">{{ loadedPost.title }}</h3>
          <p class="product-price">{{ loadedPost.price}}</p>
          <button>Add to BAG</button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: '1',
          title: 'First post',
          price: '2.99'
        }
      })
    }, 1000)
  }
}
</script>
<style scoped>
.product-page {
  width: 100%;
  height: 100vh;
}
.product {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.hero-left {
  flex-basis: 50%;
  max-width: 50%;
  position: relative;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.hero-right {
  flex-basis: 50%;
  max-width: 50%;
  position: relative;
}
.hero-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.img {
  width: 100%;
}
.product-options {
  position: absolute;
  top: 50%;
  left: 40%;
}
</style>