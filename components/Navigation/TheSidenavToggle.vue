<template>
  <div class="menu-btn" role="button" @click="$emit('toggle')">
    <font-awesome-icon :icon="['fas', 'bars']" />
  </div>
</template>

<style scoped>
.menu-btn {
  position: absolute;
  line-height: 60px;
  left: 1.4em;
  cursor: pointer;
}
</style>