<template>
  <header class="header">
    <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
    <div class="brand">
      <span>
        <a to="/">webshop</a>
      </span>
    </div>
    <TheCartToggle />
  </header>
</template>

<script>
import TheSideNavToggle from '@/components/Navigation/TheSideNavToggle'
import TheCartToggle from '@/components/TheCart/TheCartToggle'

export default {
  name: 'TheHeader',
  components: {
    TheSideNavToggle,
    TheCartToggle
  }
}
</script>


<style scoped>
.header {
  z-index: 100;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.brand span a {
  position: absolute;
  line-height: 60px;
  left: 50%;
  transform: translateX(-50%);
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 4px;
}
.brand a:hover {
  text-decoration: none;
}
</style>
