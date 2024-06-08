<template>
  <div class="container-fluid px-0">
    <admin-nav-bar></admin-nav-bar>
  </div>
  <div class="container py-48">
    <h2 class="text-center fs-16 fs-md-24 fs-lg-32">後台產品列表</h2>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="80">分類</th>
          <th>產品名稱</th>
          <th width="120">售價</th>
          <th width="120">啟用與否</th>
          <th width="150">修改產品內容</th>
          <th width="150">刪除產品</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in allProducts" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>
            {{ item.price }}
          </td>
          <td>
            <span v-if="item.is_enabled" class="">啟用</span>
            <span v-else class="text-danger">未啟用</span>
          </td>
          <td>
            <button class="btn btn-success" @click="openModal(item.id)">
              修改產品內容
            </button>
          </td>
          <td>
            <button class="btn btn-danger" @click="deleteProduct(item.id)">
              刪除產品
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="container">
    <div
      class="modal fade"
      id="modal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      ref="detailModal"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header bg-dark">
            <h1 class="modal-title fs-32 text-white" id="exampleModalLabel">
              修改產品
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form ref="form">
              <div class="row justify-content-center">
                <div class="col-10">
                  <label class="fs-24 mb-8 fw-bold" for="title">產品名稱</label>
                  <input
                    type="text"
                    class="rounded mb-32 form-check-input"
                    style="width: 100%; height: 40px"
                    v-model="title"
                    name="title"
                    id="title"
                  />
                </div>
              </div>

              <div class="row justify-content-center">
                <div class="col-5">
                  <label class="fs-24 mb-8 fw-bold" for="title">產品原價</label>
                  <input
                    type="number"
                    class="rounded mb-32 form-check-input"
                    style="width: 100%; height: 40px"
                    v-model="origin_price"
                    name="origin_price"
                    id="origin_price"
                  />
                </div>
                <div class="col-5">
                  <label class="fs-24 mb-8 fw-bold" for="title">產品特價</label>
                  <input
                    type="number"
                    class="rounded mb-32 form-check-input"
                    style="width: 100%; height: 40px"
                    v-model="price"
                    name="price"
                    id="price"
                  />
                </div>
              </div>

              <div class="row mb-32 justify-content-center">
                <div class="col-10">
                  <label class="fs-24 fw-bold" for="articleCategory">
                    產品分類
                  </label>
                  <input
                    type="text"
                    class="rounded mb-32 form-check-input"
                    style="width: 100%; height: 40px"
                    placeholder="請填入產品分類"
                    name="category"
                    id="category"
                    v-model="category"
                  />
                </div>

                <div class="col-10">
                  <label class="fs-24 fw-bold" for="description"
                    >產品簡述</label
                  >
                  <textarea
                    v-model="description"
                    class="rounded mb-24 form-check-input"
                    style="width: 100%; height: 120px"
                    placeholder="請填入 100 字內描述"
                    name="description"
                    id="description"
                  />
                  <label class="fs-24 fw-bold" for="description"
                    >產品內容</label
                  >
                  <textarea
                    type="text"
                    v-model="content"
                    class="rounded mb-24 form-check-input"
                    style="width: 100%; height: 240px"
                    placeholder="請輸入產品內容"
                    name="content"
                    id="content"
                  />
                </div>
              </div>

              <div class="row justify-content-center">
                <div class="col-5">
                  <label class="fs-24 fw-bold">主圖預覽</label>
                  <input
                    type="text"
                    name="image"
                    id="image"
                    v-model="imageUrl"
                    class="w-100 rounded mb-16 form-check-input"
                  />
                  <img
                    :src="imageUrl"
                    alt=""
                    style="width: 416px; height: 440px; object-fit: cover"
                  />
                </div>

                <div class="col-5 d-flex flex-column">
                  <div class="row d-flex flex-column justify-content-between">
                    <h3 class="fs-24 fw-bold">多圖預覽</h3>
                    <div
                      class="container"
                      v-for="(image, index) in imagesUrl"
                      :key="image.id"
                    >
                      <input
                        type="text"
                        name="image"
                        id="image"
                        v-model="imagesUrl[index]"
                        class="w-100 rounded mb-16 form-check-input"
                      />

                      <img
                        :src="image"
                        alt="多圖"
                        width="30%"
                        class="border border-2 mb-16"
                      />
                    </div>
                  </div>

                  <h3 class="fs-24 fw-bold">產品狀態</h3>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      v-model="is_enabled"
                    />
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckDefault"
                      >{{ is_enabled ? "產品公開" : "產品不公開" }}</label
                    >
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              關閉
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="adviseProduct(product.id)"
            >
              修改產品
            </button>
          </div>
        </div>
      </div>
    </div>
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
import { myMixin } from "@/js/mixin";
export default {
  components: { AdminNavBar, PageNation },
  mixins: [myMixin],

  data() {
    return {
      allProducts: [],
      url: import.meta.env.VITE_API,
      api_path: import.meta.env.VITE_PATH,
      pagination: {},
      myModal: "",
      product: "",
      title: "",
      category: "",
      origin_price: "",
      price: "",
      unit: "",
      description: "",
      content: "",
      is_enabled: false,
      imageUrl: "",
      imagesUrl: "",
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
          window.scrollTo(0, 0);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },

    openModal(id) {
      this.myModal.show();
      this.loadingCircle();
      this.$http
        .get(`${this.url}/v2/api/${this.api_path}/product/${id}`)
        .then((res) => {
          this.product = res.data.product;
          this.title = res.data.product.title;
          this.category = res.data.product.category;
          this.origin_price = parseInt(res.data.product.origin_price);
          this.price = parseInt(res.data.product.price);
          this.unit = res.data.product.unit;
          this.description = res.data.product.description;
          this.content = res.data.product.content;
          this.is_enabled = res.data.product.is_enabled;
          this.imageUrl = res.data.product.imageUrl;
          this.imagesUrl = res.data.product.imagesUrl;
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },

    adviseProduct(id) {
      this.$http
        .put(`${this.url}/v2/api/${this.api_path}/admin/product/${id}`, {
          data: {
            title: this.title,
            category: this.category,
            origin_price: this.origin_price,
            price: this.price,
            unit: this.unit,
            description: this.description,
            content: this.content,
            is_enabled: this.is_enabled,
            imageUrl: this.imageUrl,
            imagesUrl: this.imagesUrl,
          },
        })
        .then(() => {
          alert("修改產品成功");
          this.getPageProducts(1);
          this.myModal.hide();
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },

    deleteProduct(id) {
      this.$http
        .delete(`${this.url}/v2/api/${this.api_path}/admin/product/${id}`)
        .then(() => {
          alert("刪除產品成功");
        })
        .catch((err) => {
          console.log(err.response.data.message);
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
    this.myModal = new bootstrap.Modal(this.$refs.detailModal);
    this.loadingCircle();
  },
};
</script>