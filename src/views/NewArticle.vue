<template>
  <AdminNavBar />
  <div class="container-fluid">
    <div class="container py-48">
      <form ref="form">
        <div class="row">
          <div class="col-10 mx-auto">
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
            <label class="fs-24" for="articleCategory">
              文章分類<span class="text-danger">*</span>
            </label>
            <input
              type="text"
              class="rounded mb-16 form-check-input"
              style="width: 100%; height: 40px"
              placeholder="請點擊按鈕填入文章分類"
              name="articleCategory"
              id="articleCategory"
              v-model="tag"
              ref="tagText"
            />
            <p class="mb-16">
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

            <div class="row">
              <div class="col-6 d-flex flex-column justify-content-between">
                <div class="container px-0 d-flex align-items-center">
                  <label class="fs-24 mb-8 h3" for="title"
                    >圖片預覽<span class="text-danger">*</span></label
                  >
                </div>
                <p class="mb-16">
                  僅限使用 jpg、jpeg 與 png 格式，檔案大小限制為 3MB 以下
                </p>
                <form ref="imgForm">
                  <input
                    class="form-control mb-32"
                    type="text"
                    ref="imgInput"
                    id="test"
                    placeholder="請填入圖片網址"
                    v-model="imageUrl"
                  />
                  <input
                    class="form-control mb-32"
                    type="file"
                    ref="dropArea"
                    name="file-to-upload"
                  />
                </form>
                <button
                  type="button"
                  class="btn border w-100 mb-16"
                  @click="submitImgUrl"
                >
                  上傳圖片
                </button>
                <div class="form-check form-switch  px-0">
                    <form action="" class="form-check form-switch mb-16">
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckDefault"
                        >{{ isPublic ? "文章公開" : "文章不公開" }}</label
                      >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        v-model="isPublic"
                      />
                    </form>
                  </div>

                  <button class="btn btn-footer w-100" @click.prevent="postArticle">
                    送出文章
                  </button>
              </div>

              <div class="col-6">
                <div
                  class="border border-1"
                  style="height: 360px;"
                >
                  <img
                    v-if="imageUrl"
                    :src="imageUrl"
                    alt="picture"
                    style="width: 100%; object-fit: cover"
                  />
                  <p v-else class="text-dark-gray text-center">現在沒有圖片
                    <img src="https://www.samys.com/images/product/main/S-008607x1000.jpg" alt="代替圖片"
                    style="width: 100%; height: 360px; object-fit: cover"
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AdminNavBar from "@/components/AdminNavBar.vue";

export default {
  components: { AdminNavBar },
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
      if (this.tag.length === 0) {
        this.tag = text;
      } else if (this.tag.indexOf(text) === -1) {
        this.tag = this.tag.concat("、", text);
      }
    },

    emitImg(url) {
      this.imageUrl = url;
    },

    submitImgUrl() {
      const fileInput = this.$refs.dropArea;
      const file = fileInput.files[0];
      const formData = new FormData();
      formData.append("file-to-upload", file);
      this.$http
        .post(`${this.url}/v2/api/${this.api_path}/admin/upload`, formData)
        .then((res) => {
          this.imageUrl = res.data.imageUrl;
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
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