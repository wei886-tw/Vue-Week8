<template>
  <NavBar/>
  <div class="container-fluid bg-footer px-0 pb-48">
    <div class="mb-48">
      <img
        src="/pic/reading.png"
        alt=""
        width="100%"
        height="450"
        style="object-fit: cover; filter: saturate(80%)"
      />
    </div>

    <div class="container mb-48">
      <div class="row">
        <div class="col-sm-12 col-md-6 mb-sm-24">
          <img
            src="/pic/bookshelf.png"
            alt=""
            width="100%"
            height="360"
            style="object-fit: cover"
          />
        </div>
        <div class="col-sm-12 col-md-6">
          <p class="fs-sm-8 fs-16 fs-md-24 tc-sans">
            在這裡，我們相信每一本書都是一個故事，每一位讀者都是一個冒險者。因此，我們精心挑選了各種類型和風格的書籍，包括經典文學、最新暢銷小說、精美的藝術圖冊、引人入勝的非虛構作品以及充滿啟發性的自助和成長類書籍。無論您是在尋找一本打發閒暇時間的小說，還是想深入探討某個主題的非虛構作品，我們都有您所需的書籍。
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-sm-12 d-md-none mb-sm-24">
          <img
            src="/pic/latte.png"
            alt=""
            width="100%"
            height="360"
            style="object-fit: cover; filter: saturate(50%)"
          />
        </div>
        <div class="col-sm-12 col-md-6">
          <p class="fs-sm-16 fs-16 fs-md-24 tc-sans">
            此外，我們提供舒適的閱讀區域，供您放鬆身心，沉浸在書海中。您可以在這裡品味一杯咖啡或點心，與朋友交流，或者享受孤獨的閱讀時光。我們的店內設計簡潔舒適，讓您能夠專注於書籍和閱讀的魅力。
          </p>
        </div>
        <div class="d-none d-md-block col-md-6">
          <img
            src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width="100%"
            height="360"
            style="object-fit: cover; filter: saturate(50%)"
          />
        </div>
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
};
</script>
