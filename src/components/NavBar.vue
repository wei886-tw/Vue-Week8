<template>
  <div class="container-fluid px-0">
    <nav class="navbar navbar-expand-md bg-footer fixed-top py-8">
      <div class="container">
        <router-link
          to="/"
          class="fs-48 noto-serif me-16 text-dark router-link-active"
          >3C Reuse</router-link
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
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-md-24">
            <li class="nav-item">
              <router-link
                to="/about"
                class="fs-24 text-dark noto-serif nav-link router-link-active underline"
              >
                品牌故事
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/userBlog"
                class="fs-24 noto-serif text-dark nav-link router-link-active underline"
                >最新消息
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/userProduct"
                class="fs-24 noto-serif text-dark nav-link router-link-active underline"
                >商品
              </router-link>
            </li>
          </ul>
          <ul class="gap-md-24 list-unstyled">
            <li class="nav-item position-relative">
              <router-link
                to="/userCart"
                class="fs-24 noto-serif text-dark nav-link router-link-active underline"
              >
                <p class="d-block d-md-none">購物車</p>
                <i class="d-none d-md-block bi bi-cart fs-32 text-end">
                  <span
                    class="position-absolute top-25 start-75 translate-middle badge rounded-pill bg-danger fs-12"
                  >
                    <p>1</p>
                  </span>
                </i>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

  <div style="height: 88px"></div>
</template>

<script>
export default {
  props: ["cartProducts"],

  data() {
    return {
      api_path: import.meta.env.VITE_PATH,
      url: import.meta.env.VITE_API,
    };
  },

  methods: {
    test() {
      console.log(this.cartProducts);
    },
  },
};
</script>

<style lang="scss" scoped>
a.underline:hover {
  border-bottom: 2px solid black;
  padding-block: 0px;
}
</style>

