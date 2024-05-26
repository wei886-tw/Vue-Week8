<template>
  <AdminNavBar />
  <div class="container-fluid">
    <div class="container py-48">
      <form ref="form">
        <div class="row">
          <div class="col">
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
        <div class="row">
          <div class="col-6">
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
          <div class="col-6">
            <label class="fs-24" for="articleCategory">
              文章分類<span class="text-danger">*</span>
            </label>
            <input
              type="text"
              class="rounded mb-16 form-check-input"
              style="width: 100%; height: 40px"
              placeholder="請填入文章分類，以 space 分隔"
              name="articleCategory"
              id="articleCategory"
              v-model="tag"
              ref="tagText"
            />
            <pre>{{ tag }}</pre>
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
                @click.prevent="addTag('活動講座')"
              >
                活動講座
              </button>
              <button
                class="btn btn-gray me-8"
                @click.prevent="addTag('本站獨家')"
              >
                本站獨家
              </button>
            </p>
          </div>
        </div>
        <div class="row mb-24">
          <div class="col">
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
        <h3 class="fs-24 mb-16">封面圖片</h3>
        <div class="card mb-32" style="width: 240px">
          <img :src="imageUrl" class="card-img-top" />
          <div class="card-body">
            <upload-image-modal> </upload-image-modal>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
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
          </div>
          <div class="col-6 d-flex justify-content-end">
            <button class="btn btn-footer" @click.prevent="postArticle">
              送出文章
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AdminNavBar from "@/components/AdminNavBar.vue";
import UploadImageModal from "@/components/UploadImageModal.vue";

export default {
  components: { AdminNavBar, UploadImageModal },
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
      articleCategory: "",
      tag: [],
      description: "",
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

    postArticle() {
      this.create_at = new Date().getTime();
      this.$http
        .post(`${this.url}/v2/api/${this.api_path}/admin/article`, {
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
          alert("文章建立成功");
          this.$refs.form.reset();
          this.imageUrl = "";
          this.$router.push("/adminBlog");
        })

        .catch((err) => {
          console.log(err.response.data.message);
        });
    },

    addTag(text) {
      if (this.tag.findIndex === -1) {
        this.tag.push(`${text} + `);
        console.log(1)
      }
    },

    emitImg(url) {
      this.imageUrl = url;
    },
  },

  mounted() {},
};
</script>

<style lang="scss" scoped>
input[type="checkbox"] {
  color: black;
  background-color: #f3f2ee;
  border-color: #f3f2ee;
}
</style>