<template>
  <div class="container-fluid px-0">
    <NavBar />
  </div>

  <div class="container-fluid px-0" style="min-height: 100vh">
    <div class="container">
      <h2 class="text-center py-60 pb-16 fs-24 fs-lg-32">收藏列表</h2>
      <div class="container px-0">
        <table class="table table-responsive" v-if="favoriteList.length !== 0">
          <thead>
            <tr>
              <th class="fs-12 fs-md-24" style="width: 10%">X</th>
              <th class="fs-12 fs-md-24" style="width: 35%">品名</th>
              <th class="fs-12 fs-md-24 rwd">圖片</th>
              <th class="fs-12 fs-md-24" style="width: 20%">價格</th>
              <th class="fs-12 fs-md-24" style="width: 25%">加入購物車</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in favoriteProducts" :key="product.id">
              <td class="align-middle px-0">
                <button
                  class="btn btn-white"
                  @click="removeFavorite(product.id)"
                >
                  <i class="bi bi-trash3-fill fs-md-24"></i>
                </button>
              </td>
              <td class="fs-12 fs-sm-16 fs-md-24 align-middle">
                  <router-link
                    class="text-dark"
                    style="text-decoration: underline"
                    :to="`/userProductInfo/${product.id}`"
                    >{{ product.title }}</router-link
                  >
              </td>
              <td class="align-middle">
                <img
                  alt="產品圖片"
                  class="rwd"
                  :src="product.imageUrl"
                  style="object-fit: cover"
                />
              </td>
              <td class="align-middle fs-12 fs-sm-16 fs-md-24">
                {{ product.price }}
              </td>
              <td class="align-middle">
                <button class="btn btn-footer" @click="addToCart(product.id)">
                  加入購物車
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 v-else class="text-center fs-24">
          您的收藏列表沒有東西喔，請先加入商品！<br />
          <button class="btn btn-gray mt-32" @click="backToShop">
            返回商品頁面
          </button>
        </h2>
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
import favoriteStore from "@/store/favoriteStore.js";
import cartStore from "@/store/cartStore.js";
import { mapState, mapActions } from "pinia";

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
      onSale: false,
      favoriteProducts: [],
    };
  },

  computed: {
    ...mapState(favoriteStore, ["favoriteList"]),
    ...mapState(cartStore, ["cartStore"]),
  },

  components: { NavBar, PageFooter },

  methods: {
    ...mapActions(favoriteStore, ["getFavoriteList", "setStorage"]),
    ...mapActions(cartStore, ["getCartList"]),

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

    getProduct(id) {
      return this.$http
        .get(`${this.url}/v2/api/${this.api_path}/product/${id}`)
        .then((res) => {
          if (this.favoriteProducts.indexOf(res.data.product) === -1) {
            return res.data.product;
          }
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },

    async fetchFavoriteProducts() {
      try {
        const products = await Promise.all(
          this.favoriteList.map((id) => this.getProduct(id))
        );
        this.favoriteProducts = products.filter(Boolean); // 過濾掉任何 undefined 或 null 值
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    addToCart(id) {
      this.$http
        .post(`${this.url}/v2/api/${this.api_path}/cart`, {
          data: {
            product_id: id,
            qty: 1,
          },
        })
        .then(() => {
          alert("加入購物車成功");
          this.favoriteProducts.splice(this.favoriteProducts.indexOf(id), 1);
          this.favoriteList.splice(this.favoriteList.indexOf(id), 1);
          this.setStorage();
          this.getCartList();
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },

    removeFavorite(id) {
      this.favoriteList.splice(this.favoriteList.indexOf(id), 1);
      this.setStorage();
      this.$router.go("/userFavorite");
      window.scroll(0, 0);
    },
  },

  mounted() {
    this.loadingCircle();
    this.getFavoriteList();
    this.fetchFavoriteProducts();
    window.scroll(0, 0);
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
