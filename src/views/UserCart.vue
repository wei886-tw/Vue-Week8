<template>
  <NavBar />
  <div class="container-fluid ">
    <div class="container py-48">
      <h2 class="text-center py-60">購物車列表</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" class="fs-md-24">品名</th>
            <th scope="col" class="fs-md-24">數量</th>
            <th scope="col" class="fs-md-24">價格</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in cartProducts" :key="product.id">
            <td class="fs-md-24">{{ product.product.title }}</td>
            <td class="">
              <button
                class="btn btn-danger me-4 d-flex d-md-inline"
                @click="reviseQty(product.product.id, -1)"
                v-if="product.qty >= 2"
              >
                -
              </button>
              
              <button class="rounded me-4 btn btn-danger d-flex d-md-inline " v-else style="width: 35px; height: 38px" @click="delCartItem(product.id)">
                <i class="bi bi-trash text-center" ></i>
              </button>

              <input
                type="number"
                class="border border-gray border-1 rounded me-4 d-flex d-md-inline"
                readonly
                style="width: 40px; height: 36px"
                v-model="product.qty"
              />
              <button
                class="btn btn-blue d-flex d-md-inline"
                @click="reviseQty(product.product.id, 1)"
              >
                +
              </button>
            </td>
            <td class="fs-md-24">
              {{ product.final_total }}
            </td>

            <td>
              <button
                class="btn btn-outline-danger"
                @click="delCartItem(product.id)"
              >
                X
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <td></td>
          <td></td>
          <td class="fs-md-24">總計： {{ cartList.final_total }}</td>
        </tfoot>
      </table>
    </div>

    <div class="container ">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <h2 class="text-center fs-32 mb-12">購物人資料</h2>
          <v-form v-slot="{ errors }" @submit="submitOrder" ref="form">
            <div class="mb-12">
              <label for="email" class="form-label">Email</label>
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
              <label for="inputName" class="form-label">收件人姓名</label>
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
              <label for="inputTelephone" class="form-label">收件人電話</label>
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
              <label for="inputAddress" class="form-label">收件人地址</label>
              <v-field
                type="text"
                class="form-control"
                id="inputName"
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

            <div class="mb-12 d-flex flex-column">
              <label for="textarea" class="form-label">留言</label>
              <textarea
                name="textarea"
                id="textarea"
                cols="30"
                style="height: fit-content"
                class="form-control border border-1 rounded"
                v-model="form.message"
              ></textarea>
            </div>

            <div class="d-flex justify-content-end">
              <button
                type="submit"
                class="btn btn-danger d-flex justify-content-end"
                @click="submitOrder()"
              >
                送出訂單
              </button>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  </div>
  <PageFooter/>
  
</template>

<script type="module">
import NavBar from "../components/NavBar.vue";
import PageFooter from "../components/PageFooter.vue"

export default {
  data() {
    return {
      api_path: import.meta.env.VITE_PATH,
      url: import.meta.env.VITE_API,
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
          console.log(err.message);
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

    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "需要正確的電話號碼";
    },

    submitOrder() {
      if (this.cartList.carts.length === 0) {
        alert("目前購物車是空的，請加入產品！");
      }
    },
  },

  mounted() {
    this.getCartProducts();
  },
};
</script>
