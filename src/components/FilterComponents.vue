<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <div class="btn-group mb-32" v-on="filter">
        <a
          href="#"
          class="btn btn-secondary active btn-lg"
          aria-current="page"
          @click="filter('所有產品')"
          >所有產品</a
        >
        <a href="#" class="btn btn-footer btn-lg" @click="filter('書籍')"
          >書籍</a
        >
        <a href="#" class="btn btn-footer btn-lg" @click="filter('飲料')"
          >飲料</a
        >
        <a href="#" class="btn btn-footer btn-lg" @click="filter('甜點')"
          >甜點</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allItem: [],
      filterItem: [],
      api: import.meta.env.VITE_API,
      api_path: import.meta.env.VITE_PATH,
    };
  },

  methods: {
    filter(category) {
      if (category === "所有產品") {
        this.filterItem = this.allItem.map((product) => product);
      } else {
        this.filterItem = this.allItem.filter(
          (product) => product.category === category
        );
      }
      this.$emit("emitFilterItem", this.filterItem);
    },

    getAllProducts() {
      this.$http
        .get(`${this.api}/api/${this.api_path}/products/all`)
        .then((res) => {
          this.allItem = res.data.products;
        })
        .catch((err) => {
          alert(err.response.message);
        });
    },
  },

  mounted() {
    this.getAllProducts();
  },
};
</script>