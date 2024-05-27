import { defineStore } from 'pinia';
import axios from 'axios';
const { VITE_API, VITE_PATH } = import.meta.env;

export default defineStore("productStore", {
  state: () => ({
    storeAllProducts: [],
    storPagination: {},

  }),

  actions: {
    getAllProducts(page) {
      const url = `${VITE_API}/api/${VITE_PATH}/products?page=${page}`;
      return axios.get(url)
        .then((res) => {
          this.storeAllProducts = res.data.products;
          this.storePagination = res.data.pagination;
        })
        .catch((err) => {
          console.log(err.response.data.message);
        })
  },

  getters: {
    storeSortedProducts: ({ storeAllProducts }) => {
      return storeAllProducts.sort((a, b) => a.price - b.price);
    }
  },
}
});