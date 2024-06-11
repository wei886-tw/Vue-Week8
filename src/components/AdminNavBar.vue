<template>
  <nav class="navbar navbar-expand-xl bg-footer fixed-top">
    <div class="container">
      <RouterLink to="/" class="noto-serif fs-48 text-dark me-16"
        >3C Reuse</RouterLink
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
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-24 mb-24">
          <li class="nav-item">
            <router-link to="/adminProducts" class="fs-24 noto-serif text-dark router-link-active " 
              >後台產品列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/adminOrders" class="fs-24 noto-serif text-dark router-link-active underline">
              訂單管理
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/adminCoupon" class="fs-24 noto-serif text-dark router-link-active underline">
              優惠券管理
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/adminBlog" class="fs-24 noto-serif text-dark router-link-active underline">
              文章管理
            </router-link>
          </li>
        </ul>

        <ul class="d-flex list-unstyled gap-md-24">
          <li class="nav-item d-flex justify-content-end">
            <router-link to="/adminLogin" class="fs-24 noto-serif text-dark"
              >登入
            </router-link>
          </li>

          <li class="nav-item d-flex justify-content-end">
            <a class="fs-24 noto-serif text-dark" @click="logOut()">登出 </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div style="height: 88px"></div>
  
</template>

<script>
export default {
  data() {
    return {
      api_path: import.meta.env.VITE_PATH,
      url: import.meta.env.VITE_API,
    };
  },
  methods: {
    logOut() {
      this.$http
        .post(`${this.url}/v2/logout`)
        .then(() => {
          alert("成功登出");
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err.data.message);
        });
    },
  },

  mounted() {
    window.scroll(0, 0);
  }
};
</script>

<style lang="scss" scoped>
a.underline:hover {
  border-bottom: 2px solid black;
}

.button.rwd {
  width: 32px;
  height: 32px;
}
.no-active.router-link-active {
  border-bottom: 0px; 

}
.router-link-exact-active {
  border-bottom: 2px solid black;
}
</style>