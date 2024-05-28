import { defineStore } from 'pinia';
import axios from 'axios';
const { VITE_API, VITE_PATH } = import.meta.env;

export default defineStore("productStore", {
  state: () => ({
    storeAllProducts: [],
    storPagination: {},
    storeCategory: "",
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
        });
    },

    // changeProductType() {
    //   if (this.storeCategory != "所有產品") {
    //     this.$http
    //       .get(
    //         `${this.api}/v2/api/${this.api_path}/products?category=${this.storeCategory}`
    //       )
    //       .then((res) => {
    //         this.storeAllProducts = res.data.products;
    //         this.storePagination = res.data.pagination;
    //         this.storeAllProducts = this.storeAllProducts.filter(
    //           (item) => item.category === this.category
    //         );
    //       })
    //       .catch((err) => {
    //         console.log(err.response.data.message);
    //       });
    //   } else {
    //     this.getProducts(1);
    //   }
    // },
  },

  getters: {
    storeSortedProducts: ({ storeAllProducts }) => {
      return storeAllProducts.sort((a, b) => a.price - b.price);
    }
  },
});