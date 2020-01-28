import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//引进element做ui
import "./plugins/element.js";
//引进axios
import axios from "./request/myAxios";
import Vueaxios from "vue-axios";
Vue.use(Vueaxios, axios);
//全局引入api文件
import api from "@/request/api";
Vue.prototype.api = api;
//全局引进mock文件
import "./assets/mock.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
