<template>
  <div class="container-fluid px-0 pt-32 vh-100">
    <div class="container mb-32">
      <div class="row">
        <div class="col-12">
          <h1 class="fs-32 fw-bold">總覽</h1>
        </div>
      </div>
    </div>

    <div class="container ">
      <div class="row bg-light-gray py-24 px-12">
        <div class="col-12 col-md-4">
          <p class="fs-20 fw-bold">歡迎回來</p>
          <p>這是您的待辦事項</p>
        </div>
        <div class="col-12 col-md-4 px-4">
          <div class="container border border-white bg-white rounded">
            <p class="fs-24">{{ 0 }}</p>
            <p class="text-mid-gray fw-bold">尚未付款的訂單</p>
          </div>
        </div>
        <div class="col-12 col-md-4 px-4">
          <div class="container border border-white bg-white rounded">
            <p class="fs-24">{{ 0 }}</p>
            <p class="text-mid-gray fw-bold">已未付款的訂單</p>
          </div>
        </div>
    
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data() {
    return {

    }
  }
}
</script>