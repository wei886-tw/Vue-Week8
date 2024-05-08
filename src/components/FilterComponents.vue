<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <div class="btn-group mb-32" v-on="filter">
        <a
          href="#"
          class="btn btn-secondary btn-lg"
          aria-current="page"
          @click="filter('所有產品')"
          :class="{ 'btn-secondary': isActive }"
          >所有產品</a
        >
        <a
          href="#"
          class="btn btn-footer btn-lg"
          @click="filter('筆電')"
          >筆電</a
        >
        <a href="#" class="btn btn-footer btn-lg" @click="filter('手機')"
          >手機</a
        >
        <a href="#" class="btn btn-footer btn-lg" @click="filter('平板')"
          >平板</a
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
      isActive: false,
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
        this.isActive = true;
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

