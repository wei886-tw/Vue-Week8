<template>
<admin-nav-bar></admin-nav-bar>
  <div class="container py-48 bg-secondary">
    <h2 class="text-center"> 後台產品列表</h2>
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
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNavBar from '@/components/AdminNavBar.vue';
export default {
  components: { AdminNavBar },
  data() {
    return {
      allProducts: [],
      api: import.meta.env.VITE_API,
      api_path: import.meta.env.VITE_PATH,
    };
  },
  methods: {
    getProducts() {
      this.$http
        .get(`${this.api}/api/${this.api_path}/products/all`)
        .then((res) => {
          this.allProducts = res.data.products;

        })
        .catch(err=>{
          console.log(err)
        })
    },
  },

  mounted() {
    this.getProducts();
  },
};
</script>