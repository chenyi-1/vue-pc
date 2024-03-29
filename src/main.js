import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入mock使其生效
import './mock'

import "./styles/reset.css";
import "./styles/iconfont.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
