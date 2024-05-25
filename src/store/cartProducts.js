import Pinia from 'pinia';

const { defineStore } = Pinia;

export default defineStore("allProductsStore", {
  state: () => ({
    cart: []
  }),

  getters: {},

  actions: {}
});