<template>
  <div class="container-fluid px-0">
    <NavBar />
  </div>

  <div class="container-fluid px-0">
    <div class="container-fluid px-0">
      <img
        src="/pic/store-resized.png"
        alt=""
        width="100%"
        height="540px"
        style="object-fit: cover"
        class="mb-48"
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-delay="0"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      />
    </div>
    <div class="container mb-48">
      <div class="row">
        <div
          class="col-sm-12 d-md-none mb-sm-16"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="0"
          data-aos-duration="2000"
          data-aos-easing="ease-in-sine"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <img
            src="/pic/open.jpeg"
            alt="開門圖"
            width="100%"
            height="360px"
            style="object-fit: cover"
            class="mb-16"
          />
        </div>
        <div
          class="col-sm-12 col-md-6"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="0"
          data-aos-duration="2000"
          data-aos-easing="ease-in-sine"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <h3 class="fs-24 fs-md-32 tc-sans mb-sm-16">歡迎來到 3C Reuse</h3>
          <p class="fs-16 fs-md-24 tc-sans">
            您好！如果您正在尋找性價比超高的二手
            3C產品，那麼您來對地方了！我們是一個經驗豐富的團隊，在這裡為您提供各種優質的二手電子產品，無論您是需要手機、筆記型電腦、平板電腦還是其他電子設備，我們都能滿足您的需求。
          </p>
        </div>
        <div
          class="d-none d-md-block col-md-6 mb-sm-16 mb-md-none"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="0"
          data-aos-duration="2000"
          data-aos-easing="ease-in-sine"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <img
            src="/pic/open.jpeg"
            alt="開門圖"
            width="100%"
            height="360px"
            style="object-fit: cover"
          />
        </div>
      </div>
    </div>

    <div class="container mb-48">
      <div class="row">
        <div
          class="col-sm-12 col-md-6 mb-16 mb-md-none"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="0"
          data-aos-duration="2000"
          data-aos-easing="ease-in-sine"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <img
            src="/pic/pc.jpg"
            alt="電腦圖"
            width="100%"
            height="100%"
            style="object-fit: cover; filter: saturate(50%)"
          />
        </div>
        <div
          class="col-sm-12 col-md-6 d-flex flex-column mb-sm-24"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="0"
          data-aos-duration="2000"
          data-aos-easing="ease-in-sine"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <h3 class="fs-24 fs-md-32 tc-sans mb-16">電腦</h3>
          <p class="fs-16 fs-md-24 tc-sans mb-16">
            如果您需要一台便攜輕薄的筆記型電腦來辦公或者學習，我們也有各種規格和型號的二手筆記型電腦可供選擇。無論您是需要一台性能強悍的遊戲本還是一台適合日常辦公的輕薄本，我們都能滿足您的需求。
          </p>
          <div class="container mt-auto px-0">
            <button
              class="btn btn-footer fs-16 fs-md-24 tc-sans w-100"
              @click="goToShop('pc')"
            >
              前往電腦賣場
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container mb-48">
      <div class="row">
        <div
          class="col-sm-12 d-md-none mb-16"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="0"
          data-aos-duration="2000"
          data-aos-easing="ease-in-sine"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <img
            src="/pic/phone.jpg"
            alt="手機圖"
            width="100%"
            height="100%"
            style="object-fit: cover; filter: saturate(50%)"
          />
        </div>
        <div
          class="col-sm-12 col-md-6 d-flex flex-column mb-16"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="0"
          data-aos-duration="2000"
          data-aos-easing="ease-in-sine"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <h3 class="fs-24 fs-md-32 tc-sans mb-16">手機</h3>
          <p class="fs-16 fs-md-24 tc-sans mb-16">
            我們擁有各種品牌和型號的二手手機，從經典的 iPhone
            到功能強大的安卓手機，無論您是需要一部用於日常通訊還是用於遊戲和娛樂，我們都能幫您找到心儀的手機。
          </p>
          <div class="container mt-auto px-0">
            <button
              class="btn btn-footer fs-16 fs-md-24 tc-sans mt-auto w-100"
              @click="goToShop('phone')"
            >
              前往手機賣場
            </button>
          </div>
        </div>
        <div
          class="d-none d-md-block col-md-6 mb-sm-24"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="0"
          data-aos-duration="2000"
          data-aos-easing="ease-in-sine"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <img
            src="/pic/phone.jpg"
            alt="手機圖"
            width="100%"
            height="100%"
            style="object-fit: cover; filter: saturate(50%)"
          />
        </div>
      </div>
    </div>

    <div class="container mb-48">
      <div class="row">
        <div
          class="col-sm-12 col-md-6 mb-16 d-flex flex-column"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="0"
          data-aos-duration="2000"
          data-aos-easing="ease-in-sine"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <img
            src="/pic/ipad.jpg"
            alt="平板圖"
            width="100%"
            height="100%"
            style="object-fit: cover; filter: saturate(50%)"
          />
        </div>
        <div
          class="col-sm-12 col-md-6 d-flex flex-column mb-sm-24"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="0"
          data-aos-duration="2000"
          data-aos-easing="ease-in-sine"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          <h3 class="fs-24 fs-md-32 tc-sans mb-16">平板電腦</h3>
          <p class="fs-16 fs-md-24 tc-sans mb-16">
            平板電腦已經成為了日常生活中必不可少的電子設備之一，我們也提供各種型號和品牌的二手平板電腦，從
            iPad 到安卓平板，您可以在這裡找到適合您的平板電腦。
          </p>
          <div class="container mt-auto px-0">
            <button
              class="btn btn-footer fs-16 fs-md-24 tc-sans w-100"
              @click="goToShop('pad')"
            >
              前往平板賣場
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="container mb-48"
    data-aos="flip-right"
    data-aos-offset="200"
    data-aos-delay="0"
    data-aos-duration="2000"
    data-aos-easing="ease-in-sine"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
  >
    <p class="fs-24 fs-md-32">顧客評論</p>
    <SwiperComponent />
  </div>

  <div class="container-fluid px-0">
    <PageFooter />
  </div>

  <div class="container">
    <router-view />
  </div>
</template>

<script>
import PageFooter from "@/components/PageFooter.vue";
import NavBar from "@/components/NavBar.vue";
import SwiperComponent from "@/components/SwiperComponent.vue";

export default {
  components: { PageFooter, NavBar, SwiperComponent },
  data() {
    return {
      url: import.meta.env.VITE_API,
      api_path: import.meta.env.VITE_PATH,
      final_total: "",
      isHover: false,
      articles: [],
      newArticles: [],
      isLoading: true,
      fullPage: false,
      swiperEl: "",
    };
  },

  methods: {
    getCoupon() {
      this.$http
        .post(`${this.url}/v2/api/${this.api_path}/coupon`, {
          data: {
            code: "test5",
          },
        })
        .then((res) => {
          let loader = this.$loading.show({
            // Optional parameters
            container: this.fullPage ? null : this.$refs.formContainer,
            canCancel: true,
            onCancel: this.onCancel,
          });
          setTimeout(() => {
            loader.hide();
            alert("成功領取折價券，商品可打 75 折！");
            this.final_total = res.data.data.final_total;
            this.$emit("finalTotal", this.final_total);
          }, 250);
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },

    goToShop(type) {
      if (type === "pc") {
        this.$router.push(`/userProductPc`);
      } else if (type === "pad") {
        this.$router.push(`/userProductPad`);
      } else if (type === "phone") {
        this.$router.push(`/userProductPhone`);
      }
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: true,
        onCancel: this.onCancel,
      });
      setTimeout(() => {
        loader.hide();
      }, 1000);
    },

    getArticles() {
      this.$http
        .get(`${this.url}/v2/api/${this.api_path}/articles`)
        .then((res) => {
          this.articles = res.data.articles;
          this.newArticles = JSON.parse(JSON.stringify(this.articles));
        });
    },
  },

  mounted() {
    this.getArticles();
    window.scroll(0, 0);
  },
};
</script>


<style >
.tc-serif {
  font-family: "Noto Serif TC" !important;
  src: url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Noto+Serif+TC&display=swap'");
}

.noto-serif {
  font-family: "Noto Serif TC", serif;
  font-weight: normal;
  font-style: normal;
}

.noto-sans {
  font-family: "Noto Sans TC", sans-serif;
  font-optical-sizing: auto;
  font-weight: normal;
  font-style: normal;
}

.tc-sans {
  font-family: "Noto Sans TC" !important;
  src: url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Noto+Serif+TC&display=swap");
}
</style>

<style lang="scss" scoped>
.btn-white:hover {
  background-color: black;
  color: white;
  border: black;
}

.btn-footer:hover {
  background-color: black;
  color: white;
}

:root {
  overflow-x: hidden;
}

@media screen and (max-width: 767px) {
  [data-aos] {
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>