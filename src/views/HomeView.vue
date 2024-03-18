<script>
import { RouterView } from "vue-router";
import PageFooter from "../components/PageFooter.vue";
export default {
  components: {PageFooter, RouterView}
}
</script>

<template>
  <div class="container-fluid bg-secondary px-0">
    <div
      class="container-fluid px-0"
      style="
        background-image: url('pic/bookstore.png');
        height: 600px;
        object-fit: cover;
      "
    ></div>
  </div>
  <page-footer></page-footer>
  <router-view />
</template>


<style >
.tc-serif {
  font-family: "Noto Serif TC", serif;
  font-weight: 400;
  font-style: normal;
  src: url("https://fonts.googleapis.com/css2?family=Noto+Serif+TC&display=swap");
}

.tc-sans {
  font-family: "Noto Sans TC", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  src: url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Noto+Serif+TC&display=swap");
}
</style>
  


