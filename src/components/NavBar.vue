<template>
  <!-- <pre :cart-list="cartList">{{ cartList }}</pre> -->
  <div class="container-fluid px-0">
    <nav class="navbar navbar-expand-md bg-footer fixed-top  py-8">
      <div class="container">
        <router-link
          to="/"
          class="fs-48 noto-serif me-16 text-dark router-link-active"
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
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-md-24">
            <li class="nav-item">
              <router-link
                to="/about"
                class="fs-24 text-dark noto-serif nav-link router-link-active"
              >
                關於
              </router-link>
            </li>
            <li class="nav-item">
              <RouterLink
                to="/blogPage"
                class="fs-24 noto-serif text-dark nav-link router-link-active"
                >最新消息
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink
                to="/userProduct"
                class="fs-24 noto-serif text-dark nav-link router-link-active"
                >商品
              </RouterLink>
            </li>
          </ul>
          <ul class="gap-md-24 list-unstyled">
            <li class="nav-item d-flex position-relative ">
              <RouterLink
                to="/userCart"
                class="fs-24 noto-serif text-dark nav-link router-link-active"
              >
                <i class="bi bi-cart fs-32">
                  <span
                    class="position-absolute top-25 start-75 translate-middle badge rounded-pill bg-danger fs-12"
                  >
                    <pre :cart-list="cartList">{{ cartList }}</pre>
                  </span>
                </i>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

  <div style="height: 88px;"></div> 
</template>

<script>
export default {
  prop: ["cartList"],

  mounted() {
    console.log(this.cartList);
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