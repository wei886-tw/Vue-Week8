export default {
  cartProducts: '',
  api_path: import.meta.env.VITE_PATH,
  url: import.meta.env.VITE_API,
};



import axios from "axios";
axios.get(`${this.url}/v2/api/${this.api_path}/cart`)
.then((res) => {
  this.cartProducts = res.data.carts
})

