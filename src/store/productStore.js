import { defineStore } from 'pinia';
import axios from 'axios';
const { VITE_API, VITE_PATH } = import.meta.env;

export default defineStore("productStore", {
  state: () => ({
    allProducts: [ '1' ],

  }),

  actions: {
    getAllProducts() {
      const url = `${VITE_API}/api/${VITE_PATH}/products/all`;
      return axios.get(url)
        .then((res) => {
          this.allProducts = res.data.products;
          console.log(this.allProducts);
        })
        .catch((err) => {
          console.log(err.response.data.message);
        })

  },

  getters: {
    sortedProducts: ({ allProducts }) => {
      return allProducts.sort((a, b) => a.price - b.price);
    }
  },

}
});