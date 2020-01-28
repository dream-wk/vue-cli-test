<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-input v-model="in2" placeholder="请输入内容"></el-input>
    <el-input v-model="in1" placeholder="请输入内容"></el-input>
    <el-button type="primary" @click="testAxios()"
      >axios请求测试<i class="el-icon-upload el-icon--right"></i
    ></el-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: Number
  },
  data() {
    return {
      in1: null,
      in2: null
    };
  },
  methods: {
    testAxios() {
      this.axios
        .post(this.api.postForm, {
          username: this.in1,
          password: this.in2
        })
        .then(res => {
          // eslint-disable-next-line no-console
          console.log(res.data);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
