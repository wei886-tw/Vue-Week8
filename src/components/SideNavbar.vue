<template>
  <div class="container">
    <div class="row">
      <div class="col-12 d-none d-lg-block">
        <ul class="list-unstyled mt-128 gy-16 d-flex flex-column">
          <li class="fs-lg-24 mb-16">
              <router-link
                to="/userBlog"
                class="router-link-active text-dark hover"
                >全部文章</router-link
              >
            </li>
            <li class="fs-lg-24 mb-16">
              <router-link
                to="/blogNews"
                class="router-link-active text-dark hover"
                >最新消息</router-link
              >
            </li>
            <li class="fs-lg-24 mb-16">
              <router-link
                to="/blogOnly"
                class="router-link-active text-dark hover"
                >本站獨家</router-link
              >
            </li>
            <li class="fs-lg-24 mb-16">
              <router-link
                to="/blogEvent"
                class="router-link-active text-dark hover"
                >活動講座</router-link
              >
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  methods: {
    loadingCircle() {
      let loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: true,
        onCancel: this.onCancel,
      });
      // simulate AJAX
      setTimeout(() => {
        loader.hide();
      }, 1500);
    },
  },

  mounted() {
    this.loadingCircle();
  }
}
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  font-weight: bolder;
}
</style>