<template>
  <div class="container-fluid px-0">
    <NavBar />
  </div>

  <div class="container-fluid  px-0 vh-100 ">
    <div
      class="container-fluid px-0 overflow-hidden"
      style="
        background-image: url('pic/bookstore.png');
        height: 600px;
        width: 100%
        object-fit: cover;



      "
    ></div>
  </div>
  <PageFooter />

  <router-view />
</template>

<script>
import PageFooter from "@/components/PageFooter.vue";
import NavBar from "@/components/NavBar.vue";


export default {
  components: { PageFooter, NavBar,  },
  data() {
    return {};
  },
  methods: {},

  mounted() {},
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