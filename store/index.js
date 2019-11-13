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
                title: 'Product 1',
                price: '1.99',
                thumbnail: ''
              },
              {
                id: '2',
                title: 'Product 2',
                price: '2.99',
                thumbnail:
                  'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'
              },
              {
                id: '3',
                title: 'Product 3',
                price: '2.99',
                thumbnail:
                  'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'
              },
              {
                id: '4',
                title: 'Product 4',
                price: '2.99',
                thumbnail:
                  'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'
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
