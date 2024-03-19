<template>
  <admin-nav-bar></admin-nav-bar>
  <div class="container py-48">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
    <!-- 分頁 -->

    <!-- 編輯訂單 -->

    <!-- 刪除訂單 -->
  </div>
</template>

<script>
import AdminNavBar from "../components/AdminNavBar.vue";

export default {
  data() {
    return {
      api_path: import.meta.env.VITE_PATH,
      url: import.meta.env.VITE_API,
      cartProducts: [],
    };
  },

  components: { AdminNavBar },

  methods: {
    getOrders() {
      this.$http
        .get(`${this.url}/v2/api/${this.api_path}/cart`)
        .then((res) => {
          console.log(res);
          this.cartProducts = res.data.data.carts;
          console.log(this.cartProducts);
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
  },

  mounted() {
    this.getOrders();
  },
};
</script>
