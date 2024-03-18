<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link to="/home" class="tc-serif fs-32 text-dark me-16"
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
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-24">
          <li class="nav-item">
            <router-link to="/about" class="fs-24 text-dark tc-serif">
              關於
            </router-link>
          </li>
          <li class="nav-item">
            <RouterLink to="/userProduct" class="fs-24 tc-serif text-dark"
              >商品
            </RouterLink>
          </li>
          <li class="nav-item">
              <RouterLink to="/adminLogin" class="fs-24 tc-serif text-dark"
              >後台登入
            </RouterLink>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-gray" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script >
import { RouterView } from "vue-router";
import PageFooter from './components/PageFooter.vue';


export default {
  data() {
    return {
      
    }
  },

  components: {PageFooter, RouterView},

  methods: {
    
  },

  mounted() {
    
  },
}
</script>

  


