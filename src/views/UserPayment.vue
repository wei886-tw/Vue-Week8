<template>
  <nav-bar-vue></nav-bar-vue>
  <div class="container-fluid px-0 py-32 vh-100">
    <div class="container">
      <p></p>
      <div class="row">
        <div class="col-sm-6 col-lg-8 mx-auto">
          <ol
            class="pay-list pt-32 mb-32 d-flex justify-content-between list-unstyled position-relative"
          >
            <li class="d-flex flex-column align-items-center">
              <p
                class="number number-active d-flex justify-content-center align-items-center mb-8"
              >
                1
              </p>
              <p class="fw-bold mb-0">訂單確認</p>
            </li>
            <li class="d-flex flex-column align-items-center">
              <p
                class="number number-active d-flex justify-content-center align-items-center mb-8"
              >
                2
              </p>
              <p class="fw-bold mb-0">結帳付款</p>
            </li>
            <li class="d-flex flex-column align-items-center">
              <p
                class="number d-flex justify-content-center align-items-center mb-8"
              >
                3
              </p>
              <p class="fw-bold">訂單結果</p>
            </li>
          </ol>
          <p class="mb-32">
            ※ 您的訂單將在付款後開始訂製，付款後，從開始製作到寄出商品為 14
            個工作天。
          </p>

          <div
            class="container px-0 border-2 border-dark border-top border-bottom mb-32"
          >
            <div class="container d-flex justify-content-between pt-8 mb-8">
              <p>訂單編號：</p>
              <p>123</p>
            </div>
            <div class="container d-flex justify-content-between mb-8">
              <p>訂單總額：</p>
              <p>123</p>
            </div>
          </div>

          <div class="container px-0 position-relative">
            <form action="">
              <select
                name="payment"
                id="payment"
                class="w-100 border-2 
                mb-32"
                style="height: 60px"
                ref="paymentMethod"
                @change="selectChange"
              >
                <option value="" disabled selected class="position-absolute">請選擇付款方式</option>
                <option value="刷卡">刷卡</option>
                <option value="ATM 繳費">ATM 繳費</option>
              </select>
            </form>
            <button class="btn btn-dark w-100" @click="payBill(id)">結帳付款</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <page-footer-vue></page-footer-vue>
</template>


<script>
import NavBarVue from "@/components/NavBar.vue";
import PageFooterVue from "@/components/PageFooter.vue";

export default {
  components: { NavBarVue, PageFooterVue },
  data() {
    return {
      api_path: import.meta.env.VITE_PATH,
      url: import.meta.env.VITE_API,
      cartList: {},
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
      paymentMethod: "",
    };
  },

  methods: {
    getCartProducts() {
      this.$http
        .get(`${this.url}/v2/api/${this.api_path}/cart`)
        .then((res) => {
          this.cartProducts = res.data.data.carts;
          this.cartList = res.data.data;
          console.log(this.cartProducts);
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },

    payBill(id) {
      this.$http
        .post(`${this.url}/v2/api/{api_path}/pay/${id}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },

    selectChange() {
      this.paymentMethod = this.$refs.paymentMethod.value;
    },
  },

  mounted() {
    this.getCartProducts();
  },
};
</script>

<style >
.number {
  border: 1px solid #000;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background-color: white;
  z-index: 1;
  font-weight: bold;
}
@media (min-width: 768px) {
  .number {
    width: 48px;
    height: 48px;
    font-size: 24px;
  }
}
.number-active {
  background-color: black;
  color: white;
}

.pay-list::before {
  content: "";
  width: 87%;
  height: 1px;
  background-color: black;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  position: absolute;
  z-index: 1;
}
</style>