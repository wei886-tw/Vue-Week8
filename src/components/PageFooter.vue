<template>
  <div class="container-fluid px-0 bg-footer">
    <div class="container text-center text-dark py-16">
      <h1 class="fs-32  mb-4 noto-serif">Book41</h1>
      <a class="nav-item list-unstyled mb-4">
        <RouterLink
          to="/adminLogin"
          class="noto-serif text-dark nav-link router-link-active"
          >後台登入
        </RouterLink>
      </a>
      <p class="mb-8">© 2024 COPYRIGHT</p>
    </div>
  </div>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import { RouterView, RouterLink } from "vue-router";

export default {
  components: { RouterView, RouterLink },
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
</style>