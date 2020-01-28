<!-- 页面测试响应式字体和图片大小 -->
<template>
  <div class="main">
    <div class="content">
      <div><img src="/imges/test.jpg" /></div>
      <div class="testDiv">hello world</div>
    </div>
    <div class="fontClass">hello world</div>
    <div class="operating-business">
      <div class="operating-style"><img src="/imges/1.png" /></div>
      <div class="operating-style"><img src="/imges/2.png" /></div>
      <div class="operating-style"><img src="/imges/3.png" /></div>
      <div class="operating-style"><img src="/imges/4.png" /></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
.main {
  width: 100%;
}
.operating-business {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.operating-style {
  flex: 0 1 25%;
}
.operating-style img {
  width: 30%;
  min-width: 100px;
}
.fontClass {
  font-size: 1.6vw;
}
html {
  font-size: 100px;
}
body {
  margin: 0;
}
.content {
  width: 100%;
  max-width: 640px;
  min-width: 320px;
  margin: 0 auto;
}
.content img {
  width: 100%;
}
.testDiv {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  font-size: 0.28rem;
  font-family: "宋体";
  font-weight: bold;
  text-align: center;
  background: #ccc;
  color: #fff;
}

@media (max-width: 540px) {
  html {
    font-size: 84.375px;
  }
  .fontClass {
    font-size: 16px;
  }
} /*Android常用宽度*/
@media (max-width: 480px) {
  html {
    font-size: 75px;
  }
  .fontClass {
    font-size: 15px;
  }
} /*Android常用宽度*/
@media (max-width: 414px) {
  html {
    font-size: 64.69px;
  }
} /*i6Plus,i7Plus宽度*/
@media (max-width: 375px) {
  html {
    font-size: 58.59px;
  }
} /*i6,i7宽度*/
@media (max-width: 360px) {
  html {
    font-size: 56.25px;
  }
} /*Android常用宽度*/
@media (max-width: 320px) {
  html {
    font-size: 50px;
  }
} /*i5宽度*/
</style>
