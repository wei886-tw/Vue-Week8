<template>
  <admin-nav-bar></admin-nav-bar>
  <div class="container py-48">
    <form class="row justify-content-center" @submit.prevent="signIn">
      <div class="col-md-6">
        <h1 class="fs-32 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-40">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            v-model="user.username"
            required
            autofocus
          />
        </div>
        <div class="mb-40">
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            v-model="user.password"
            placeholder="Password"
            required
          />
        </div>
        <div class="text-end mt-4">
          <button
            class="btn btn-lg btn-footer btn-block w-100"
            type="submit"
            @click="signIn"
          >
            登入
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import AdminNavBar from "@/components/AdminNavBar.vue";

export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      url: import.meta.env.VITE_API,
      api_path: import.meta.env.VITE_PATH,
    };
  },
  components: { AdminNavBar },

  methods: {
    signIn() {
      this.$http
        .post(`${this.url}/v2/admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;
          this.$router.push("/adminProducts");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },

    checkAdmin() {
      const link = `${this.url}/api/user/check`;
      this.$http
        .post(link)
        .then(() => {})
        .catch((err) => {
          alert(err.response.data.message);
          this.$router.push("/adminLogin");
        });
    },
  },

  mounted() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.$http.defaults.headers.common.Authorization = token;
    this.checkAdmin();
  },
};
</script>