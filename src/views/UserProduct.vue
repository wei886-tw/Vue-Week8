<template>
  <nav-bar></nav-bar>
  <div class="container-fluid py-48">
    <div class="container pt-60">
      <filter-components @emit-filter-item="getFilterItem"></filter-components>
      <div class="row ">
        <div
          class="col-12 col-md-6 col-lg-4 d-flex justify-content-between"
          v-for="product in userProducts"
          :key="product.id"
          @click="tempProduct = product"
        >
          <div
            class="mb-24 py-16 px-16"
          
          >
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
import FilterComponents from "@/components/FilterComponents.vue";

export default {
  components: { PageFooter, NavBar, PageNation, FilterComponents },

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