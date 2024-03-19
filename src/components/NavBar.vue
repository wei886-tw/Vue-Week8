<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light  fixed-top" >
    <div class="container ">
      <router-link to="/" class="fs-48 tc-serif me-16 text-dark"
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
            <router-link to="/about" class="fs-24 text-dark tc-serif nav-link">
              關於
            </router-link>
          </li>
          <li class="nav-item">
            <RouterLink
              to="/userProduct"
              class="fs-24 tc-serif text-dark nav-link"
              >商品
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              to="/userCart"
              class="fs-24 tc-serif text-dark nav-link"
              >購物車
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              to="/adminLogin"
              class="fs-24 tc-serif text-dark nav-link"
              >後台登入
            </RouterLink>
          </li>
        </ul>
        <!-- <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-gray" type="submit">Search</button>
        </form> -->
      </div>
    </div>
  </nav>
</template>

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