<template>
  <admin-nav-bar></admin-nav-bar>
  <div class="container-fluid px-0">
    <div class="container py-48">
      <div class="container d-flex justify-content-between mb-24">
        <h2 class="fs-32">文章管理</h2>
        <button type="button" class="btn btn-dark">
          <router-link to="/newArticle" class="text-white"
            >建立新文章</router-link
          >
        </button>
      </div>
      <table class="table mb-32">
        <thead>
          <tr>
            <th scope="col">標題文章</th>
            <th scope="col">標題作者</th>
            <th scope="col">是否公開</th>
            <th scope="col">修改</th>
            <th scope="col">刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="article in articles" :key="article.id">
            <td>{{ article.title }}</td>
            <td>{{ article.author }}</td>
            <td>{{ article.isPublic ? "是" : "否" }}</td>
            <td>
              <button
                class="btn btn-success"
                @click="goAdviseArticle(article.id)"
              >
                <!-- <router-link :to="`/adviseArticle/${article.id}`"> </router-link> -->
                修改文章
              </button>
            </td>
            <td>
              <button class="btn btn-danger" @click="deleteArticle(article.id)">
                刪除文章
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="container">
        <page-nation
          :pagination="blogPagination"
          :get-page-products="getPageArticle"
          class="d-flex justify-content-end"
        ></page-nation>
      </div>
    </div>
  </div>

  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import AdminNavBar from "@/components/AdminNavBar.vue";
import PageNation from "@/components/PageNation.vue";

export default {
  components: { AdminNavBar, PageNation,  },

  data() {
    return {
      url: import.meta.env.VITE_API,
      api_path: import.meta.env.VITE_PATH,
      blogPagination: {},
      title: "",
      content: "",
      author: "",
      articleCategory: "",
      tag: [],
      description: "",
      isPublic: true,
      create_at: "",
      articles: "",
      bsModal: "",
      id: "",
    };
  },

  methods: {
    checkAdmin() {
      const link = `${this.url}/api/user/check`;
      this.$http
        .post(link)
        .then(() => {
          this.getPageArticle(1);
        })
        .catch((err) => {
          alert(err.response.data.message);
          this.$router.push("/adminLogin");
        });
    },

    getPageArticle(page) {
      this.$http
        .get(`${this.url}/v2/api/${this.api_path}/admin/articles?page=${page}`)
        .then((res) => {
          this.articles = res.data.articles;
          this.blogPagination = res.data.pagination;
          this.title = res.data.articles.title;
          this.create_at = res.data.articles.create_at;
          this.description = res.data.articles.description;
          this.isPublic = res.data.articles.isPublic;
          this.tag = res.data.articles.tag;
          this.author = res.data.articles.author;
          this.content = res.data.articles.content;
          this.imageUrl = res.data.articles.imageUrl;
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },

    deleteArticle(id) {
      this.$http
        .delete(`${this.url}/v2/api/${this.api_path}/admin/article/${id}`)
        .then(() => {
          alert("刪除成功");
          this.getPageArticle(1);
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },

    goAdviseArticle(id) {
      this.$router.push(`/adviseArticle/${id}`);
    },
  },

  mounted() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.$http.defaults.headers.common.Authorization = token;
    this.checkAdmin();
  },
};
</script>