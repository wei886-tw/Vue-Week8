<template>
  <div class="container-fluid px-0">
    <nav-bar></nav-bar>
  </div>
  <div class="container-fluid px-0">
    <div class="container px-0 ">
      <div class="row">
        <div class="col-2">
          <ul class="list-unstyled mt-60 gy-16">
            <li class="fs-24 mb-16">全部文章</li>
            <li class="fs-24 mb-16">最新消息</li>
            <li class="fs-24 mb-16">活動講座</li>
            <!-- <li class="fs-24 mb-16">專欄文章</li> -->
          </ul>
        </div>

        <div class="col-10">
          <h3 class="fs-32 py-24 text-start">全部文章</h3>
          <ul class="list-unstyled d-flex justify-content-between row row-cols-2">
            <div class="mb-16" v-for="article in articles" :key="article.id + 1">
              <li class="">
                <div class="mb-8" style="width: 440px; object-fit: cover">
                  <img :src="article.image" alt="文章圖片" style="width: 100%" />
                </div>
                <h3 class="fw-bold">{{ article.title }}</h3>
                <h4 class="">作者： {{ article.author }}</h4>
                <p class="overflow-hidden" style="height: 120px">{{ article.description }}</p>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>

    <div class="container-fluid px-0">
      <PageFooter />
    </div>
  </div>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import PageFooter from "@/components/PageFooter.vue";

export default {
  data() {
    return {
      url: import.meta.env.VITE_API,
      api_path: import.meta.env.VITE_PATH,
      articles: {},
      pagination: {},
    };
  },
  components: { NavBar, PageFooter },

  methods: {
    getArticles() {
      this.$http(`${this.url}/v2/api/${this.api_path}/articles`)
        .then((res) => {
          console.log(res);
          this.articles = res.data.articles;
          this.pagination = res.data.pagination;
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
  },

  mounted() {
    this.getArticles();
  },
};
</script>