<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link to="/" class="tc-serif fs-32 text-dark me-16"
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
            <RouterLink to="/adminProducts" class="fs-24 noto-serif text-dark"
              >後台產品列表
            </RouterLink>
          </li>
          <!-- <li class="nav-item">
            <RouterLink to="/adminOrders" class="fs-24 noto-serif text-dark">
            訂單列表
            </RouterLink>
          </li> -->
          <li class="nav-item">
            <RouterLink to="/" class="fs-24 noto-serif text-dark"
              >回到前台
            </RouterLink>
          </li>
          <!-- <li class="nav-item">
            <RouterLink to="/adminLogout" class="fs-24 noto-serif text-dark"
              >登出
            </RouterLink>
          </li> -->
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