import Vue from 'vue'

Vue.filter('toUSD', value => {
  return '$' + parseFloat(value).toFixed(2)
})
