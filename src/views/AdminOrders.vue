<template>
  <div class="container-fluid px-0">
    <div class="container-fluid px-0">
      <admin-nav-bar></admin-nav-bar>
    </div>
    <div class="container py-32">
      <h2 class="text-start mb-16 fs-32 fw-bold">訂單列表</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 10%">下單時間</th>
            <th scope="col" style="width: 15%">訂單編號</th>
            <th scope="col" style="width: 10%">價格</th>
            <th scope="col" style="width: 10%">是否付款</th>
            <th scope="col" style="width: 15%">訂單內容</th>
            <th scope="col" style="width: 15%">刪除訂單</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id" class="align-center">
            <td class="align-center">
              {{ new Date(order.create_at * 1000).getFullYear() }}/{{
                new Date(order.create_at * 1000).getMonth()
              }}/{{ new Date(order.create_at * 1000).getDate() }}
            </td>
            <td class="align-center">{{ order.id }}</td>
            <td class="align-center">{{ order.total }}</td>
            <td class="align-center">
              {{ order.is_paid ? "已付款" : "未付款" }}
            </td>
            <td>
              <button class="btn btn-success" @click="openModal(order)">
                訂單內容
              </button>
            </td>
            <td>
              <button class="btn btn-danger" @click="deleteOrder(order.id)">
                刪除訂單
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref="orderModal"
      >
        <div
          class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable"
        >
          <div class="modal-content">
            <div class="modal-header bg-dark">
              <h5
                class="modal-title fs-24 text-white ps-32"
                id="exampleModalLabel"
              >
                訂單編號：{{ tempOrder.id }}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-4">
                  <div class="container d-flex mb-16">
                    <p for="" class="mb-8 fs-24 fw-bold ps-32">訂單用戶：</p>
                    <p class="fs-20 fw-bold">{{ tempOrder.user.name }}</p>
                  </div>

                  <div class="form-check form-switch mb-16">
                    <label for="" class="mb-8">Email：</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      v-model="tempOrder.user.email"
                      class="form-control w-100"
                    />
                  </div>

                  <div class="form-check form-switch mb-16">
                    <label for="" class="mb-8">電話：</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      v-model="tempOrder.user.tel"
                      class="form-control w-100"
                    />
                  </div>

                  <div class="form-check form-switch mb-16">
                    <label for="" class="mb-8">住址：</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      v-model="tempOrder.user.address"
                      class="form-control w-100"
                    />
                  </div>

                  <div class="form-check form-switch mb-16">
                    <label for="" class="mb-8">留言：</label>
                    <textarea
                      type="text"
                      name=""
                      id=""
                      v-model="tempOrder.message"
                      class="form-control w-100"
                    />
                  </div>
                </div>

                <div class="col-8">
                  <div class="form-check form-switch mb-16">
                    <p class="fs-24 fw-bold mb-8">訂單狀態：</p>
                    <label for="" class="mb-8"> 訂單建立時間： </label>
                    {{ new Date(tempOrder.create_at * 1000).getFullYear() }} /
                    {{ new Date(tempOrder.create_at * 1000).getMonth() }} /
                    {{ new Date(tempOrder.create_at * 1000).getDate() }}
                  </div>

                  <div class="form-check form-switch mb-16">
                    <label for="" class="mb-8">訂單付費狀態：</label>
                    {{ tempOrder.is_paid ? "已付費":"尚未付費" }}
                  </div>

                  <div class="form-check form-switch mb-16">
                    <label for="" class="mb-8">訂單數量：</label>
                    {{ tempOrder.num }}
                  </div>

                  <div class="form-check form-switch mb-16">
                    <h3 class="fs-24 fw-bold">訂購產品：</h3>
                    <div
                      class="container d-flex px-0"
                      v-for="product in tempOrder.products"
                      :key="product.id"
                    >
                      <p class="me-8">{{ product.product.title }}：</p>
                      <p class="me-8">
                        {{ product.qty }} {{ product.product.unit }}，
                      </p>
                      <p>價格：{{ product.product.price }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                關閉
              </button>
            </div>
          </div>
        </div>
      </div>

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
import { myMixin } from "@/js/mixin";

export default {
  components: { AdminNavBar, PageNation },
  mixins: [myMixin],
  data() {
    return {
      api: import.meta.env.VITE_API,
      api_path: import.meta.env.VITE_PATH,
      orders: [],
      ordersPagination: {},
      tempOrder: { user: "" },
      orderModal: "",
    };
  },

  methods: {
    getOrders(page = 1) {
      this.$http
        .get(`${this.api}/v2/api/${this.api_path}/admin/orders?page=${page}`)
        .then((res) => {
          this.orders = res.data.orders;
          this.ordersPagination = res.data.pagination;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },

    deleteOrder(id) {
      this.$http
        .delete(`${this.api}/v2/api/${this.api_path}/admin/order/${id}`)
        .then(() => {
          alert("訂單已刪除！");
          this.getOrders(1);
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },

    openModal(item) {
      this.tempOrder = { ...item };
      console.log(this.tempOrder.user);
      this.orderModal.show();
    },
  },

  mounted() {
    this.getOrders(1);
    this.orderModal = new bootstrap.Modal(this.$refs.orderModal);
    this.loadingCircle();
  },
};
</script>