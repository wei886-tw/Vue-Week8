<template>
  <nav-bar-vue></nav-bar-vue>
  <div class="container-fluid px-0">
    <pre>{{form}}</pre>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-12 mx-auto">
          <ol
            class="pay-list mt-16 d-flex justify-content-between list-unstyled position-relative"
          >
            <li class="d-flex flex-column align-items-center">
              <p
                class="number d-flex justify-content-center align-items-center number-active mb-8"
              >
                1
              </p>
              <p class="fw-bold mb-0">訂單確認</p>
            </li>
            <li class="d-flex flex-column align-items-center">
              <p
                class="number d-flex justify-content-center align-items-center mb-8"
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
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <v-form v-slot="{ errors }" ref="form" id="form" >
            <div class="mb-12">
              <label for="email" class="form-label"></label>
              <v-field
                id="email"
                name="email"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email"
                rules="email|required"
                v-model="form.user.email"
              ></v-field>
              <error-message
                name="email"
                class="invalid-feedback"
              ></error-message>
            </div>

            <div class="mb-12">
              <label for="inputName" class="form-label"></label>
              <v-field
                type="text"
                class="form-control"
                id="inputName"
                name="姓名"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="form.user.name"
              >
              </v-field>
              <error-message
                name="姓名"
                class="invalid-feedback"
              ></error-message>
            </div>

            <div class="mb-12">
              <label for="inputTelephone" class="form-label"></label>
              <v-field
                type="tel"
                class="form-control"
                id="inputTelephone"
                name="電話"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
                :rules="isPhone"
                v-model="form.user.tel"
              ></v-field>
              <error-message
                name="電話"
                class="invalid-feedback"
              ></error-message>
            </div>

            <div class="mb-12">
              <label for="inputAddress" class="form-label"></label>
              <v-field
                type="text"
                class="form-control"
                id="inputAddress"
                name="地址"
                :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址"
                rules="required"
                v-model="form.user.address"
              >
              </v-field>
              <error-message
                name="地址"
                class="invalid-feedback"
              ></error-message>
            </div>

            <div class="mb-24 d-flex flex-column">
              <label for="message" class="form-label"></label>
              <v-field
                name="message"
                id="message"
                cols="30"
                style="height: fit-content"
                class="form-control border border-1 rounded"
                v-model="form.message"
                as="textarea"
                placeholder="請輸入留言"
              ></v-field>
            </div>

            <div class="d-flex justify-content-center">
              <button
                type="submit"
                class="btn btn-footer w-100 mb-60"
                @click="submitOrder"
              >
                送出訂單
              </button>
            </div>
          </v-form>
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
      selectValue: "",
      cartProducts: [],
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
      total: "",
      create_at: "",
      orderId: "",
      data: "",
    };
  },

  methods: {
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "需要正確的電話號碼";
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

    submitOrder() {
      console.log(123)
      if (this.cartList.carts.length === 0) {
        alert("目前購物車是空的，請加入產品！");
      } else {
        this.$http
          .post(`${this.url}/v2/api/${this.api_path}/order`, {
            data: {
              user: {
                name: this.form.user.name,
                email: this.form.user.email,
                tel: this.form.user.tel,
                address: this.form.user.address,
              },
              message: this.form.message,
            },
          })

          .then((res) => {
            this.orderId = res.data.orderId;
            alert("成功送出訂單")
            this.$router.push(`/userPayment/$`)
            this.$refs.form.reset();
            this.data = res.data;
            this.total = res.data.total;
            this.create_at = res.create_at;
            
          })
          .catch((err) => {
            console.log(err.response.data.message);
          });
      }
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
  width: 83%;
  height: 1px;
  background-color: black;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 30%;
  position: absolute;
  z-index: 1;
}
</style>