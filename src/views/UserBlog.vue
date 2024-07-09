<template>
  <div class="container-fluid px-0 d-flex">
    <NavBar />
  </div>
  <div class="container-fluid px-0">
    <div class="container pt-32 d-flex">
      <div class="row">
        <div class="col-lg-2 d-none d-lg-block">
          <ul class="list-unstyled mt-128 gy-16 d-flex flex-column">
            <li class="fs-lg-24 mb-16">
              <a
                to="/userBlog"
                class="text-dark hover"
                :class="tag === '全部文章' ? 'fw-bold' : 'fw-normal'"
                @click="getArticles('全部文章')"
                >全部文章
              </a>
            </li>
            <li class="fs-lg-24 mb-16">
              <a
                class="text-dark hover"
                :class="tag === '最新消息' ? 'fw-bold' : 'fw-normal'"
                @click="goToBlog('最新消息')"
                >最新消息</a
              >
            </li>
            <li class="fs-lg-24 mb-16">
              <a
                @click="goToBlog('本站獨家')"
                :class="tag === '本站獨家' ? 'fw-bold' : 'fw-normal'"
                class="text-dark hover"
                >本站獨家</a
              >
            </li>
            <li class="fs-lg-24 mb-16">
              <a
                @click="goToBlog('活動講座')"
                :class="tag === '活動講座' ? 'fw-bold' : 'fw-normal'"
                class="text-dark hover"
                >活動講座</a
              >
            </li>
          </ul>
        </div>

        <div class="col-12 col-lg-10">
          <h3 class="fs-40 py-24 text-start">{{ tag }}</h3>
          <hr />
          <ul
            class="list-unstyled gy-16 d-flex d-block d-lg-none justify-content-between"
          >
            <li class="fs-16 fs-md-24 mb-16">
              <router-link
                to="/userBlog"
                class="router-link-active text-dark hover"
                :class="tag === '全部文章' ? 'fw-bold' : 'fw-normal'"
                >全部文章</router-link
              >
            </li>
            <li class="fs-16 fs-md-24 mb-16">
              <a
                @click="goToBlog('最新消息')"
                :class="tag === '最新消息' ? 'fw-bold' : 'fw-normal'"
                class="router-link-active text-dark hover"
                >最新消息</a
              >
            </li>
            <li class="fs-16 fs-md-24 mb-16">
              <a
                to="/blogOnly"
                class="router-link-active text-dark hover"
                @click="goToBlog('本站獨家')"
                :class="tag === '本站獨家' ? 'fw-bold' : 'fw-normal'"
                >本站獨家</a
              >
            </li>
            <li class="fs-16 fs-md-24 mb-16">
              <a
                @click="goToBlog('活動講座')"
                class="router-link-active text-dark hover"
                :class="tag === '活動講座' ? 'fw-bold' : 'fw-normal'"
                >活動講座</a
              >
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

    <div class="container-fluid px-0">
      <PageFooter />
    </div>
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
      tag: "全部文章",
    };
  },

  components: { NavBar, PageFooter },

  props: ["category"],

  methods: {
    getArticles(all) {
      if (
        all === '全部文章'
      ) {
        console.log(this.category)
        this.$router.push({
          name: "userBlog",
        });
        this.loadingCircle();
        this.tag = "全部文章";
        this.$http(`${this.url}/v2/api/${this.api_path}/articles`)
          .then((res) => {
            this.articles = res.data.articles;
            this.pagination = res.data.pagination;
          })
          .catch((err) => {
            console.log(err.response.data.message);
          });
      } else {
        this.tag = this.category;
        this.$http(
          `${this.url}/v2/api/${this.api_path}/articles?category=${this.category}`
        )
          .then((res) => {
            this.articles = res.data.articles;
            this.articles = this.articles.filter(
              (item) => item.tag.indexOf(this.category) !== -1
            );
            this.pagination = res.data.pagination;
            this.tag = this.category;

            this.loadingCircle();
          })
          .catch((err) => {
            console.log(err.response.data.message);
          });
      }
    },

    loadingCircle() {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: true,
        onCancel: this.onCancel,
      });
      setTimeout(() => {
        loader.hide();
      }, 1500);
    },

    goToBlog(tag) {
      this.$router.push({ name: "userBlog", query: { category: tag } });
      this.$http(`${this.url}/v2/api/${this.api_path}/articles?category=${tag}`)
        .then((res) => {
          this.articles = res.data.articles;
          this.articles = this.articles.filter(
            (item) => item.tag.indexOf(tag) !== -1
          );
          this.pagination = res.data.pagination;
          this.tag = tag;

          this.loadingCircle();
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
  },

  mounted() {
    this.getArticles();
    this.loadingCircle();
    window.scroll(0, 0);
  },
};
</script>

<style lang="scss" scoped>
a.hover:hover {
  text-decoration: underline black;
}
.router-link-exact-active {
  font-weight: bolder;
}

a.active {
  font-weight: bolder;
}
</style>

