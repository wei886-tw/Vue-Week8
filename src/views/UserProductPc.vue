<template>
  <div class="container-fluid px-0">
    <NavBar />
  </div>
  <div class="container-fluid py-48 mx-auto">
    <div class="container pt-32 mx-auto">
      <div class="row mx-auto">
        <div class="col-10 mx-auto">
          <div class="container d-flex justify-content-between"></div>
          <table class="table d-none d-md-block">
            <thead>
              <tr>
                <th>
                  <p class="fs-24 fs-lg-40">所有產品</p>
                </th>
                <th></th>
                <th>
                  <select
                    name=""
                    id=""
                    class="rounded border-2 btn btn-footer"
                    style="width: 132px; height: 48px"
                    ref="type"
                    @change="changeProductType"
                  >
                    <option value="所有產品">所有產品</option>
                    <option value="平板">平板</option>
                    <option value="手機">手機</option>
                    <option value="筆電" selected>筆電</option>
                  </select>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in userProducts" :key="product.id">
                <td class="pt-32" style="width: 20%">
                  <img
                    :src="product.imageUrl"
                    alt="商品圖片"
                    style="height: 240px; width: 240px; object-fit: cover"
                    class="mb-16"
                  />
                </td>
                <td class="pt-32" style="width: 70%">
                  <router-link :to="`/userProductInfo/${product.id}`">
                    <h5 class="mb-16 fs-16 fs-md-24 text-dark">
                      產品名稱：{{ product.title }}
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
                  <button class="btn btn-footer hover" style="width: 100%" 
                  @click="handleFavorite(product.id)"
                    :class="
                      favoriteList.indexOf(product.id) === -1
                        ? 'btn-footer'
                        : 'hovered'
                    ">
                    <i class="bi bi-heart-fill"></i>
                    &nbsp;加入追蹤
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="container d-md-none d-flex justify-content-between">
            <p class="fs-24">全部商品</p>

            <select
              name=""
              class="btn btn-footer"
              ref="select"
              style="width: 30%"
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
                style="height: 280px; width: 280px; object-fit: cover"
                class="mb-16"
              />
              <div class="d-flex flex-column justify-content-between px-32">
                <router-link
                  :to="`/userProductInfo/${product.id}`"
                  target="_blank"
                >
                  <h5 class="mb-16 text-dark">產品名稱：{{ product.title }}</h5>
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
                <button
                  class="btn btn-footer fs-14 hover"
                  style="width: 100%"
                  @click="handleFavorite(product.id)"
                    :class="
                      favoriteList.indexOf(product.id) === -1
                        ? 'btn-footer'
                        : 'hovered'
                    "
                >
                  <i class="bi bi-heart-fill"></i>&nbsp;加入追蹤
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container pt-32">
      <PageNation
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
import { myMixin } from "@/js/mixin";
import { mapActions, mapState } from "pinia";
import cartStore from "@/store/cartStore.js";
import favoriteStore from "@/store/favoriteStore.js";

export default {
  components: { PageFooter, NavBar, PageNation },
  mixins: [myMixin],

  data() {
    return {
      userProducts: [],
      api: import.meta.env.VITE_API,
      api_path: import.meta.env.VITE_PATH,
      myModal: null,
      tempProduct: {},
      pagination: {},
      filterProducts: [],
      category: "",
      qty: "",
    };
  },

  computed: {
    ...mapState(cartStore, ["storeCart"]),
    ...mapState(favoriteStore, ["favoriteList", "favoriteId"]),
  },

  methods: {
    ...mapActions(cartStore, ["getCartList"]),
    ...mapActions(favoriteStore, [
      "handleFavorite",
      "setStorage",
      "getFavoriteList",
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
            alert(`顯示所有${this.category}產品`)

          })
          .catch((err) => {
            console.log(err.response.data.message);
          });
      } else {
        this.getProducts();
      }
    },

    getPcProducts() {
      this.$http
        .get(`${this.api}/v2/api/${this.api_path}/products?category=筆電`)
        .then((res) => {
          this.userProducts = res.data.products;
          this.pagination = res.data.pagination;
          this, this.loadingCircle();

          window.scrollTo(0, 0);
        });
    },

    getProducts(page) {
      this.$http
        .get(`${this.api}/api/${this.api_path}/products?page=${page}`)
        .then((res) => {
          this.userProducts = res.data.products;
          this.pagination = res.data.pagination;
          this, this.loadingCircle();

          window.scrollTo(0, 0);
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },

    openModal() {
      this.myModal.show();
    },
  },

  mounted() {
    this.getPcProducts();
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
  background-color: #f3f2ee;
  color: red;
}
</style>