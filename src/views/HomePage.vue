<template>
  <div class="container-fluid  px-0 ">
    <NavBar />
  </div>


    <div class="container-fluid vh-100 bg-footer px-0">
      <div
        class="container-fluid px-0 "
        style="
          background-image: url('pic/bookstore.png');
          height: 600px;
          object-fit: cover;
        "
      >
      </div>
      <div class="container">

      </div>
    </div>

  <PageFooter />
  <!-- </div> -->
  <router-view />
</template>

<script>
import PageFooter from "@/components/PageFooter.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  components: { PageFooter, NavBar },
};
</script>


<style >
.tc-serif {
  font-family: "Noto Serif TC" !important;
  src: url("https://fonts.googleapis.com/css2?family=Noto+Serif+TC&display=swap");
}

.tc-sans {
  font-family: "Noto Sans TC" !important;
  src: url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Noto+Serif+TC&display=swap");
}
</style>