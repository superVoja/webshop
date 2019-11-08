<template>
  <div class="sidenav-container">
    <div v-if="show" class="sidenav-backdrop" @click="$emit('close')"></div>
    <transition name="slide-side">
      <div v-if="show" class="sidenav">
        <ul class="nav-list" @click="$emit('close')">
          <li class="nav-item">
            <nuxt-link to="/">home.</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/product">product.</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/collection">collection.</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/about">about.</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/contact">contact.</nuxt-link>
          </li>
        </ul>
        <div class="social-icons">
          <ul>
            <li>
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </li>
            <li>
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </li>
            <li>
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </li>
            <li>
              <font-awesome-icon :icon="['fab', 'pinterest']" />
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TheSidenav',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>


<style scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
}

.sidenav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  height: 100vh;
  width: 30%;
  background-color: #fff;

  box-sizing: border-box;
  padding: 30px;
}
.sidenav ul {
  list-style: none;
  position: relative;
  top: 40%;
  left: 10%;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 1s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin: 20px 0;
}

.nav-item a {
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
}

.nav-item a:hover,
.nav-item a:active,
.nav-litem.nuxt-link-exact-active a {
  color: #ccc;
}
.social-icons {
  position: relative;
  top: 50%;
}
.social-icons ul li {
  display: inline-block;
  padding-right: 10px;
}
@media (max-width: 900px) {
  .sidenav {
    width: 100%;
  }
}
</style>
