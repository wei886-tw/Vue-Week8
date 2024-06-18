<template>
  <div class="container-fluid px-0">
    <NavBar />
  </div>
  <div class="container-fluid mx-auto">
    <div class="container pt-48 mx-auto">
      <div class="row mx-auto">
        <div class="col-10 mx-auto">
          <div class="container d-flex justify-content-between"></div>
          <table class="table d-none d-md-block">
            <thead>
              <tr>
                <th style="width: 25%" class="align-items-bottom p-0">
                  <p class="fs-24 fs-md-32 fs-lg-40">所有產品</p>
                </th>
                <th style="width: 60%">
                  <div
                    class="rounded border-2 py-0 bg-footer d-flex justify-content-between align-items-center"
                    style="height: 48px"
                  >
                    <input
                      type="text"
                      class="rounded border-footer border-5 bg-footer py-0 px-0 form-control"
                      placeholder="請輸入欲搜尋產品"
                      ref="search"
                      style="width: 90%; height: 44px"
                    />
                    <button for="input" class="border-0">
                      <i
                        class="bi bi-search fs-12 fs-md-16 fs-lg-24 pe-8 text-dark bg-footer border-dark"
                        @click="searchProduct"
                      ></i>
                    </button>
                  </div>
                </th>
                <th style="width: 15%">
                  <select
                    name=""
                    id=""
                    class="rounded border-2 btn btn-footer"
                    style="width: 132px; height: 48px; position: relative"
                    ref="type"
                    @change="changeProductType"
                  >
                    <option value="所有產品" style="position: absolute">
                      所有產品
                    </option>
                    <option value="平板" style="position: absolute">
                      平板
                    </option>
                    <option value="手機" style="position: absolute">
                      手機
                    </option>
                    <option value="筆電" style="position: absolute">
                      筆電
                    </option>
                  </select>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in userProducts" :key="product.id">
                <td class="pt-32" style="width: 20%">
                  <div
                    class="container"
                    style="position: relative; display: inline-block"
                  >
                    <img
                      :src="product.imageUrl"
                      alt="商品圖片"
                      style="
                        height: 240px;
                        width: 240px;
                        object-fit: cover;
                        position: relative;
                      "
                      class="mb-16 d-block"
                    />
                  </div>
                </td>
                <td class="pt-32" style="width: 70%">
                  <router-link :to="`/userProductInfo/${product.id}`">
                    <h5 class="mb-16 fs-16 fs-md-24 text-dark">
                      {{ product.title }}
                    </h5>
                  </router-link>
                  <p class="d-none d-md-block" style="color: #8e8e8e">
                    產品描述：{{ product.description }}
                  </p>
                </td>
                <td class="pt-32 fs-lg-24 fw-bold text-danger">
                  <p class=" ">特價：</p>
                  <p class="mb-16">{{ product.price }}</p>
                  <select
                    class="rounded border-2 mb-16"
                    name="num"
                    style="width: 100%"
                    ref="qty"
                    @change="changeQty"
                  >
                    <option :value="num" v-for="num in 10" :key="num">
                      {{ num }}
                    </option>
                  </select>
                  <button
                    class="btn btn-footer hover mb-16 color"
                    style="width: 100%"
                    @click="addToCart(product.id)"
                  >
                    <i class="bi bi-cart-fill"></i>
                    加入購物車
                  </button>
                  <button
                    class="btn btn-footer hover mb-16 color"
                    style="width: 100%"
                    @click="handleFavorite(product.id)"
                    :class="favoriteList.indexOf(product.id) === -1 ? 'btn-footer' : 'hovered'"
                    id="myButton"
                    >
                    <i class="bi bi-heart-fill"></i>
                    &nbsp;加入收藏
                  </button>
                </td>
              </tr>
            </tbody>
            <div class="container" v-if="searchProducts.length === 0">
              <p class="pt-32 mb-32 text-center">找不到該產品</p>
              <div class="container d-flex justify-content-center">
                <button class="btn btn-footer w-50" @click="backToPreviousPage">
                  返回上一頁
                </button>
              </div>
            </div>
          </table>

          <p class="fs-48 d-md-none text-center mb-16">所有產品</p>
          <div class="container d-md-none d-flex justify-content-between mb-16">
            <div
              class="rounded border-2 py-0 bg-footer d-flex justify-content-between align-items-center"
              style="height: 48px; width: 50%"
            >
              <input
                type="text"
                class="rounded border-2 border-footer bg-footer py-0 px-0"
                placeholder="搜尋產品"
                ref="searchMobile"
                style="width: 90%; height: 44px"
              />
              <button for="input" class="border-0">
                <i
                  class="bi bi-search fs-12 fs-md-16 fs-lg-24 pe-8 text-dark"
                  @click="searchProductMobile"
                ></i>
              </button>
            </div>

            <select
              name=""
              class="btn btn-footer fs-12"
              ref="select"
              style="width: 40%"
            >
              <option value="所有產品">所有產品</option>
              <option value="平板">平板</option>
              <option value="手機">手機</option>
              <option value="筆電">筆電</option>
            </select>

            <hr />
          </div>
          <div
            class="d-md-none d-flex justify-content-between"
            v-for="product in userProducts"
            :key="product.id"
            @click="tempProduct = product"
          >
            <div class="mb-24 py-16 px-16">
              <img
                :src="product.imageUrl"
                alt="商品圖片"
                style="height: 280px; width: 95%; object-fit: cover"
                class="mb-16"
              />
              <div class="d-flex flex-column justify-content-between px-32">
                <router-link
                  :to="`/userProductInfo/${product.id}`"
                  target="_blank"
                >
                  <h5 class="mb-16 text-dark">{{ product.title }}</h5>
                </router-link>

                <p class="mb-16 text-danger fw-bold">
                  特價：{{ product.price }} 元
                </p>

                <p class="mb-16" style="color: #8e8e8e">
                  {{ product.description }}
                </p>

                <div
                  class="container d-flex justify-content-between px-0 mb-16"
                >
                  <select
                    class="btn btn-footer fs-14"
                    style="width: 45%"
                    ref="qty"
                    @change="changeQty"
                  >
                    <option :value="num" v-for="num in 10" :key="num">
                      {{ num }}
                    </option>
                  </select>
                  <button
                    class="btn btn-footer fs-14 hover"
                    style="width: 45%"
                    @click="addToCart(product.id)"
                  >
                    <i class="bi bi-cart-fill"></i>
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="container d-md-none" v-if="searchProducts.length === 0">
            <p class="pt-32 mb-32 text-center">找不到該產品</p>
            <div class="container d-flex justify-content-center">
              <button class="btn btn-footer w-50" @click="backToPreviousPage">
                返回上一頁
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="container d-flex justify-content-center"
      v-if="searchProduct.length !== 0"
    >
      <button class="btn btn-footer w-50" @click="backToPreviousPage">
        返回上一頁
      </button>
    </div>

    <div class="container px-0 pt-32">
      <PageNation
        v-if="userProducts.length !== 0"
        class="d-flex justify-content-center"
        :pagination="pagination"
        :get-page-products="getProducts"
      />
    </div>
  </div>

  <div class="container-fluid px-0">
    <PageFooter />
  </div>
</template>

<script>
import PageFooter from "@/components/PageFooter.vue";
import NavBar from "@/components/NavBar.vue";
import PageNation from "@/components/PageNation.vue";

import cartStore from "@/store/cartStore.js";
import favoriteStore from "@/store/favoriteStore.js";
import { mapState, mapActions } from "pinia";

export default {
  components: { PageFooter, NavBar, PageNation },
  data() {
    return {
      userProducts: [],
      api: import.meta.env.VITE_API,
      api_path: import.meta.env.VITE_PATH,
      myModal: null,
      tempProduct: {},
      searchProducts: ["2"], // 避免尚未搜尋前就出現找不到該產品
      pagination: {},
      filterProducts: [],
      category: "",
      qty: "",
      favoriteLis: [],
      myButton: '',
    };
  },
  computed: {
    ...mapState(cartStore, ["storeCart"]),
    ...mapState(favoriteStore, ["favoriteList", "favoriteId"]),
  },

  watch: {},

  methods: {
    ...mapActions(cartStore, ["getCartList"]),
    ...mapActions(favoriteStore, [
      "handleFavorite",
      "setStorage",
      "getFavoriteList",
      "test"
    ]),

    changeQty() {
      this.qty = parseInt(event.target.value);
    },

    addToCart(product_id) {
      if (this.qty != "") {
        this.$http
          .post(`${this.api}/v2/api/${this.api_path}/cart`, {
            data: {
              product_id,
              qty: this.qty,
            },
          })
          .then(() => {
            this.getCartList();
            alert("成功加入購物車");
          })
          .catch((err) => {
            console.log(err.response.data.message);
          });
      } else {
        this.$http
          .post(`${this.api}/v2/api/${this.api_path}/cart`, {
            data: {
              product_id,
              qty: 1,
            },
          })
          .then(() => {
            this.getCartList();
            alert("成功加入購物車");
          })
          .catch((err) => {
            console.log(err.response.data.message);
          });
      }
    },

    changeProductType() {
      this.category = this.$refs.type.value;
      if (this.category != "所有產品") {
        this.$http
          .get(
            `${this.api}/v2/api/${this.api_path}/products?category=${this.category}`
          )
          .then((res) => {
            this.userProducts = res.data.products;
            this.pagination = res.data.pagination;
            this.userProducts = this.userProducts.filter(
              (item) => item.category === this.category
            );
            alert(`顯示所有${this.category}產品`);
          })
          .catch((err) => {
            console.log(err.response.data.message);
          });
      } else {
        this.getProducts(1);
      }
    },

    getProducts(page) {
      this.$http
        .get(`${this.api}/api/${this.api_path}/products?page=${page}`)
        .then((res) => {
          this.userProducts = res.data.products;
          this.pagination = res.data.pagination;
          window.scrollTo(0, 0);
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },

    openModal() {
      this.myModal.show();
    },

    searchProduct() {
      this.title = this.$refs.search.value;
      if (this.title !== undefined && this.title !== "") {
        this.$http
          .get(`${this.api}/v2/api/${this.api_path}/products/all`)
          .then((res) => {
            this.userProducts = res.data.products;
            this.pagination = {};
            this.userProducts = this.userProducts.filter((item) =>
              item.title.includes(this.title)
            );
            alert(`搜尋 ${this.title} 的結果`);
            this.searchProducts = this.userProducts;
            this.title = "";
          })
          .catch((err) => {
            console.log(err.response.data.message);
          });
      } else {
        alert("請輸入關鍵字");
      }
    },

    backToPreviousPage() {
      this.getProducts();
      this.$refs.search.value = "";
      this.$refs.searchMobile.value = "";
      this.searchProduct = ["2"];
      this.$router.go("/userProduct");
    },

    searchProductMobile() {
      this.title = this.$refs.searchMobile.value;
      if (this.title !== undefined) {
        this.$http
          .get(`${this.api}/v2/api/${this.api_path}/products/all`)
          .then((res) => {
            this.userProducts = res.data.products;
            this.pagination = {};
            this.userProducts = this.userProducts.filter((item) =>
              item.title.includes(this.title)
            );
            alert(`搜尋 ${this.title} 的結果`);
            this.searchProducts = this.userProducts;
            this.title = "";
          })
          .catch((err) => {
            console.log(err.response.data.message);
          });
      } else {
        alert("請輸入關鍵字");
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
      }, 1000);
    },

    
  },
  mounted() {
    this.loadingCircle();
    this.getProducts();

  },
};
</script>

<style lang="scss" scoped>
.new-line {
  white-space: pre-wrap;
}
a:hover {
  text-decoration: underline black 2px;
}
.btn.hover:hover {
  background-color: black;
  color: white;
}
.hovered {
  background-color:#f3f2ee,;
  color: red;
}

.dropdown-container {
  position: relative;
  margin: 20px;
}

.dropdown-container::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #000;
  transform: translateY(-50%);
  pointer-events: none;
}
</style>