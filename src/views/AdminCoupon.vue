<template>
  <admin-nav-bar></admin-nav-bar>
  <div class="container-fluid px-0">
    <div class="container py-48">
      <div class="container d-flex justify-content-between mb-24">
        <h2 class="fs-32">文章管理</h2>
        <button type="button" class="btn btn-dark">
          <router-link to="/newArticle" class="text-white"
            >建立優惠券</router-link
          >
        </button>
      </div>
      <table class="table mb-162">
        <thead>
          <tr>
            <th scope="col">優惠券標題</th>
            <th scope="col">折價</th>
            <th scope="col">到期日</th>
            <th scope="col">代碼</th>
            <th scope="col">是否啟用</th>
            <th scope="col">修改</th>
            <th scope="col">刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="article in articles" :key="article.id">
            <td>{{ article.title }}</td>
            <td>{{ article.author }}</td>
            <td>{{ article.author }}</td>
            <td>{{ article.author }}</td>
            <td>{{ article.author }}</td>
            <td>{{ article.isPublic ? "是" : "否" }}</td>
            <td>
              <button
                class="btn btn-success"
                @click="goAdviseArticle(article.id)"
              >
                <!-- <router-link :to="`/adviseArticle/${article.id}`"> </router-link> -->
                修改文章
              </button>
            </td>
            <td>
              <button class="btn btn-danger" @click="deleteArticle(article.id)">
                刪除文章
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="container">
        <page-nation
          :pagination="blogPagination"
          :get-page-products="getPageArticle"
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
          <div class="form-group mb-16">
            <label for="title" class="form-label">優惠券名稱</label>
            <textarea
              id="title"
              v-model="title"
              type="text"
              class="form-control"
              placeholder="請輸入優惠券名稱"
            >
            </textarea>
          </div>

          <div class="form-group mb-16">
            <label for="percent" class="form-label">折扣</label>
            <textarea
              id="percent"
              v-model="percent"
              type="number"
              class="form-control"
              placeholder="請輸入折扣"
            >
            </textarea>
          </div>

          <div class="form-group mb-16">
            <label for="due_date" class="form-label">到期日</label>
            <textarea
              id="due_date"
              v-model="due_date"
              type="text"
              class="form-control"
              placeholder="請輸入到期日，按照'年-月-日'格式"
            >
            </textarea>
          </div>

          <div class="form-group mb-16">
            <label for="code" class="form-label">優惠券代碼</label>
            <textarea
              id="code"
              v-model="code"
              type="text"
              class="form-control"
              placeholder="請輸入優惠券代碼"
            >
            </textarea>
          </div>

          <div class="form-group mb-16">
            <label for="is_enabled" class="form-label">是否啟用優惠券</label>
            <textarea
              id="is_enabled"
              v-model="is_enabled"
              type="number"
              class="form-control"
              placeholder=""
            >
            </textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="createCoupon">Save changes</button>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import AdminNavBar from "@/components/AdminNavBar.vue";

export default {
  components: { AdminNavBar },
  data() {
    return {
      api_path: import.meta.env.VITE_PATH,
      url: import.meta.env.VITE_API,
      title: "",
      is_enabled: "",
      percent: "",
      due_date: "",
      code: "",
    };
  },

  methods: {
    createCoupon() {
      this.date = new Date(this.date).getTime();
      this.is_enabled = parseInt(this.is_enabled)
      this.$http
        .post(`${this.url}/v2/api/${this.api_path}/admin/coupon`, {
          data: {
            title: this.title,
            is_enabled: this.is_enabled,
            percent: this.percent,
            due_date: this.due_date,
            code: this.code,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
  },

  mounted() {
    const myModal = new bootstrap.Modal(this.$refs.couponModal);
    myModal.show();
  },
};
</script>