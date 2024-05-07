<template>
  <nav-bar :cart-list="cartList" ></nav-bar>
  <div class="container-fluid">
    <div class="container py-48">
      <h2 class="text-center py-60 fs-24 fs-lg-32">購物車列表</h2>
      <div class="container-sm">
        <table class="table table-responsive">
          <thead>
            <tr>
              <th scope="col"  class="fs-md-24">品名</th>
              <th scope="col"  class="fs-md-24">圖片</th>
              <th scope="col"  class="fs-md-24">數量</th>
              <th scope="col" class="fs-md-24">價格</th>
            </tr>
          </thead>
          <tbody >
            <tr v-for="product in cartProducts" :key="product.id">
              <td class="fs-md-24 align-middle">{{ product.product.title }}</td>
              <td class="align-middle">
                <img
                  :src="product.product.imageUrl"
                  alt="產品圖片"
                  style="height: 100px; weight: 100px"
                />
              </td>
              <td class="align-middle ">
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
                <!-- <select
                  style="width: 100px; height: 36px"
                  id="select"
                  ref="selectValue"
                  @change="
                    reviseQty(product.product.id, this.$refs.selectValue.value)
                  "
                >
                  <option value="product.qty" selected readonly>
                    {{ product.qty }}
                  </option>
                  <option
                    v-for="n in 10"
                    :key="n"
                    placeholder="product.qty"
                  >
                    {{ n }}
                  </option>
                </select> -->
                <button
                  class="btn d-flex d-md-inline"
                  @click="reviseQty(product.product.id, 1)"
                >
                  +
                </button>
              </td>
              <td class="fs-md-24 align-middle">
                {{ product.final_total }}
              </td>
              <!-- <td>
                <button
                  class="btn btn-outline-danger"
                  @click="delCartItem(product.id)"
                >
                  X
                </button>
              </td> -->
            </tr>
          </tbody>
          <tfoot>
            <td></td>
            <td></td>
            <td></td>
            <td class="fs-md-24 pt-32">
              <div class="container d-flex justify-content-between">
                <p>原價:</p>
                <p>${{ parseInt(cartList.final_total) }}</p> 
              </div>
              <div class="container d-flex justify-content-between" v-on:final-total="getFinalTotal" >
                <p>折扣:</p>
                <p>${{}}</p>
              </div>
              <button type="button" class="btn btn-dark w-100 mb-60" @click="enterPayment">
                進入付款頁面
              </button>
            </td>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
  <PageFooter />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script type="module">
import NavBar from "../components/NavBar.vue";
import PageFooter from "../components/PageFooter.vue";

export default {
  props: ['finalTotal'],
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


  components: { NavBar, PageFooter},

  methods: {
    getCartProducts() {
      this.$http
        .get(`${this.url}/v2/api/${this.api_path}/cart`)
        .then((res) => {
          this.cartProducts = res.data.data.carts;
          this.cartList = res.data.data;
          console.log("cartList:", this.cartList.carts)
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
          console.log(this.$refs.selectValue);
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
      this.$emit("emit-cart-list", this.cartList)
    },
  },

  mounted() {
    this.getCartProducts();
  },
};
</script>
