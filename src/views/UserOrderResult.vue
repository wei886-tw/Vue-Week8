<template>
  <NavBarVue />
  <div class="container-fluid px-0 py-32 vh-100 mb-32">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-lg-8 mx-auto">
          <ol
            class="pay-list pt-32 mb-32 d-flex justify-content-between list-unstyled position-relative"
          >
            <li class="d-flex flex-column align-items-center">
              <p
                class="number number-active d-flex justify-content-center align-items-center mb-8"
              >
                1
              </p>
              <p class="fw-bold mb-0">訂單確認</p>
            </li>
            <li class="d-flex flex-column align-items-center">
              <p
                class="number number-active d-flex justify-content-center align-items-center mb-8"
              >
                2
              </p>
              <p class="fw-bold mb-0">結帳付款</p>
            </li>
            <li class="d-flex flex-column align-items-center">
              <p
                class="number number-active d-flex justify-content-center align-items-center mb-8"
              >
                3
              </p>
              <p class="fw-bold">訂單結果</p>
            </li>
          </ol>

          <p class="mb-32">
            ※ 您的訂單將在付款後開始訂製，付款後，從開始製作到寄出商品為 14
            個工作天。
          </p>
        </div>
      </div>

      <div class="row mb-32">
        <div
          class="container px-0 border-2 border-dark border-top border-bottom mb-32"
        >
          <div class="container d-flex justify-content-between pt-8 mb-8">
            <p>訂單編號：</p>
            <p>{{ id }}</p>
          </div>
          <div class="container d-flex justify-content-between pt-8 mb-8">
            <p>繳費狀態：</p>
            <p>已付款</p>
          </div>
          <div class="container d-flex justify-content-between mb-8">
            <p>訂單總額：</p>
            <p>{{ order.total }}</p>
          </div>
        </div>
      </div>

      <div class="row mb-32">
        <button
          class="btn btn-footer w-75 mx-auto hover"
          @click="backToHomePage"
        >
          返回首頁
        </button>
      </div>
    </div>
  </div>
  <page-footer-vue></page-footer-vue>
</template>

<script>
import NavBarVue from "@/components/NavBar.vue";
import PageFooterVue from "@/components/PageFooter.vue";

export default {
  props: ["id"],
  components: {
    NavBarVue,
    PageFooterVue,
  },

  data() {
    return {
      api_path: import.meta.env.VITE_PATH,
      url: import.meta.env.VITE_API,
      order: "",
    };
  },

  methods: {
    getOrderResult() {
      this.$http
        .get(`${this.url}/v2/api/${this.api_path}/order/${this.id}`)
        .then((res) => {
          this.order = res.data.order;
        })
        .catch((err) => {
          console.log(err.data.response.message);
        });
    },

    backToHomePage() {
      this.$router.push(`/`)
    },
  },

  mounted() {
    this.getOrderResult();
  },
};
</script>

<style >
.number {
  border: 1px solid #000;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background-color: white;
  z-index: 1;
  font-weight: bold;
}
@media (min-width: 768px) {
  .number {
    width: 48px;
    height: 48px;
    font-size: 24px;
  }
}
.number-active {
  background-color: black;
  color: white;
}

.pay-list::before {
  content: "";
  width: 90%;
  height: 1px;
  background-color: black;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  position: absolute;
  z-index: 1;
}

.btn.hover:hover {
  background-color: black;
  color: white;
}
</style>