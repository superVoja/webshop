import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedProducts: []
    },
    mutations: {
      setProducts(state, products) {
        state.loadedProducts = products
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setProducts', [
              {
                id: '1',
                name: 'Product 1',
                price: '1.99'
              },
              {
                id: '2',
                name: 'Product 2',
                price: '2.99'
              }
            ])
            resolve()
          }, 1000)
        })
      },
      setProducts(vuexContext, products) {
        vuexContext.commit('setProducts', products)
      }
    },
    getters: {
      loadedProducts(state) {
        return state.loadedProducts
      }
    }
  })
}
export default createStore
