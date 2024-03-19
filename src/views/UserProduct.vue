<template>
  <nav-bar></nav-bar>
  <div class="container-fluid py-48 bg-footer">
    <div class="container">
      <div class="row">
        <div class="col-4" v-for="product in userProducts" :key="product.id">
          <div class="card mb-24" style="width: 18rem; height: 36rem">
            <img
              :src="product.imageUrl"
              class="card-img-top"
              alt="商品圖片"
              style="height: 24rem; object-fit: cover"
            />
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title">產品名稱：{{ product.title }}</h5>
              <p class="card-text">產品描述：{{ product.description }}</p>
              <p class="card-text">產品特價：{{ product.price }}</p>
              <a
                href="#"
                class="btn btn-outline-primary d-flex justify-content-center"
                @click.prevent="addToCart(product.id)"
                >加入購物車</a
              >
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
import NavBar from "@/components/NavBar.vue"

export default {
  data() {
    return {
      userProducts: [],
      api: import.meta.env.VITE_API,
      api_path: import.meta.env.VITE_PATH,
    };
  },

  components: { PageFooter, NavBar },

  methods: {
    getProducts() {
      this.$http
        .get(`${this.api}/api/${this.api_path}/products/all`)
        .then((res) => {
          this.userProducts = res.data.products;
          console.log(res);
        });
    },

    addToCart(product_id) {
      this.$http.post(`${this.api}/v2/api/${this.api_path}/cart`, {
        data: {
          product_id,
          qty: 1,
        },
      })
      .then(()=>{
        alert("成功加入購物車")
      })
      .catch((err)=>{
        console.log(err)
      })
    },
  },

  mounted() {
    this.getProducts();
  },
};
</script>