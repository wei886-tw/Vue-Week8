<template>
  <div class="container-fluid  px-0 bg-light">
    <div class="container text-center text-dark">
      <h1 class="fs-32 tc-serif pt-16">Book41</h1>
      <p>© 2024 COPYRIGHT</p>
    </div>
  </div>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import { RouterView } from "vue-router";

export default {
  components: {RouterView}
}
</script>