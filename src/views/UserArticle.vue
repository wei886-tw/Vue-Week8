<template>
  <nav-bar></nav-bar>
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 py-40" v-if="article">
          <div class="container d-flex flex-column align-items-center " style="width: 80%;">
            <img
              :src="article.image"
              alt="文章圖片"
              style="width: 100%; height:75%; object-fit: cover"
              class="mb-32"
            />
            <h2 class="fs-24 fs-lg-40 mb-16 ">{{ article.title }}</h2>
            <p class="mb-16">作者：{{ article.author }}</p>
            <p class="fs-16 fs-lg-24">{{ article.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <page-footer></page-footer>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import PageFooter from "@/components/PageFooter.vue";

export default {
  components: { NavBar, PageFooter },
  props: ["id"],
  data() {
    return {
      url: import.meta.env.VITE_API,
      api_path: import.meta.env.VITE_PATH,
      article: [],
    };
  },

  methods: {
    getArticle(id) {
      this.$http(`${this.url}/v2/api/${this.api_path}/article/${id}`)
        .then((res) => {
          this.article = res.data.article;
          console.log(this.article);
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
  },


  mounted() {
    this.getArticle(this.id);
  },
};
</script>
