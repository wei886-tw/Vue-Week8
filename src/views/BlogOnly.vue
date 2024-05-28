<template>
  <div class="container-fluid px-0">
    <NavBar />
  </div>
  <div class="container-fluid py-48 px-0">
    <div class="container pt-32">
      <div class="row d-flex">
        <SideNavbar class="col-2"/>
        <div class="col-lg-10">
          <h3 class="fs-40 py-24 text-start">本站獨家</h3>
          <hr />
          <ul
            class="list-unstyled gy-16 d-flex d-block d-lg-none justify-content-between"
          >
            <li class="fs-16 fs-md-24 mb-16">
              <a href="" class="text-dark hover">全部文章</a>
            </li>
            <li class="fs-16 fs-md-24 mb-16">
              <a href="" class="text-dark hover">最新消息</a>
            </li>
            <li class="fs-16 fs-md-24 mb-16">
              <a href="" class="text-dark hover">獨家消息</a>
            </li>
            <li class="fs-16 fs-md-24 mb-16">
              <a href="" class="text-dark hover">活動講座</a>
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
import SideNavbar from "@/components/SideNavbar.vue";

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
  components: { NavBar, PageFooter, SideNavbar },

  methods: {
    getArticles() {
      this.$http(`${this.url}/v2/api/${this.api_path}/articles`)
        .then((res) => {
          this.articles = res.data.articles;
          this.articles = this.articles.filter(
            (item) => item.tag.indexOf("最新消息") !== -1
          );
          console.log(this.articles);
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

<style lang="scss" scoped>
a.hover:hover {
  text-decoration: underline black;
}
</style>

