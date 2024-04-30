<template>
  <div class="container">
    <InfoModal/>
    <nav-bar></nav-bar>
    <button class="btn btn-danger">click</button>
    <button class="btn btn-danger">click</button>

    <router-view></router-view>
    
  </div>

  <div>

  </div>
</template>

<script>
import InfoModal from "../components/InfoModal.vue"
import NavBar from "../components/NavBar.vue"
export default {
  components: {  InfoModal, NavBar  },
};
</script>


<style >
/* .tc-serif {
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
} */
</style>
  


