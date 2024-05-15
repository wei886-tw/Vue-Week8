<template>
  <div class="container-fluid px-0">
    <NavBar />
  </div>
  <div class="container-fluid px-0">
    <div class="container">
      <div class="row">
        <div class="col-2 d-none d-lg-block">
          <ul class="list-unstyled mt-128 gy-16">
            <li class="fs-lg-24 mb-16">
              <a href="" class="text-dark a-hover">全部文章</a>
            </li>
            <li class="fs-lg-24 mb-16">
              <a href="" class="text-dark a-hover">最新消息</a>
            </li>
            <li class="fs-lg-24 mb-16">
              <a href="" class="text-dark a-hover">本站獨家</a>
            </li>
            <li class="fs-lg-24 mb-16">
              <a href="" class="text-dark a-hover">活動消息</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-10">
          <h3 class="fs-32 py-24 text-start">全部文章</h3>
          <hr />
          <ul
            class="list-unstyled gy-16 d-flex d-block d-lg-none justify-content-between"
          >
            <li class="fs-16 fs-md-24 mb-16">
              <a href="" class="text-dark a-hover">全部文章</a>
            </li>
            <li class="fs-16 fs-md-24 mb-16">
              <a href="" class="text-dark a-hover">最新消息</a>
            </li>
            <li class="fs-16 fs-md-24 mb-16">
              <a href="" class="text-dark a-hover">本站獨家</a>
            </li>
            <li class="fs-16 fs-md-24 mb-16">
              <a href="" class="text-dark a-hover">活動消息</a>
            </li>
            <hr />
          </ul>
          <ul
            class="list-unstyled d-flex justify-content-between row row-cols-1 row-cols-md-2 row-sm-cols-1"
          >
            <div
              class="mb-16 d-flex flex-column justify-content-between"
              v-for="article in articles"
              :key="article.id"
            >
              <li class="">
                <router-link :to="`/userArticle/${article.id}`">
                  <div class="mb-8 d-flex flex-column justify-content-between">
                    <img
                      :src="article.image"
                      alt="文章圖片"
                      style="height: 240px; width: 100%; object-fit: cover"
                      class="mb-16"
                    />
                    <h3 class="fw-bold text-dark">
                      {{ article.title }}
                    </h3>
                    <h4 style="color: #7b7b7b">作者： {{ article.author }}</h4>
                    <p
                      class="overflow-hidden text-dark w-100"
                      style="height: 120px"
                    >
                      {{ article.description }}
                    </p>
                  </div>
                </router-link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>

    <PageFooter />
  </div>
  <RouterView />

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
      isActive: true,
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
          console.log(this.articles);
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

<style lang="scss" scoped>
a.special:hover {
  text-decoration: underline black;
}
</style>>

