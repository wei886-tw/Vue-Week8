<template>
  <div class="container-fluid px-0">
    <div class="container-fluid px-0">
      <admin-nav-bar></admin-nav-bar>
    </div>
    <div class="container py-32">
      <h2 class="text-center mb-16 fs-32">訂單列表</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 10%">刪除</th>
            <th scope="col" style="width: 10%">下單時間</th>
            <th scope="col" style="width: 15%">訂單編號</th>
            <th scope="col" style="width: 10%">價格</th>
            <th scope="col" style="width: 20%">是否付款</th>
            <th scope="col" style="width: 20%">買家資訊</th>
            <th scope="col" style="width: 10%">留言</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id" class="align-center">
            <td>
              <button class="btn btn-danger"><i class="bi bi-x-lg" @click="deleteOrder(order.id)"></i></button>
            </td>
            <td class="align-center">
              {{ new Date(order.create_at).toLocaleDateString() }}
            </td>
            <td class="align-center">{{ order.id }}</td>
            <td class="align-center">{{ order.total }}</td>
            <td class="align-center">
              {{ order.is_paid ? "已付款" : "未付款" }}
            </td>
            <td class="align-center">
              email: {{ order.user.email }}
              <br />
              地址： {{ order.user.address }}
              <br />
              姓名: {{ order.user.name }}
            </td>
            <td>{{ order.message }}</td>
          </tr>
        </tbody>
      </table>
      <div class="container d-flex justify-content-end">
        <page-nation
          :pagination="ordersPagination"
          :get-page-products="getOrders"
        ></page-nation>
      </div>
    </div>
  </div>
</template>

<script>
import AdminNavBar from "@/components/AdminNavBar.vue";
import PageNation from "@/components/PageNation.vue";

export default {
  components: { AdminNavBar, PageNation },

  data() {
    return {
      api: import.meta.env.VITE_API,
      api_path: import.meta.env.VITE_PATH,
      orders: [],
      ordersPagination: {},
    };
  },

  methods: {
    getOrders(page = 1) {
      this.$http
        .get(`${this.api}/v2/api/${this.api_path}/admin/orders?page=${page}`)
        .then((res) => {
          this.orders = res.data.orders;
          this.ordersPagination = res.data.pagination;
          // console.log(this.orders)
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },

    deleteOrder(id) {
      this.$http
        .delete(`${this.api}/v2/api/${this.api_path}/admin/order/${id}`)
        .then(() => {
          alert("訂單已刪除！")
          this.getOrders(1);
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
  },

  mounted() {
    this.getOrders(1);
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.$http.defaults.headers.common.Authorization = token;
  },
};
</script>