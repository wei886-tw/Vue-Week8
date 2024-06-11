<template>
  <div class="container-fluid px-0">
    <NavBar />
  </div>

  <div class="container-fluid px-0" style="min-height: 100vh">
    <div class="container">
      <h2 class="text-center py-60 pb-16 fs-24 fs-lg-32">購物車列表</h2>
      <div class="container px-0">
        <table class="table table-responsive" v-if="cartProducts.length !== 0">
          <thead>
            <tr>
              <th class="fs-12 fs-md-24" style="width: 10%">X</th>
              <th class="fs-12 fs-md-24" style="width: 30%">品名</th>
              <th class="fs-12 fs-md-24 rwd">圖片</th>
              <th class="fs-12 fs-md-24" style="width: 20%">數量</th>
              <th class="fs-12 fs-md-24" style="width: 20%">價格</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in cartProducts" :key="product.id">
              <td class="align-middle">
                <i
                  class="bi bi-trash3-fill fs-md-24"
                  @click="delCartItem(product.id)"
                ></i>
              </td>
              <td class="fs-12 fs-sm-16 fs-md-24 align-middle">
                {{ product.product.title }}
              </td>
              <td class="align-middle">
                <img
                  :src="product.product.imageUrl"
                  alt="產品圖片"
                  class="rwd"
                />
              </td>
              <td class="align-middle">
                <select
                  name=""
                  id=""
                  @change="reviseQty(product.id)"
                  class="border border-3 border-dark rounded"
                  style="height: 40px; width: 100%"
                >
                  <option
                    :value="num"
                    v-for="num in 10"
                    :key="num"
                    :selected="num === product.qty"
                  >
                    {{ num }}
                  </option>
                </select>
              </td>
              <td class="fs-12 fs-sm-16 fs-md-24 align-middle">
                {{ Math.floor(parseInt(product.product.price * product.qty)) }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="fs-12 fs-md-16 fs-lg-24 pt-32">
              <div
                class="container d-lg-flex flex-column justify-content-between"
              >
                <div class="container px-0 d-md-flex">
                  <p>原價: </p>
                  <del>
                    <p class="mb-16">{{ Math.floor(cartList.total) }}</p>
                  </del>
                </div>
                <div class="container px-0 d-md-flex">
                  <p>優惠: </p>
                  <p>{{ Math.floor(cartList.final_total) }}</p>
                </div>
              </div>
            </td>
          </tfoot>
        </table>

        <h2 v-else class="text-center fs-24">
          您的購物車沒有東西喔，請先加入商品！<br />
          <button class="btn btn-gray mt-32" @click="backToShop">
            返回商品頁面
          </button>
        </h2>

        <div class="container px-0">
          <div class="row">
            <div class="col-6">
              <div class="container d-flex px-0 justify-content-start"></div>
            </div>
            <div class="col-6">
              <div class="container px-0 justify-content-end d-flex">
                <button
                  v-if="cartProducts.length !== 0"
                  type="button"
                  class="btn w-50 mb-32 btn-footer"
                  @click="showCouponModal"
                >
                  領取優惠
                </button>
              </div>
              <div class="container d-flex px-0 justify-content-end">
                <button
                  v-if="cartProducts.length !== 0"
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
      </div>
    </div>
  </div>

  <!-- modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="couponModal"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">領取優惠券</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p class="mb-16">
            請填寫 Email 及姓名、電話等獲取優惠，我們將不定時發送優惠給您！
          </p>
          <v-form v-slot="{ errors }" ref="form" id="form">
            <div class="mb-12">
              <label for="email" class="form-label"></label>
              <v-field
                id="email"
                name="email"
                type="email"
                class="form-control w-100"
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
                class="form-control w-100"
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
                class="form-control w-100"
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
          </v-form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="getCoupon">
            領取優惠
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid px-0">
    <PageFooter />
  </div>

  <div class="container-fluid">
    <router-view></router-view>
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
        qty: 0,
      },
      couponModal: "",
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

    reviseQty(id) {
      this.qty = parseInt(event.target.value);
      this.$http
        .put(`${this.url}/v2/api/${this.api_path}/cart/${id}`, {
          data: {
            product_id: id,
            qty: this.qty,
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

    backToShop() {
      this.$router.push("/userProduct");
    },

    showCouponModal() {
      this.couponModal.show();
    },

    getCoupon() {
      if (
        this.form.user.name !== "" &&
        this.form.user.email !== "" &&
        this.form.user.phone !== ""
      ) {
        this.$http
          .post(`${this.url}/v2/api/${this.api_path}/coupon`, {
            data: {
              code: "test7",
            },
          })
          .then(() => {
            alert("已套用優惠券，幫您打 77 折！");
            this.couponModal.hide();
          })
          .catch((err) => {
            console.log(err.response.data.message);
          });
      } else {
        alert("請輸入資料已獲取優惠券");
      }
    },

    loadingCircle() {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: true,
        onCancel: this.onCancel,
      });
      setTimeout(() => {
        loader.hide();
      }, 500);
    },

    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "需要正確的電話號碼";
    },
  },

  mounted() {
    this.getCartProducts();
    this.loadingCircle();
    this.couponModal = new bootstrap.Modal(this.$refs.couponModal);
  },
};
</script>

<style lang="scss" scoped>
button:hover {
  background-color: black;
  color: white;
}

input {
  @media (max-width: 576px) {
    width: 40px;
  }
  @media (min-width: 577px) {
    width: 60px;
  }
}

img.rwd {
  @media (max-width: 576px) {
    width: 80px;
    height: 80px;
  }
  @media (min-width: 577px) {
    width: 100px;
    height: 100px;
  }
  @media (min-width: 768px) {
    width: 160px;
    height: 160px;
  }
  @media (min-width: 976px) {
    width: 200px;
    height: 200px;
  }
}

td.rwd {
  @media (max-width: 576px) {
    width: 80px;
    height: 80px;
  }
  @media (min-width: 577px) {
    width: 100px;
    height: 100px;
  }
  @media (min-width: 768px) {
    width: 160px;
    height: 160px;
  }
  @media (min-width: 976px) {
    width: 200px;
    height: 200px;
  }
}
</style>
