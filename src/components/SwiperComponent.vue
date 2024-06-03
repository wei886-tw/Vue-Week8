<template>
  <swiper
    :loop="true"
    :modules="modules"
    :pagination="{ clickable: true }"
    :slides-per-view="1"
    :space-between="10"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    @slideChange="onSlideChange"
    class="mySwiper"
  >
    <swiper-slide
      style="
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.6)
          ),
          url('pic/slide1.jpeg');
        height: 600px;
        width: 100%;
        object-fit: cover;
        background-repeat: no-repeat;
        background-position: center;
      "
    >
      <div class="container pt-32 pt-lg-128">
        <div class="row">
          <div class="col-lg-4"></div>
          <div class="col-lg-4">
            <div
              class="container d-flex flex-column align-items-center justify-content-center "
            >
              <img
                src="/public/pic/jobs.jpg"
                alt=""
                style="
                  width: 200px;
                  height: 200px;
                  border-radius: 50%;
                  border-color: white;
                "
                class="mb-40"
              />
              <p class="fs-32 text-white mb-16">賈伯斯</p>
              <p class="text-white">
                這家店真的是個寶藏！我在這裡找到了一部狀況非常好的二手iPhone，價格也非常合理。店員非常友善，耐心解答了我所有的問題，並且還幫我檢查了手機的各項功能。強烈推薦給所有尋找高品質二手3C產品的人！
              </p>
            </div>
          </div>
          <div class="col-lg-4"></div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide
      style="
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.6)
          ),
          url('pic/store-3.jpg');
        height: 600px;
        width: 100%;
        object-fit: cover;
        background-repeat: no-repeat;
        background-position: center;
      "
    >
      <div class="container pt-32 pt-lg-128">
        <div class="row">
          <div class="col-lg-4"></div>
          <div class="col-lg-4">
            <div
              class="container d-flex flex-column align-items-center justify-content-center"
            >
              <img
                src="/public/pic/gates.jpg"
                alt=""
                style="
                  width: 200px;
                  height: 200px;
                  border-radius: 50%;
                  border-color: white;
                  object-fit: cover;
                "
                class="mb-40"
              />
              <p class="fs-32 text-white mb-16">比爾蓋茲</p>
              <p class="text-white">
                這家二手店提供了多種多樣的3C產品，從手機到筆記本電腦應有盡有。我買了一台二手的MacBook，運行狀況很好，外觀也很新。唯一的缺點是店內有時候人比較多，需要等待一段時間才能得到服務，但總體來說還是非常值得。
              </p>
            </div>
          </div>
          <div class="col-lg-4"></div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide
      style="
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.6)
          ),
          url('pic/slide-3.jpg');
        height: 600px;
        width: 100%;
        background-repeat: no-repeat;
        background-position: center;
      "
    >
      <div class="container pt-32 pt-lg-128">
        <div class="row">
          <div class="col-lg-4"></div>
          <div class="col-lg-4">
            <div
              class="container d-flex flex-column align-items-center justify-content-center"
            >
              <img
                src="/public/pic/page.jpg"
                alt=""
                style="
                  width: 200px;
                  height: 200px;
                  border-radius: 50%;
                  border-color: white;
                  object-fit: cover;
                "
                class="mb-40"
              />
              <p class="fs-32 text-white mb-16">Larry Page</p>
              <p class="text-white">
                店內的產品種類很多，價格特別便宜。而且，品質還是可以保證的。我買了一台二手平板，運行一切正常。店員的態度還不錯。
              </p>
            </div>
          </div>
          <div class="col-lg-4"></div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSlideChange = () => {};
    return {
      onSlideChange,
      modules: [Autoplay],
    };
  },

  methods: {},
};
</script>