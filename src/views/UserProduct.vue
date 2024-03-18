<template>
  <div class="container py-48 bg-secondary">
    <div class="row">
      <div class="col-4 " v-for="product in userProducts" :key="product.id">
        <div class="card mb-24" style="width: 18rem; height: 36rem; " >
          <img :src="product.imageUrl" class="card-img-top" alt="商品圖片"  style="height:24rem; object-fit: cover;"/>
          <div class="card-body">
            <h5 class="card-title">產品名稱：{{product.title}}</h5>
            <p class="card-text">產品描述：{{product.description}}</p>
            <p class="card-text">產品特價：{{product.price}}</p>
            <a href="#" class="btn btn-outline-primary " >加入購物車</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      userProducts: [],
      api: import.meta.env.VITE_API,
      path: import.meta.env.VITE_PATH,
    };
  },

  methods: {
    getProducts() {
      this.$http
        .get(`${this.api}/api/${this.path}/products/all`)
        .then((res) => {
          this.userProducts = res.data.products;
          console.log(res)
        });
    },
  },

  mounted() {
    this.getProducts();
  },
};
</script>