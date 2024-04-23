<template>
  <admin-nav-bar></admin-nav-bar>
  <div class="container py-48 ">
    <h2 class="text-center fs-16 fs-md-24 fs-lg-32">後台產品列表</h2>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in allProducts" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>
            {{ item.origin_price }}
          </td>
          <td>
            {{ item.price }}
          </td>
          <td>
            <span v-if="item.is_enabled" class="">啟用</span>
            <span v-else class="text-danger">未啟用</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="container d-flex justify-content-end">
    <page-nation
      class=""
      :pagination="pagination"
      :get-page-products="getPageProducts"
    ></page-nation>
  </div>
</template>

<script>
import AdminNavBar from "@/components/AdminNavBar.vue";
import PageNation from "@/components/PageNation.vue";

export default {
  components: { AdminNavBar, PageNation },

  data() {
    return {
      allProducts: [],
      url: import.meta.env.VITE_API,
      api_path: import.meta.env.VITE_PATH,
      pagination: {},
    };
  },
  methods: {
    checkAdmin() {
      const link = `${this.url}/api/user/check`;
      this.$http
        .post(link)
        .then(() => {
          this.getPageProducts();
        })
        .catch((err) => {
          alert(err.response.data.message);
          this.$router.push("/adminLogin");
        });
    },

    getPageProducts(page = 1) {
      this.$http
        .get(`${this.url}/v2/api/${this.api_path}/admin/products?page=${page}`)
        .then((res) => {
          this.pagination = res.data.pagination;
          this.allProducts = res.data.products;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },

  mounted() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.$http.defaults.headers.common.Authorization = token;
    this.checkAdmin();
  },
};
</script>