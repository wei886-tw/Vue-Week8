<template>
  <div class="container-fluid px-0">
    <NavBar />
  </div>

  <div class="container-fluid bg-footer px-0">
    <div
      class="container-fluid px-0"
      style="
        background-image: url('pic/bookstore.png');
        height: 600px;
        object-fit: cover;
      "
    ></div>
    <div class="container"></div>
  </div>
  <PageFooter />
  <div class="container">
    <page-nation></page-nation>
  </div>
  <router-view />
</template>

<script>
import PageFooter from "@/components/PageFooter.vue";
import NavBar from "@/components/NavBar.vue";
import PageNation from "@/components/PageNation.vue";

export default {
  components: { PageFooter, NavBar, PageNation },
  data() {
    return {
    
    }
  },
  methods: {
    
  },

  mounted() {

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