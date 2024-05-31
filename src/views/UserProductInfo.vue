<template>
  <NavBar />
  <div class="container-fluid">
    <div class="container py-32">
      <div class="row g-16 mb-48" v-if="product">
        <div
          class="col-lg-2 d-none d-lg-flex flex-lg-column">
          <div class="container pt-60 ">
            <img :src="img" alt="多圖" style="width: 100%; height: 120px" v-for="(img, index) in product.imagesUrl" @click="changeImg(index)" 
            :key="img" class="mb-36 border border-4 border-hover" /> 
          </div>
        </div>

        <div class="col-12 col-lg-6">
          <img
            :src="product.imageUrl"
            alt="首圖"
            style="width: 100%; height: 100%; object-fit: cover"
          />
        </div>

        <div
          class="col-12  d-lg-none d-sm-flex flex-sm-row ">
          <div class="container pt-60">
            <img :src="img" alt="多圖" style="width: 20%; " v-for="(img, index) in product.imagesUrl" @click="changeImg(index)"
            :key="img" class="me-36 border border-4" /> 
          
          </div>
        </div>

        <div class="col-12 col-lg-4">
          <div
            class="container d-flex flex-column justify-content-between pt-80"
          >
            <h1 class="fs-24 fs-lg-48 fw-bold">{{ product.title }}</h1>
            <p class="mb-16 new-line" style="color: #8e8e8e;">{{ product.description }}</p>
            <p class="mb-16 new-line">{{ product.content }}</p>
            <div class="container d-flex px-0 mb-16">
              <p class="fs-lg-20 text-danger me-36">
                特價： {{ product.price * qty }}
              </p>
              <span class="fs-lg-20"
                ><del>原價： {{ product.origin_price * qty }}</del></span
              >
            </div>
            <div class="container px-0 d-flex justify-content-between">
              <select
                name="num"
                id="num"
                style="width: 40%"
                ref="selectNum"
                @change="changeQty"
              >
                <option :value="num" v-for="num in 10" :key="num">
                  {{ num }}
                </option>
              </select>

              <button
                class="btn btn-primary"
                style="width: 40%"
                @click="addToCart(product.id)"
              >
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-10">
          <p class="fs-lg-48">相似產品</p>
        </div>
        <div class="col-2">
          <router-link to="/userProduct" class="fs-lg-24 text-dark">瀏覽更多</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { myMixin } from "@/js/mixin";

export default {
  components: { NavBar },
  props: ["id"],
  mixins: [myMixin],

  data() {
    return {
      url: import.meta.env.VITE_API,
      api_path: import.meta.env.VITE_PATH,
      product: {},
      qty: 1,
    };
  },

  methods: {
    getProduct(id) {
      this.$http
        .get(`${this.url}/v2/api/${this.api_path}/product/${id}`)
        .then((res) => {
          this.product = res.data.product;
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },

    changeQty() {
      this.qty = parseInt(this.$refs.selectNum.value);
    },

    addToCart(product_id) {
      this.$http
        .post(`${this.url}/v2/api/${this.api_path}/cart`, {
          data: {
            product_id,
            qty: this.qty,
          },
        })
        .then(() => {
          alert("成功加入購物車");
        })
        .catch((err) => {
          console.log(err);
        });
    },

    changeImg(index) {
      this.product.imageUrl = this.product.imagesUrl[index];
    },
  },


  mounted() {
    this.getProduct(this.id);
    this.loadingCircle();
  },
};
</script>


<style lang="css" scoped>
  .new-line{
    white-space:pre-wrap ;
  }

  .border:hover{
    border: 4px solid black;
  }

  .hover-element {
  border: 4px solid  #f3f2ee;
}

.hover-element:hover {
  border: 4px solid black;
}
</style>