<template>
  <nav-bar></nav-bar>
  <div class="container-fluid py-48 bg-footer">
    <div class="container pt-60">
      <div class="row">
        <div
          class="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
          v-for="product in userProducts"
          :key="product.id"
          @click="tempProduct = product"
        >
          <div
            class="card mb-24 py-16 px-16"
            style="width: 18rem; height: 36rem"
          >
            <img
              :src="product.imageUrl"
              class="card-img-top"
              alt="商品圖片"
              style="height: 384px; width: 100%; object-fit: cover"
            />
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title">產品名稱：{{ product.title }}</h5>
              <p class="card-text">產品描述：{{ product.description }}</p>
              <p class="card-text">特價：{{ product.price }} 元</p>
              <div class="container px-0">
                <button
                  class="btn btn-sm border border-2 me-12"
                  @click.prevent="addToCart(product.id)"
                >
                  加入購物車
                </button>
                <button class="btn btn-sm border border-2" @click="openModal">
                  詳細資訊
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- modal -->
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="modal" tabindex="-1" ref="myModal" id="myModal">
          <div
            class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
          >
            <div class="modal-content">
              <div class="container">
                <!-- <button
                  type="button"
                  class="btn-close border-0 ms-0"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button> -->
              </div>
              <div v-if="tempProduct.title">
                <div class="card">
                  <img
                    :src="tempProduct.imageUrl"
                    class="card-img-top primary-image img ps-128 pt-16"
                    alt="主圖"
                    style="height: 50%; width: 80%; object-fit: cover"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      {{ tempProduct.title }}
                      <span class="badge bg-footer ms-2 text-white">{{
                        tempProduct.category
                      }}</span>
                    </h5>
                    <p class="card-text">
                      商品描述：{{ tempProduct.description }}
                    </p>
                    <p class="card-text">商品內容：{{ tempProduct.content }}</p>
                    <p>特價： {{ tempProduct.price }} 元</p>
                    <div class="container px-0">
                      <div class="container d-flex justify-content-between">
                        <button
                          class="btn border border-2 me-0"
                          @click="addToCart(tempProduct.id)"
                        >
                          加入購物車
                        </button>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <span
                    v-for="(img, index) in tempProduct.imagesUrl"
                    :key="index"
                  >
                    <img
                      :src="img"
                      alt="副圖"
                      class="images m-2 img"
                      style="height: 150px"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid px-0">
    <PageFooter />
  </div>
</template>

<script>
import PageFooter from "@/components/PageFooter.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  data() {
    return {
      userProducts: [],
      api: import.meta.env.VITE_API,
      api_path: import.meta.env.VITE_PATH,
      myModal: null,
      tempProduct: {},
    };
  },

  props: [],
  components: { PageFooter, NavBar },

  methods: {
    getProducts() {
      this.$http
        .get(`${this.api}/api/${this.api_path}/products/all`)
        .then((res) => {
          this.userProducts = res.data.products;
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
    this.myModal = new bootstrap.Modal("#myModal");
  },
};
</script>