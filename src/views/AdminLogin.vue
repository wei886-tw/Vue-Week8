<template>
  <div class="container py-48">
    <form class="row justify-content-center" @submit.prevent="signIn">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
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
import AdminNavBar from '@/components/NavBar.vue';


export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  components:{AdminNavBar},

  methods: {
    signIn() {
      this.$http
        .post(`${import.meta.env.VITE_API}/v2/admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
          this.$router.push("/adminProducts");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
};
</script>