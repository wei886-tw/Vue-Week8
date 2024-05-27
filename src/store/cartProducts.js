import Pinia from 'pinia';

const { defineStore } = Pinia;

export default defineStore("cartStore", {
  state: () => ({
    cart: []
  }),

  getters: {},

  actions: {}
});