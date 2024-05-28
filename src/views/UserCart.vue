<template>
  <div class="container">
    <NavBar :cartProducts="cartProducts" />
  </div>
  <div class="container-fluid" style="min-height: 100vh">
    <div class="container py-48">
      <h2 class="text-center py-60 fs-24 fs-lg-32">購物車列表</h2>
      <div class="container-sm">
        <table class="table table-responsive">
          <thead>
            <tr>
              <th scope="col" class="fs-md-24">品名</th>
              <th scope="col" class="fs-md-24">圖片</th>
              <th scope="col" class="fs-md-24">數量</th>
              <th scope="col" class="fs-md-24">價格</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in cartProducts" :key="product.id">
              <td class="fs-md-24 align-middle">{{ product.product.title }}</td>
              <td class="align-middle">
                <img
                  :src="product.product.imageUrl"
                  alt="產品圖片"
                  style="height: 100px; width: 100px"
                />
              </td>
              <td class="align-middle">
                <button
                  class="btn d-flex d-md-inline"
                  @click="reviseQty(product.product.id, -1)"
                  v-if="product.qty >= 2"
                >
                  -
                </button>
                <button
                  class="rounded btn d-flex d-md-inline"
                  v-else
                  style="width: 35px; height: 38px"
                  @click="delCartItem(product.id)"
                >
                  <i class="bi bi-trash text-center"></i>
                </button>
                <input
                  type="number"
                  class="border border-gray border-1 rounded me-4 d-flex d-md-inline"
                  style="width: 100px; height: 36px"
                  v-model="product.qty"
                />
                <button
                  class="btn d-flex d-md-inline"
                  @click="reviseQty(product.product.id, 1)"
                >
                  +
                </button>
              </td>
              <td class="fs-md-24 align-middle">
                {{ Math.floor(product.final_total) }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <td></td>
            <td></td>
            <td></td>
            <td class="fs-md-16 fs-lg-24 pt-32">
              <div class="container d-lg-flex justify-content-between">
                <p>總價: ${{ Math.floor(cartList.final_total) }}</p>

              </div>
            </td>
          </tfoot>
        </table>
        
        <div class="container d-flex px-0 justify-content-end">
          <button
            type="button"
            class="btn w-50 mb-60 btn-footer"
            @click="enterPayment"
          >
            進入付款頁面
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid px-0 ">
    <PageFooter />
  </div>

  <div class="container">
    <router-view ></router-view>
  </div>

</template>

<script>
import NavBar from "../components/NavBar.vue";
import PageFooter from "../components/PageFooter.vue";

export default {
  props: ["finalTotal"],
  data() {
    return {
      api_path: import.meta.env.VITE_PATH,
      url: import.meta.env.VITE_API,
      selectValue: "",
      cartProducts: [],
      cartList: {},
      final_total: "",
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
    };
  },

  components: { NavBar, PageFooter },

  methods: {
    getCartProducts() {
      this.$http
        .get(`${this.url}/v2/api/${this.api_path}/cart`)
        .then((res) => {
          this.cartProducts = res.data.data.carts;
          this.cartList = res.data.data;
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },

    reviseQty(id, qty) {
      this.$http
        .post(`${this.url}/v2/api/${this.api_path}/cart`, {
          data: {
            product_id: id,
            qty: qty,
          },
        })
        .then(() => {
          alert("修改購物車成功");
          this.getCartProducts();
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },

    delCartItem(id) {
      this.$http
        .delete(`${this.url}/v2/api/${this.api_path}/cart/${id}`)
        .then(() => {
          alert("已經刪除");
          this.getCartProducts();
        })
        .cath((err) => {
          console.log(err.message);
        });
    },

    enterPayment() {
      this.$router.push("/userOrder");
      window.scrollTo(0, 0);
      this.$emit("emit-cart-list", this.cartList);
    },
  },

  mounted() {
    this.getCartProducts();
  },
};
</script>

<style lang="scss" scoped>
button:hover {
  background-color: black;
  color: white;
}
</style>
