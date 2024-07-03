<template >
  <nav-bar></nav-bar>
  <div class="container-fluid">
    <div class="container ">
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
            <div
              class="container px-0 d-flex justify-content-start align-items-baseline mb-8"
            >
              <p class="me-16" @click="test">作者：{{ article.author }}</p>
              <p>文章分類：</p>
              <button
                class="btn btn-dark-gray text-white me-8"
                v-for="tags in tagArr"
                :key="tags + 1"
              >
                <router-link class="text-white">{{ tags }}</router-link>
              </button>
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
      tagArr: [],
    };
  },

  methods: {
    getArticle(id) {
      this.$http(`${this.url}/v2/api/${this.api_path}/article/${id}`)
        .then((res) => {
          this.article = res.data.article;
          this.tagArr = res.data.article.tag.split("、");
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
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
  },

  mounted() {
    this.getArticle(this.id);
    this.loadingCircle();
  },
};
</script>

<style lang="css" scoped>
.new-line {
  white-space: pre-wrap;
}
</style>