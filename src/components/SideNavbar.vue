<template>
  <div class="container">
    <div class="row">
      <div class="col-12 d-none d-lg-block">
        <ul class="list-unstyled mt-128 gy-16 d-flex flex-column">
          <li class="fs-lg-24 mb-16">
            <router-link to="/userBlog"
              ><a href="" class="text-dark hover">全部文章</a>
            </router-link>
          </li>
          <li class="fs-lg-24 mb-16">
            <router-link to="/blogNews"><a href="" class="text-dark hover">最新消息</a></router-link>
          </li>
          <li class="fs-lg-24 mb-16">
            <router-link to="/blogOnly"><a href="" class="text-dark hover">本站獨家</a></router-link>
          </li>
          <li class="fs-lg-24 mb-16">
            <router-link to="/blogEvent"><a href="" class="text-dark hover">活動講座</a></router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>