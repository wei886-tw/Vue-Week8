<template >
  <nav-bar></nav-bar>
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 py-32" v-if="article">
          <div
            class="container d-flex flex-column align-items-center"
            style="width: 80%"
          >

            <img
              :src="article.image"
              alt="文章圖片"
              style="width: 70%; height: 50%; object-fit: cover"
              class="mb-32 pt-60"
            />
            <h2 class="fs-24 fs-lg-40 mb-16">{{ article.title }}</h2>
            <div class="container d-flex justify-content-start
            align-items-baseline" >
              <p class="me-16" @click="test">作者：{{ article.author }}</p>
              <p>文章分類：</p>
              <button type="button" class="btn btn-footer" v-for="tag in article.tag" :key="tag + 23">
                {{tag}}</button>
                <button class="btn btn-primary">{{article.tag}}</button>
            </div>

            <p class="fs-16 fs-lg-24 new-line">{{ article.content }}</p>
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
      tag: [],
    };
  },

  methods: {
    getArticle(id) {
      this.$http(`${this.url}/v2/api/${this.api_path}/article/${id}`)
        .then((res) => {
          this.article = res.data.article;
          this.tag = res.data.article.tag;
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
  },

  mounted() {
    this.getArticle(this.id);
    console.log(this.tag)
  },
};
</script>

<style lang="css" scoped>
.new-line {
  white-space: pre-wrap;
}
</style>