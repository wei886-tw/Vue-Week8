export const myMixin = {
  methods: {
    loadingCircle() {
      let loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: true,
        onCancel: this.onCancel,
      });
      setTimeout(() => {
        loader.hide();
      }, 2500);
    },

    checkAdmin() {
      const link = `${this.url}/api/user/check`;
      this.$http
        .post(link)
        .then(() => {
          this.getPageArticle(1);
        })
        .catch((err) => {
          alert(err.response.data.message);
          this.$router.push("/adminLogin");
        });
    },

    openModal() {
      
    }
  }
};