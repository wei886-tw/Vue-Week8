<template>
  <div class="container-fluid px-0">
    <NavBar />
  </div>
  <div class="container-fluid px-0 pb-48">
    <div
      class="mb-48"
      data-aos="zoom-in-up"
      data-aos-offset="200"
      data-aos-delay="0"
      data-aos-duration="2000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
    >
      <img
        src="/pic/store-1.jpg"
        alt=""
        width="100%"
        height="450"
        style="object-fit: cover; filter: saturate(80%)"
      />
    </div>
  </div>

  <div class="container-fluid">
    <div class="container mb-48">
      <div class="row">
        <div
          class="col-sm-8 col-lg-10 mx-auto"
          data-aos="flip-up"
          data-aos-offset="200"
          data-aos-delay="0"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top"
        >
          <p class="fs-24 fs-md-32 tc-sans mb-16 fw-bold">品牌故事</p>
          <p class="fs-16 fs-md-24 tc-sans">
            3C Reuse
            的故事源自於創辦人王志強的一個靈感。作為一名科技愛好者和環保倡導者，王志強深知電子垃圾對環境的影響。有一次，他在清理家中的舊手機、平板電腦和其他電子設備時，突然想到，這些被遺忘的“舊物”其實還擁有著很高的價值，只要稍加修繕，就能重新發揮作用。於是，他決定創立一家專門收購、翻新和銷售二手3C產品的店鋪，讓這些被遺棄的設備重獲新生。
          </p>
        </div>
      </div>
    </div>
    <div class="container mb-48">
      <div class="row">
        <div
          class="col-sm-8 col-lg-10 mx-auto"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="0"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top"
        >
          <p class="fs-24 fs-md-32 tc-sans mb-16 fw-bold">品質保證</p>
          <p class="fs-16 fs-md-24 tc-sans">
            我們所有的二手產品都經過嚴格的品質檢查和測試，確保其性能穩定和品質優良。您可以放心購買，我們提供的每一台產品都有品質保證。
          </p>
        </div>
      </div>
    </div>

    <div class="container mb-16">
      <div class="row">
        <div
          class="col-sm-8 col-lg-10 mx-auto"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="4000"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top"
        >
          <p class="fs-24 fs-md-32 tc-sans mb-16 fw-bold">聯絡我們</p>
        </div>
      </div>
    </div>
  </div>

  <div class="container mb-48">
    <div class="row d-flex justify-content-center">
      <div
        class="col-sm-8 col-lg-5 d-flex flex-column"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="4000"
        data-aos-duration="2000"
        data-aos-easing="ease-in-sine"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top"
      >
        <p class="fs-16 fs-md-24 tc-sans mb-16">
          謝謝您對 3C Reuse
          認可與提攜，我們歡迎各種問題及二手收購，誠摯邀請您來信提案，我們將有專門窗口與您聯繫。
        </p>

        <button
          type="submit"
          class="btn btn-dark mt-auto d-none d-lg-block"
          @click="sendEmail"
        >
          寄出信件
        </button>
      </div>

      <div class="col-sm-8 col-lg-5">
        <v-form
          v-slot="{ errors }"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="4000"
          data-aos-duration="2000"
          data-aos-easing="ease-in-sine"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top"
        >
          <div class="container px-0 mb-16">
            <v-field
              type="text"
              id="title"
              name="標題"
              class="w-100 border rounded form-control"
              placeholder="來信標題"
              style="height: 48px"
              v-model="mailTitle"
              :class="{ 'is-invalid': errors['標題'] }"
              rules="required"
            />
            <error-message name="標題" class="invalid-feedback"
              ><span class="text-danger ps-8">標題必填</span></error-message
            >
          </div>

          <div class="container px-0 mb-16">
            <v-field
              type="text"
              id="sender"
              name="寄件者"
              class="w-100 border rounded form-control"
              placeholder="姓名"
              style="height: 48px"
              v-model="mailSender"
              :class="{ 'is-invalid': errors['寄件者'] }"
              rules="required"
            />
            <error-message name="寄件者" class="invalid-feedback">
              <span class="text-danger ps-8">姓名必填</span></error-message
            >
          </div>

          <div class="container px-0 mb-16">
            <v-field
              name="來信內容"
              id="message"
              class="w-100 px-8 py-8 border rounded form-control mb-16"
              as="textarea"
              placeholder="來信內容"
              type="text"
              rows="10"
              v-model="mailMessage"
              :class="{ 'is-invalid': errors['來信內容'] }"
              rules="required"
            >
            </v-field>
            <error-message name="來信內容" class="invalid-feedback"
              ><span class="text-danger ps-8">信件內容必填</span></error-message
            >
            <button
              type="submit"
              class="btn btn-dark mt-auto d-block d-lg-none w-100"
              @click="sendEmail"
            >
              寄出信件
            </button>
          </div>
        </v-form>
      </div>
    </div>
  </div>

  <page-footer></page-footer>
  <RouterView />
</template>


<script>
import NavBar from "@/components/NavBar.vue";
import { RouterView } from "vue-router";
import PageFooter from "../components/PageFooter.vue";

export default {
  components: { PageFooter, RouterView, NavBar },
  data() {
    return {
      mailSender: "",
      mailTitle: "",
      mailMessage: "",
    };
  },

  methods: {
    sendEmail() {
      if (
        this.mailMessage !== "" &&
        this.mailTitle !== "" &&
        this.mailMessage !== ""
      ) {
        window.open(
          `mailto:3cReuse@gmail.com?&subject=${this.mailTitle}&body=${this.mailMessage}`,
          "_blank"
        );
        this.$refs.cooperationForm.resetForm();
      } else {
        alert("請填寫表格，欄位皆不得留空");
      }
    },
  },

  mounted() {
    window.scroll(0, 0);
  },
};
</script>