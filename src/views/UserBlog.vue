<template>
  <div class="container-fluid px-0">
    <NavBar />
  </div>
  <div class="container-fluid px-0">
    <div class="container px-0">
      <div class="row">
        <div class="col-2">
          <ul class="list-unstyled mt-60 gy-16 ">
            <li class="fs-24 mb-16 "><a href="" class="text-dark">全部文章</a></li>
            <li class="fs-24 mb-16 " ><a href="" class="text-dark">最新消息</a></li>
            <li class="fs-24 mb-16 "><a href="" class="text-dark">活動講座</a></li>
            <!-- <li class="fs-24 mb-16">專欄文章</li> -->
          </ul>
        </div>

        <div class="col-10">
          <h3 class="fs-32 py-24 text-start">全部文章</h3>
          <ul
            class="list-unstyled d-flex justify-content-between row row-cols-2"
          >
            <div class="mb-16" v-for="article in articles" :key="article.id">
              <li class="">
                <RouterLink :to="`/userArticle/:${article.id}`"/>
                  <div class="mb-8" style="">
                    <img
                      :src="article.image"
                      alt="文章圖片"
                      style="height: 240px; object-fit: cover"
                    >
                  </div>
                  <h3 class="fw-bold">
                    {{ article.title }}
                  </h3>
                  <h4 class="liu-over">作者： {{ article.author }}</h4>
                  <p class="overflow-hidden w-100" style="height: 120px">
                    {{ article.description }}
                  </p>
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
      <RouterView/>
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

<style lang="css" scoped>
a:hover{
  text-decoration: underline black;
}

</style>>

