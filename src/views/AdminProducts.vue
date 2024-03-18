<template>
  <div>
    <h2 class="text-center">這裡是 後台 產品列表</h2>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-end">
            {{ item.origin_price }}
          </td>
          <td class="text-end">
            {{ item.price }}
          </td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pages="pagination" @emit-pages="getProducts" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      allProducts: [],
    }
  },
  methods: {
    getAllProducts(){
      const url = import.meta.env.VITE_API
      const api_path = import.meta.env.VITE_PATH
      this.$http.get(`${url}/v2/api/${api_path}/admin/products/all`)
      .the(res=>{
        console.log(res)
      })
      .catch(err=>{
        console.log(err)
      })
    }
  },

  mounted() {
    this.getAllProducts();
  },
}
</script>