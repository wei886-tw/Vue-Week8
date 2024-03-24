<template>
  <div class="container-fluid px-0">
    <admin-nav-bar></admin-nav-bar>
    <div class="container py-32">
      <h2 class="text-center mb-16 fs-32">訂單列表</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">訂單編號</th>
            <th scope="col">產品名稱</th>
            <th scope="col">是否付款</th>
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
    </div>
  </div>
</template>

<script>
import AdminNavBar from "@/components/AdminNavBar.vue";

export default {
  components: { AdminNavBar },

  data() {
    return {
      api: import.meta.env.VITE_API,
      api_path: import.meta.env.VITE_PATH,
      orders: [],
    };
  },

  methods: {
    getOrders() {
      this.$http
        .get(`${this.api}/v2/api/${this.api_path}/admin/orders`)
        .then((res) => {
          console.log(res);
          this.orders = res.data.orders;
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },

  mounted() {
    this.getOrders();
  },
};
</script>