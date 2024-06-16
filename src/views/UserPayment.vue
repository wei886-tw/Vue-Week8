<template>
  <div class="container-fluid px-0">
    <NavBar />
  </div>

  <div class="container-fluid px-0 py-32 vh-100 mb-32">
    <div class="container">
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
              <p class="fw-bold">結帳付款</p>
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

          <div
            class="container px-0 border-2 border-dark border-top border-bottom mb-32"
          >
            <div class="container d-flex justify-content-between pt-8 mb-8">
              <p>訂單編號：</p>
              <p class="text-end">{{ id }}</p>
            </div>
            <div class="container d-flex justify-content-between pt-8 mb-8">
              <p>繳費狀態：</p>
              <p>{{ is_paid ? "已付款" : "尚未付款" }}</p>
            </div>
            <div class="container d-flex justify-content-between mb-8">
              <p>訂單總額：</p>
              <p>{{ Math.floor(total) }}</p>
            </div>
          </div>

          <div class="container px-0 position-relative">
            <v-form v-slot="{ errors }">
              <v-field
                name="付款方式"
                id="payment"
                class="w-100 border-2 mb-32 form-control"
                :class="{ 'is-invalid': errors['付款方式'] }"
                placeholder="請選擇付款方式"
                ref="paymentMethod"
                rules="required"
                @change="selectChange"
                as="select"
              >
                <option value="" disabled selected>
                  請選擇付款方式
                </option>
                <option value="刷卡">刷卡</option>
                <option value="ATM 繳費">ATM 繳費</option>
              </v-field>
              <error-message name="付款方式" class="invalid-feedback"
                ><span class="text-danger">付款方式必選</span></error-message
              >
            </v-form>
            <button
              class="btn btn-footer hover w-100"
              @click="payBill(id)"
              v-on:emit-is-paid-out="getEmit(paid)"
            >
              結帳付款
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid px-0">
    <PageFooter />
  </div>
</template>


<script>
import NavBar from "@/components/NavBar.vue";
import PageFooter from "@/components/PageFooter.vue";

export default {
  props: ["id"],
  components: { NavBar, PageFooter },
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
      total: 123,
      is_paid: true,
    };
  },

  methods: {
    emitIsPaidOut() {
      this.$emit("is-paid", this.is_paid);
    },

    getOrder() {
      this.$http
        .get(`${this.url}/v2/api/${this.api_path}/order/${this.id}`)
        .then((res) => {
          this.is_paid = res.data.order.is_paid;
          this.total = res.data.order.total;
          this.$emit("emit-total", this.total);
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },

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

    payBill(id) {
      this.$http
        .post(`${this.url}/v2/api/{api_path}/pay/${id}`)
        .then(() => {
          alert("成功付款");
          this.$router.push(`/userOrderResult/${id}`);
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
    this.getOrder();
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

.btn.hover:hover {
  background-color: black;
  color: white;
}
</style>