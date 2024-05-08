const { defineStore } = Pinia;

const {mapState, mapActions} = Pinia; 

export default defineStore('cart', {
  state: () => ({
    cart: [],
  }),

  actions: {
    addToCart(productId, qty=1) {
      this.cart.push({
        id: new Date().getTime(),
        productId,
        qty
      })
    }
  }
});

methods: {
  ...mapAction(cartStore, ['addToCart'])
},