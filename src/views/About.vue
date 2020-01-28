<template>
  <div class="about">
    <h1>This is test page <br />路由传参为{{ $route.params.tip }}</h1>
    <div class="img2" :style="{ backgroundImage: 'url(' + bg1 + ')' }"></div>
    <div class="img2" :style="{ backgroundImage: 'url(' + bg2 + ')' }"></div>
    <div class="img2" :style="note"></div>
    <img :src="bg3" />
    <el-carousel height="500px">
      <el-carousel-item>
        <img src="../assets/logo.png" class="carousel_image_type" />
      </el-carousel-item>
      <el-carousel-item>
        <img
          src="https://cn.vuejs.org/images/logo.png"
          class="carousel_image_type"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      // eslint-disable-next-line no-undef
      bg1: require("../assets/logo.png"),
      bg2: "/favicon.ico", //放在public下的 ./到根目录下
      bg3: "https://cn.vuejs.org/images/logo.png", //当后端直接返回一个绝对地址时
      note: { backgroundImage: `url(${require("../assets/logo.png")}) ` }
    };
  }
};
</script>
<style>
.img2 {
  width: 100px;
  height: 100px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100px auto;
}
.carousel_image_type {
  max-height: 100%;
}
.el-carousel__item .Carousel {
  border-bottom: 1px solid #f1f4f8;
}
</style>
