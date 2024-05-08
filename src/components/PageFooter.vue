<template>
  <div class="container-fluid px-0 bg-footer">
    <div class="container text-center text-dark py-16">
      <h1 class="fs-32 mb-4 noto-serif">3C Reuse</h1>
      <a class="nav-item list-unstyled mb-4">
        <RouterLink
          to="/adminLogin"
          class="noto-serif text-dark nav-link router-link-active"
          >後台登入
        </RouterLink>
      </a>
      <p>© 2024 COPYRIGHT</p>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { RouterView, RouterLink } from "vue-router";

export default {
  components: { RouterView, RouterLink },
};
</script>