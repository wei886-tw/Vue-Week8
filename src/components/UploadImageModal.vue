<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-gray w-100"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    ref="btn"
  >
    上傳圖片
  </button>

  <!-- Modal -->
  <div
    ref="uploadImageModal"
    class="modal fade"
    aria-hidden="true"
    id="exampleModal"
    aria-labelledby="uploadImageModal"
    tabindex="-1"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 v-if="isCover" class="modal-title text-bold fw-bold">上傳封面</h5>
          <h5 v-else class="modal-title text-bold fw-bold">上傳圖片</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body container">
          <div class="row g-16">
            <div class="col-12 col-md-4">
              <div class="drop-area ratio-1x1">
                <div
                  v-if="imageUrl"
                  :style="`background-image:url(${imageUrl})`"
                  class="w-100 h-100"
                ></div>
                <img
                  v-if="imageUrl"
                  :src="imageUrl"
                  alt="picture"
                  style="width: 250px; object-fit: cover"
                />
                <p v-else>圖片預覽</p>
              </div>
            </div>
            <div class="col-12 col-md-8">
              <p class="mb-16">
                僅限使用 jpg、jpeg 與 png 格式，檔案大小限制為 3MB 以下
              </p>
              <form ref="imgForm">
                <input
                  class="form-control mb-16"
                  type="text"
                  ref="imgInput"
                  id="test"
                  placeholder="請填入圖片網址"
                  v-model="imageUrl"
                />
                <input
                  class="form-control"
                  type="file"
                  ref="dropArea"
                  name="file-to-upload"
                />
              </form>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-dark" @click="submitImgUrl">
            送出
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default  {
  emits: ['emit-imgUrl'],
  data() {
    return {
      api: import.meta.env.VITE_API,
      api_path: import.meta.env.VITE_PATH,
      myModal: "",
      imageUrl: "",
      isCover: false,
    };
  },

  methods: {
    checkAdmin() {
      const link = `${this.api}/api/user/check`;
      this.$http
        .post(link)
        .then(() => {})
        .catch((err) => {
          alert(err.response.data.message);
          this.$router.push("/adminLogin");
        });
    },

    submitImgUrl() {
      const fileInput = this.$refs.dropArea;
      const file = fileInput.files[0];
      const formData = new FormData();
      formData.append("file-to-upload", file);
      this.$http
        .post(`${this.api}/v2/api/${this.api_path}/admin/upload`, formData )
        .then((res) => {
          this.imageUrl = res.data.imageUrl
          this.$emit("emit-imgUrl", this.imageUrl)
          this.imageUrl = '';
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
  },

  mounted() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.$http.defaults.headers.common.Authorization = token;
    this.checkAdmin();
    this.myModal = new bootstrap.Modal(this.$refs.uploadImageModal)
    this.$emit('emit-imgUrl', 123)
  },
};
</script>
