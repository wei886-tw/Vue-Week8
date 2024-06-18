<template>
  <AdminNavBarVue />
  <div class="container-fluid">
    <div class="container py-48" id="id">
      <h2 class="fs-40 mb-32 text-center">修改文章</h2>
      <form ref="form">
        <div class="row justify-content-center">
          <div class="col-10">
            <label class="fs-24 mb-8" for="title"
              >文章標題<span class="text-danger">*</span></label
            >
            <input
              type="text"
              class="rounded mb-32 form-check-input"
              style="width: 100%; height: 40px"
              v-model="title"
              name="title"
              id="title"
            />
          </div>
        </div>

        <div class="row mb-32 justify-content-center">
          <div class="col-5">
            <label class="fs-24" for="author">
              文章作者<span class="text-danger">*</span>
            </label>
            <input
              type="text"
              class="rounded mb-32 form-check-input"
              style="width: 100%; height: 40px"
              placeholder="請填入作者"
              name="author"
              id="author"
              v-model="author"
            />
          </div>

          <div class="col-5">
            <label class="fs-24" for="articleCategory">
              文章分類<span class="text-danger">*</span>
            </label>
            <input
              type="text"
              class="rounded mb-16 form-check-input"
              style="width: 100%; height: 40px"
              placeholder="請填入文章分類"
              name="articleCategory"
              id="articleCategory"
              v-model="tag"
            />
            <p>
              點擊帶入文章分類：
              <button
                class="btn btn-gray me-8"
                @click.prevent="addTag('最新消息')"
              >
                最新消息
              </button>
              <button
                class="btn btn-gray me-8"
                @click.prevent="addTag('活動消息')"
              >
                活動消息
              </button>
              <button
                class="btn btn-gray me-8"
                @click.prevent="addTag('本站獨家')"
              >
                本站獨家
              </button>
            </p>
          </div>

          <div class="col-10">
            <label class="fs-24" for="description"
              >文章簡述<span class="text-danger">*</span></label
            >
            <textarea
              v-model="description"
              class="rounded mb-24 form-check-input"
              style="width: 100%; height: 120px"
              placeholder="請填入 100 字內描述"
              name="description"
              id="description"
            />
            <label class="fs-24" for="description"
              >文章內容<span class="text-danger">*</span></label
            >
            <textarea
              type="text"
              v-model="content"
              class="rounded mb-24 form-check-input"
              style="width: 100%; height: 240px"
              placeholder="請輸入文章內容"
              name="content"
              id="content"
            />
          </div>
        </div>

          

        <div class="row justify-content-center">
          <div
            class="col-5 d-flex flex-column justify-content-between align-items-start"
          >
            <h3 class="fs-24">文章發佈狀態</h3>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                v-model="isPublic"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault">{{
                isPublic ? "文章公開" : "文章不公開"
              }}</label>
            </div>

            <UploadImageModalVue  v-on:emit-img-url="getUrl" />

            <button
              type="button"
              class="btn btn-gray w-100"
              @click="adviseArticle(id)"
            >
              修改文章
            </button>
          </div>
          <div class="col-5">
            <p class="fs-24">圖片預覽</p>
            <img
              :src="imageUrl"
              alt=""
              style="width: 416px; height: 440px; object-fit: cover"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AdminNavBarVue from "@/components/AdminNavBar.vue";
import UploadImageModalVue from "@/components/UploadImageModal.vue";
export default {
  props: ["id"],

  components: { AdminNavBarVue, UploadImageModalVue },
  data() {
    return {
      myModal: null,
      tempArticleInfo: {
        imageUrl: "",
      },
      imageUrl: "",
      title: "",
      content: "",
      author: "",
      tag: [],
      description: "",
      articleCategory: "",
      isPublic: true,
      create_at: "",
      url: import.meta.env.VITE_API,
      api_path: import.meta.env.VITE_PATH,
    };
  },

  methods: {
    getUrl(url) {
      this.imageUrl = url;
    },

    getArticle(id) {
      this.$http
        .get(`${this.url}/v2/api/${this.api_path}/admin/article/${id}`)
        .then((res) => {
          this.article = res.data.article;
          this.title = res.data.article.title;
          this.create_at = res.data.article.create_at;
          this.description = res.data.article.description;
          this.isPublic = res.data.article.isPublic;
          this.tag = res.data.article.tag;
          this.author = res.data.article.author;
          this.content = res.data.article.content;
          this.imageUrl = res.data.article.image;
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },

    adviseArticle(id) {
      this.$http
        .put(`${this.url}/v2/api/${this.api_path}/admin/article/${id}`, {
          data: {
            title: this.title,
            description: this.description,
            image: this.imageUrl,
            tag: this.tag,
            create_at: this.create_at,
            author: this.author,
            isPublic: this.isPublic,
            content: this.content,
          },
        })
        .then(() => {
          alert("修改文章成功");
          this.$router.push("/adminBlog");
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },

    addTag(text) {
      if (this.tag === undefined) {
        this.tag = text;
      } else if (this.tag.search(text) === -1 && this.tag.length !== 0) {
        this.tag = this.tag.concat("、", text);
      }
    },
  },

  mounted() {
    this.getArticle(this.id);
    this.getUrl();
  },
};
</script>

<style lang="scss" scoped>
input[type="checkbox"] {
  color: black;
  background-color: #f3f2ee;
  border-color: #f3f2ee;
}
</style>