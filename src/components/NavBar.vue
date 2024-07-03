<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg bg-footer fixed-top py-8 w-100">
      <div class="container-fluid">
        <router-link to="/" class="fs-48 me-md-16 text-dark nav-brand no-active"
          >3C Reuse</router-link
        >

        <router-link
          to="/userCart"
          class="fs-24 text-dark nav-link active router-link-active underline ms-auto me-24 d-lg-none"
        >
          <i class="bi bi-cart fs-md-28 fs-lg-32 text-end align-middle">
            <span
              class="position-absolute top-25 start-75 translate-middle badge rounded-pill bg-danger fs-12 align-middle mt-4"
            >
              <p>{{ storeCart.length ? `${storeCart.length}` : 0 }}</p>
            </span>
          </i>
        </router-link>
        <!-- 漢堡選單 -->
        <button
          class="navbar-toggler px-4 py-4"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-md-24">
            <li class="nav-item">
              <router-link
                to="/about"
                class="fs-24 text-dark nav-link router-link-active underline"
              >
                關於我們
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/userBlog"
                class="fs-24 text-dark nav-link router-link-active underline"
                >部落格
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/userProduct"
                class="fs-24 text-dark nav-link router-link-active underline"
                >所有產品
              </router-link>
            </li>
            <li>
              <router-link
                to="/userFavorite"
                class="fs-24 text-dark nav-link me-16 d-lg-none d-lg-block router-link-active"
              >
                我的收藏
              </router-link>
            </li>
          </ul>
        </div>

        <router-link
          to="/userFavorite"
          class="fs-24 text-dark nav-link ms-auto me-16 d-none d-lg-block no-active"
        >
          <i class="bi bi-heart fs-16 fs-md-28 fs-lg-32 align-middle me-16"></i>
        </router-link>
        <router-link
          to="/userCart"
          class="fs-24 text-dark nav-link ms-auto me-16 d-none d-lg-block no-active"
        >
          <i class="bi bi-cart fs-md-28 fs-lg-32 text-end align-middle">
            <span
              class="position-absolute top-25 start-75 translate-middle badge rounded-pill bg-danger fs-12 align-middle mt-4"
            >
              <p>{{ storeCart.length ? `${storeCart.length}` : 0 }}</p>
            </span>
          </i>
        </router-link>
      </div>
    </nav>
  </div>

  <div style="height: 88px"></div>
</template>

<script>
import cartStore from "@/store/cartStore.js";
import { mapState, mapActions } from "pinia";

export default {
  props: ["cartProducts"],

  data() {
    return {
      api_path: import.meta.env.VITE_PATH,
      url: import.meta.env.VITE_API,
    };
  },

  computed: {
    ...mapState(cartStore, ["storeCart"]),
  },

  methods: {
    ...mapActions(cartStore, ["getCartList"]),

    toggleNavbar() {
      const navbarCollapse = document.getElementById("navbarSupportedContent");
      if (navbarCollapse) {
        navbarCollapse.classList.toggle("show");
      }
    },
  },

  mounted() {
    this.getCartList();
  },
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
  font-weight: normal;
}
.router-link-exact-active {
  font-weight: bold;
}
.nav {
  width: 100%;
  overflow-x: hidden;
}
</style>

