<template>
  <div class="container-fluid px-0">
    <NavBar />
  </div>

  <div class="container-fluid px-0" style="min-height: 100vh">
    <div class="container py-48">
      <h2 class="text-center py-60 fs-24 fs-lg-32">購物車列表</h2>
      <div class="container px-0">
        <table class="table table-responsive" v-if="cartProducts.length !== 0">
          <thead>
            <tr>
              <th class="fs-md-24" style="width:40%">品名</th>
              <th class="fs-md-24">圖片</th>
              <th class="fs-md-24">數量</th>
              <th class="fs-md-24">價格</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in cartProducts" :key="product.id">
              <td class="fs-12 fs-sm-16 fs-md-24 align-middle">{{ product.product.title }}</td>
              <td class="align-middle">
                <img
                  :src="product.product.imageUrl"
                  alt="產品圖片"
                  class="rwd"
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
                  style="height: 36px"
                  v-model="product.qty"
                />
                <button
                  class="btn d-flex d-md-inline"
                  @click="reviseQty(product.product.id, 1)"
                >
                  +
                </button>
              </td>
              <td class="fs-12 fs-sm-16 fs-md-24 align-middle">
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

        <h2 v-else class="text-center fs-24">
          您的購物車沒有東西喔，請先加入商品！<br />
          <button class="btn btn-gray mt-32" @click="backToShop">
            返回商品頁面
          </button>
        </h2>

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

    backToShop() {
      this.$router.push("/userProduct");
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
  },

  mounted() {
    this.getCartProducts();
    this.loadingCircle();
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
</style>
