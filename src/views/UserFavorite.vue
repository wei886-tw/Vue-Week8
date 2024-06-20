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
              <th class="fs-12 fs-md-24" style="width: 30%">品名</th>
              <th class="fs-12 fs-md-24 rwd">圖片</th>
              <th class="fs-12 fs-md-24" style="width: 20%">價格</th>
              <th class="fs-12 fs-md-24" style="width: 20%">加入購物車</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in favoriteList" :key="product.id">
              <td class="align-middle px-0">
                <button class="btn btn-white" >
                  <i
                    class="bi bi-trash3-fill fs-md-24"
                  ></i>
                </button>
              </td>
              <td class="fs-12 fs-sm-16 fs-md-24 align-middle">
                {{ product }}
              </td>
              <td class="align-middle">
                <img
                  
                  alt="產品圖片"
                  class="rwd"
                />
              </td>
              <td class="align-middle">
              </td>
              <td class="fs-12 fs-sm-16 fs-md-24 align-middle">
                <!-- {{ Math.floor(parseInt(product.product.price * product.qty)) }} -->
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
    };
  },

  computed: {
    ...mapState(favoriteStore, ["favoriteList"]),
  },

  components: { NavBar, PageFooter },

  methods: {
    ...mapActions(favoriteStore, ["getFavoriteList"]),


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
    this.loadingCircle();
    this.getFavoriteList();
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
