<template>
  <div>
    <div class="header-color">
      <div class="header-head">
        <div class="header-display">
          <p>尚品汇欢迎您! 请&nbsp;</p>
          <div>
            <router-link to="/login" class="haeader-a">登录</router-link>
          </div>

          <div class="header-diva">
            <router-link to="/register">免费注册</router-link>
          </div>
        </div>

        <ul class="header-ul">
          <li><router-link to="/">我的订单</router-link></li>
          <li><router-link to="/">我的购物车</router-link></li>
          <li><router-link to="/">我的尚品汇</router-link></li>
          <li><router-link to="/">尚品汇会员</router-link></li>
          <li><router-link to="/">企业采购</router-link></li>
          <li><router-link to="/">关注尚品汇</router-link></li>
          <li><router-link to="/">合作招商</router-link></li>
          <li>
            <router-link to="/" class="header-last"> 商家后台</router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="header-img">
      <router-link to="/">
        <img src="./logo.b2878689.png" />
      </router-link>
      <form class="header-form" @submit.prevent="toSearch">
        <input type="text" v-model="keyword" />
        <button>搜索</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    toString() {
      const keyword = this.keyword.trim();

      const location = {
        name: "Search",
        query: this.$route.query,
      };

      if (keyword) {
        location.params = { keyword };
      }

      this.$router.history.push(location);
    },
  },
};
</script>

<style lang="less" scoped>
.header-color {
  background-color: #eaeaea;
  min-width: 1200px;
}
.header-head {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  line-height: 30px;
  justify-content: space-between;
}

.header-display {
  display: flex;
}
.header-diva {
  margin-left: 5px;
}
.haeader-a {
  border-right: 1px solid black;
  padding-right: 5px;
}
.header-ul {
  display: flex;

  li a {
    border-right: 1px solid black;
    padding-right: 5px;
    margin-left: 5px;
  }
  .header-last {
    border-right: 0;
  }
}
.header-img {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.header-form {
  line-height: 50px;
  input {
    border: 1px solid #ea4a36;
    width: 450px;
    height: 22px;
    padding: 4px 5px;
    margin-top: 11px;
    outline: none;
  }
  button {
    width: 80px;
    height: 32px;
    color: #eaeaea;
    background-color: #ea4a36;
    border: none;
  }
}
</style>
