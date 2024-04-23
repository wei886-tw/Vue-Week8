<template>
  <nav class="navbar navbar-expand-lg bg-footer ">
    <div class="container">
      <router-link to="/" class="noto-serif fs-32 text-dark me-16"
        >Book41</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-24">
          <li class="nav-item">
            <RouterLink to="/adminProducts" class="fs-24 noto-serif text-dark"
              >後台產品列表
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/adminOrders" class="fs-24 noto-serif text-dark">
              訂單管理
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/adminBlog" class="fs-24 noto-serif text-dark">
              文章管理
            </RouterLink>
          </li>
        </ul>

        <ul class="d-flex list-unstyled gap-md-24">
          <li class="nav-item">
            <RouterLink to="/" class="fs-24 noto-serif text-dark"
              >回到前台
            </RouterLink>
          </li>
          <li class="nav-item d-flex justify-content-end">
            <a
              class="fs-24 noto-serif text-dark"
              @click="logOut()"
              >登出
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    data() {
      return {
        api_path: import.meta.env.VITE_PATH,
        url: import.meta.env.VITE_API,
      };
    },
    logOut() {
      this.$http(`${this.api_path}/v2/logout`)
        .then((res) => {
          alert(res);
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err.data.message);
        });
    },
  },
};
</script>

<style >
.tc-serif {
  font-family: "Noto Serif TC" !important;
  src: url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Noto+Serif+TC&display=swap'");
}

.noto-serif {
  font-family: "Noto Serif TC", serif;
  font-weight: 400;
  font-style: normal;
}

.noto-sans {
  font-family: "Noto Sans TC", sans-serif;
  font-optical-sizing: auto;
  font-weight: normal;
  font-style: normal;
}

.tc-sans {
  font-family: "Noto Sans TC" !important;
  src: url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Noto+Serif+TC&display=swap");
}
</style>