<template>
  <nav-bar-vue></nav-bar-vue>
  <div class="container-fluid px-0 py-32 vh-100">
    <div class="container">
      <p></p>
      <div class="row">
        <div class="col-sm-6 col-lg-8 mx-auto">
          <ol
            class="pay-list pt-32 mb-32 d-flex justify-content-between list-unstyled position-relative"
          >
            <li class="d-flex flex-column align-items-center">
              <p
                class="number number-active d-flex justify-content-center align-items-center mb-8"
              >
                1
              </p>
              <p class="fw-bold mb-0">訂單確認</p>
            </li>
            <li class="d-flex flex-column align-items-center">
              <p
                class="number number-active d-flex justify-content-center align-items-center mb-8"
              >
                2
              </p>
              <p class="fw-bold mb-0">結帳付款</p>
            </li>
            <li class="d-flex flex-column align-items-center">
              <p
                class="number number-active d-flex justify-content-center align-items-center mb-8"
              >
                3
              </p>
              <p class="fw-bold">訂單結果</p>
            </li>
          </ol>
          


          <p class="mb-32">
            ※ 您的訂單將在付款後開始訂製，付款後，從開始製作到寄出商品為 14
            個工作天。
          </p>

        </div>
      </div>
    </div>
  </div>
  <page-footer-vue></page-footer-vue>
</template>

<script>
export default {
  mounted() {
    alert("付款完成")
  },
}
</script>

<style >
.number {
  border: 1px solid #000;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background-color: white;
  z-index: 1;
  font-weight: bold;
}
@media (min-width: 768px) {
  .number {
    width: 48px;
    height: 48px;
    font-size: 24px;
  }
}
.number-active {
  background-color: black;
  color: white;
}

.pay-list::before {
  content: "";
  width: 90%;
  height: 1px;
  background-color: black;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  position: absolute;
  z-index: 1;
}
</style>