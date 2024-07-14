<template>
  <div class="container-fluid px-0">
    <admin-nav-bar></admin-nav-bar>
  </div>
  <div class="container-fluid px-0">
    <div class="container py-48">
      <div class="container mb-24 d-flex justify-content-between px-0">
        <h2 class="fs-32 fw-bold">優惠券管理</h2>
        <button type="button" class="btn btn-dark" @click="openModal('')">
          建立優惠券
        </button>
      </div>
      <table class="table mb-16">
        <thead>
          <tr>
            <th scope="col">優惠券標題</th>
            <th scope="col">折價</th>
            <th scope="col">到期日</th>
            <th scope="col">是否啟用</th>
            <th scope="col">修改</th>
            <th scope="col">刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="coupon in coupons" :key="coupon.id">
            <td>{{ coupon.title }}</td>
            <td>{{ coupon.percent }} %</td>
            <td>
              {{ new Date(coupon.due_date).getFullYear() }}/
              {{
                String(new Date(coupon.due_date).getMonth() + 1).padStart(
                  2,
                  "0"
                )
              }}/
              {{ new Date(coupon.due_date).getDate() }}
            </td>
            <td>{{ coupon.is_enabled ? "是" : "否" }}</td>
            <td>
              <button class="btn btn-success" @click="openModal(coupon)">
                修改優惠券
              </button>
            </td>
            <td>
              <button class="btn btn-danger" @click="deleteCoupon(coupon.id)">
                刪除優惠券
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="container">
        <page-nation
          :pagination="couponPagination"
          :get-page-products="getCoupons"
          class="d-flex justify-content-end"
        ></page-nation>
      </div>
    </div>
  </div>

  <!-- modal -->
  <div class="modal" tabindex="-1" ref="couponModal">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">建立優惠券</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <v-form v-slot="{ errors }" action="" ref="Form">
            <div class="form-group mb-16">
              <label for="title" class="form-label">優惠券名稱</label>
              <input
                id="title"
                v-model="tempCoupon.title"
                type="text"
                class="form-control"
                placeholder="請輸入優惠券名稱"
                rules="required"
                name="優惠券名稱"
                :class="{ 'is-invalid': errors['優惠券名稱'] }"
              />
              <error-message
                name="優惠券名稱"
                class="invalid-feedback"
              ></error-message>
            </div>

            <div class="form-group mb-16">
              <label for="percent" class="form-label">折扣</label>
              <input
                id="percent"
                v-model="tempCoupon.percent"
                type="number"
                class="form-control"
                placeholder="請輸入折扣"
              />
            </div>

            <div class="form-group mb-16">
              <label for="due_date" class="form-label">到期日</label>
              <input
                id="due_date"
                v-model="tempCoupon.due_date"
                value=""
                type="date"
                class="form-control"
                placeholder="請輸入到期日"
                ref="date"
              />
            </div>

            <div class="form-group mb-16">
              <label for="code" class="form-label">優惠券代碼</label>
              <input
                id="code"
                v-model="tempCoupon.code"
                type="text"
                class="form-control"
                placeholder="請輸入優惠券代碼"
              />
            </div>

            <div class="form-check form-switch mb-16">
              <label for="is_enabled" class="form-check-label"
                >是否啟用優惠券</label
              >
              <input
                id="is_enabled"
                v-model="tempCoupon.is_enabled"
                type="checkbox"
                class="form-check-input"
              />
            </div>
          </v-form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="closeModal"
          >
            關閉
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="createCoupon"
            v-if="!tempCoupon.id"
          >
            建立優惠券
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="adviseCoupon"
            v-else
          >
            修改優惠券
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script type="module">
import AdminNavBar from "@/components/AdminNavBar.vue";
import PageNation from "@/components/PageNation.vue";
import { myMixin } from "@/js/mixin";
import Modal from 'bootstrap/js/dist/modal';


export default {
  components: { AdminNavBar, PageNation },
  mixins: [myMixin],
  data() {
    return {
      api_path: import.meta.env.VITE_PATH,
      url: import.meta.env.VITE_API,
      title: "",
      is_enabled: true,
      percent: "",
      due_date: "",
      code: "",
      myModal: "",
      coupons: "",
      couponPagination: "",
      date: "",
      tempCoupon: {},
      original_due_date: "",
    };
  },

  methods: {
    createCoupon() {
      this.tempCoupon.due_date = parseInt(new Date(this.$refs.date.value).getTime());
      if (this.tempCoupon.is_enabled === true) {
        this.tempCoupon.is_enabled = 1;
      } else {
        this.tempCoupon.is_enabled = 0;
      }
      this.$http
        .post(`${this.url}/v2/api/${this.api_path}/admin/coupon`, {
          data: {
            title: this.tempCoupon.title,
            is_enabled: this.tempCoupon.is_enabled,
            percent: this.tempCoupon.percent,
            due_date: this.tempCoupon.due_date,
            code: this.tempCoupon.code,
          },
        })
        .then(() => {
          alert("建立優惠券成功");
          this.loadingCircle();
          this.tempCoupon = {};
          this.myModal.hide();
          this.getCoupons(1);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    openModal(item) {
      if (item !== "") {
        this.tempCoupon = { ...item };
        this.tempCoupon.is_enabled = this.tempCoupon.is_enabled
          ? "true"
          : "false";
        this.original_due_date = this.tempCoupon.due_date;
        this.tempCoupon.due_date = new Date(this.tempCoupon.due_date)
          .toISOString()
          .split("T")[0];
      } else {
        this.tempCoupon = {};
      }

      this.myModal.show();
    },

    closeModal() {
      this.myModal.hide();
    },

    getCoupons(page) {
      this.$http
        .get(`${this.url}/v2/api/${this.api_path}/admin/coupons?page=${page}`)
        .then((res) => {
          this.coupons = res.data.coupons;
          this.couponPagination = res.data.pagination;
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },

    adviseCoupon() {
      if (this.tempCoupon.is_enabled === true) {
        this.tempCoupon.is_enabled = 1;
      } else {
        this.tempCoupon.is_enabled = 0;
      }
      if (this.tempCoupon.id) {
        this.$http
          .put(
            `${this.url}/v2/api/${this.api_path}/admin/coupon/${this.tempCoupon.id}`,
            {
              data: {
                title: this.tempCoupon.title,
                is_enabled: this.tempCoupon.is_enabled,
                percent: parseInt(this.tempCoupon.percent),
                due_date: Number(Date.parse(this.tempCoupon.due_date) ),
                code: this.tempCoupon.code,
              },
            }
          )
          .then(() => {
            alert("修改優惠券成功");
            this.myModal.hide();
            this.getCoupons();
            this.loadingCircle();
          })
          .catch((err) => {
            console.log(err.response.data.message);
          });
      } else {
        this.tempCoupon.due_date = Date.parse(this.tempCoupon.due_date);
        this.$http
          .post(`${this.url}/v2/api/${this.api_path}/admin/coupon`, {
            data: {
              title: this.tempCoupon.title,
              is_enabled: this.tempCoupon.is_enabled,
              percent: this.tempCoupon.percent,
              due_date: this.tempCoupon.due_date,
              code: this.tempCoupon.code,
            },
          })
          .then(() => {
            alert("優惠券建立成功");
            this.myModal.hide();
            this.getCoupons();
            this.loadingCircle();
          })
          .catch((err) => {
            console.log(err.response.data.message);
          });
      }
    },

    deleteCoupon(id) {
      this.$http
        .delete(`${this.url}/v2/api/${this.api_path}/admin/coupon/${id}`)
        .then(() => {
          alert("已刪除優惠券");
          this.loadingCircle();
          this.getCoupons(1);
        });
    },

  },

  mounted() {
    this.myModal = new Modal(this.$refs.couponModal);
    this.loadingCircle();
    this.getCoupons(1);

  },
};
</script>
