<template>
  <NavBar />
  <div class="container-fluid py-48">
    <div class="container pt-32">
      <div class="row">
        <div class="col-10">
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
                    class="rounded border-2 border-hard-gray"
                    style="width: 100px; height: 44px"
                  >
                    <option value="tablet">平板</option>
                    <option value="phone">手機</option>
                    <option value="pc">電腦</option>
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
                </td>
              </tr>
            </tbody>
          </table>

          <table class="table d-md-none">
            <thead>
              <tr>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  全部商品
                  <select name="" id="" class="d-flex justify-content-between">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            class="d-md-none d-flex justify-content-between"
            v-for="product in userProducts"
            :key="product.id"
            @click="tempProduct = product"
          >
            <div class="mb-24 py-16 px-16">
              <router-link :to="`/userProductInfo/${product.id}`">
                <img
                  :src="product.imageUrl"
                  alt="商品圖片"
                  style="height: 400px; width: 100%; object-fit: cover"
                  class="mb-16"
                />
                <div class="d-flex flex-column justify-content-between px-32">
                  <h5 class="mb-16 text-dark">產品名稱：{{ product.title }}</h5>
                  <p class="mb-16 text-dark">特價：{{ product.price }} 元</p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
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
              style="height: 400px; width: 100%; object-fit: cover"
              class="mb-16"
            />
            <div class="d-flex flex-column justify-content-between px-32">
              <router-link :to="`/userProductInfo/${product.id}`">
                <h5 class="mb-16 text-dark">產品名稱：{{ product.title }}</h5>
              </router-link>

              <p class="mb-16 text-dark">特價：{{ product.price }} 元</p>
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

export default {
  components: { PageFooter, NavBar, PageNation },

  data() {
    return {
      userProducts: [],
      api: import.meta.env.VITE_API,
      api_path: import.meta.env.VITE_PATH,
      myModal: null,
      tempProduct: {},
      pagination: {},
      filterItem: [],
    };
  },

  methods: {
    getFilterItem(filterItem) {
      this.userProducts = filterItem;
    },

    getProducts(page) {
      this.$http
        .get(`${this.api}/api/${this.api_path}/products?page=${page}`)
        .then((res) => {
          this.userProducts = res.data.products;
          this.pagination = res.data.pagination;
        });
    },

    addToCart(product_id) {
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
          console.log(err);
        });
    },

    openModal() {
      this.myModal.show();
    },
  },

  mounted() {
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
</style>