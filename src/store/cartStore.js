import { defineStore } from "pinia";
import axios from "axios"

export default defineStore("cartStore", {
  state: () => ({
    storeCart: [],
    api_path: import.meta.env.VITE_PATH,
    url: import.meta.env.VITE_API,
  }),

  getters: {
    
  },

  actions: {
    getCartList() {
      axios
        .get(`${this.url}/v2/api/${this.api_path}/cart`)
        .then((res) => {
          this.storeCart = res.data.data.carts;
        })
        .catch((err) => {
          this.storeCart = [];
          console.log(err.response.data.message);
        });
    }
  }
});