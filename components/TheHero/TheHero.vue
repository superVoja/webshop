<template>
  <section class="hero-section">
    <div class="hero-left">
      <div class="tagline">
        <p>
          Useful tools to stimulate
          <br />planning, productivity and
          <br />creativity.
        </p>
      </div>
      <div class="shipping">
        <p>Complimentary ground shipping on U.S. orders $30+</p>
      </div>
    </div>
    <div class="hero-right">
      <div class="hero-image">
        <img src="@/assets/images/hero.jpg" alt="hero image" class="img" />
      </div>
    </div>
  </section>
</template>
<style scoped>
.hero-section {
  height: 100vh;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;
}
.hero-left {
  height: 100vh;
  background: #f7f6f2;
  flex-basis: 50%;
  max-width: 50%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.tagline {
  position: absolute;
  margin-top: 130px;
  margin-left: 40px;
  font-family: 'Playfair Display';
  font-size: 24px;
  font-weight: 300;
}

a {
  color: grey !important;
  font-family: 'Larsseit';
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.shipping {
  position: absolute;
  bottom: 30px;
  margin-left: 40px;
  font-size: 14px;
  font-weight: 300;
}
.hero-right {
  height: 100vh;
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

img {
  width: 100%;
}
</style>