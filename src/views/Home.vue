/* eslint-disable no-console */
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <el-button type="primary" icon="el-icon-edit" @click="push()"
      >router测试</el-button
    >
    <el-button type="primary" icon="el-icon-edit" @click="post()"
      >mock测试</el-button
    >
    <el-button type="primary" icon="el-icon-edit" @click="change()"
      >传值测试</el-button
    >
    <HelloWorld :msg="msg" />
    <div v-for="item in list" :key="item.id">
      <button @click="del(item.index)">删除</button>
      <input
        type="checkbox"
        :id="item.name"
        :value="item.name"
        v-model="checkedNames"
      />
      <label for="item.name">{{ item.name }}</label>
    </div>
    <span>Checked names: {{ checkedNames }}</span>
    <input v-model="mes" placeholder="名字" />
    <button @click="add">增加</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      checkedNames: [],
      newId: 3,
      list: [
        { id: 1, name: "李斯" },
        { id: 2, name: "吕不韦" },
        { id: 3, name: "嬴政" }
      ],
      msg: 200,
      mes: ""
    };
  },
  // watch:{
  //   name(){

  //   }
  // },

  methods: {
    push() {
      // eslint-disable-next-line no-console
      this.$router.push({
        name: "about",
        params: { tip: "123" }
      });
    },
    post() {
      this.axios
        .post("/public/login", {
          username: "wk",
          password: "123"
        })
        .then(res => {
          // eslint-disable-next-line no-console
          console.log(res.data);
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    },
    change() {
      this.msg++;
    },
    add() {
      //注意这里是unshift
      this.list.push({ id: this.list.length + 1, name: this.mes });
    },
    del(id) {
      this.list.splice(id - 1, 1);
      // eslint-disable-next-line no-console
      console.log("123");
    }
  }
};
</script>
