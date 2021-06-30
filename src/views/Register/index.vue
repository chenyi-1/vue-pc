<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <ValidationObserver v-slot="{ handleSubmit }">
      <!-- 
        handleSubmit(submit) 
        当form表单的submit事件触发了，会先校验表单，校验通过在触发submit方法
       -->
      <form class="register" @submit.prevent="handleSubmit(submit)">
        <h3>
          注册新用户
          <span class="go"
            >我有账号，去
            <router-link to="/login">登陆</router-link>
          </span>
        </h3>
        <!-- 
          class 类名
          rules 表单校验规则
          tag 决定ValidationProvider最终会渲染成什么标签
          debounce 表单校验延迟多久触发
          v-slot="{ errors }" 作用域插槽，为了得到表单校验失败的错误信息
         -->
        <ValidationProvider
          class="content"
          name="phone"
          rules="phoneRequired|phone"
          tag="div"
          :debounce="1000"
          v-slot="{ errors }"
        >
          <label>手机号:</label>
          <input
            type="text"
            placeholder="请输入你的手机号"
            v-model="user.phone"
          />
          <span class="error-msg">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider
          class="content"
          name="code"
          rules="codeRequired|code"
          tag="div"
          :debounce="1000"
          v-slot="{ errors }"
        >
          <label>验证码:</label>
          <input type="text" placeholder="请输入验证码" v-model="user.code" />
          <button :disabled="isDisabled" @click="sendCode">发送验证码</button>
          <span class="error-msg">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider
          class="content"
          name="password"
          rules="passwordRequired|password"
          tag="div"
          :debounce="1000"
          v-slot="{ errors }"
        >
          <label>登录密码:</label>
          <input
            type="text"
            placeholder="请输入你的登录密码"
            v-model="user.password"
          />
          <span class="error-msg">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider
          class="content"
          name="rePassword"
          :rules="`rePasswordRequired|rePassword:${user.password}`"
          tag="div"
          :debounce="1000"
          v-slot="{ errors }"
        >
          <label>确认密码:</label>
          <input
            type="text"
            placeholder="请输入确认密码"
            v-model="user.rePassword"
          />
          <span class="error-msg">{{ errors[0] }}</span>
        </ValidationProvider>
        <div class="controls">
          <input name="m1" type="checkbox" />
          <span>同意协议并注册《尚品汇用户协议》</span>
          <span class="error-msg">错误提示信息</span>
        </div>
        <div class="btn">
          <button type="submit">完成注册</button>
        </div>
      </form>
    </ValidationObserver>

    <!-- 底部 -->
    <div class="copyright">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>手机尚品汇</li>
        <li>销售联盟</li>
        <li>尚品汇社区</li>
      </ul>
      <div class="address">地址：北京市昌平区宏福科技园综合楼6层</div>
      <div class="beian">京ICP备19006430号</div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { reqSendCode } from "../../api/user";
import "./validate";
import { phoneReg } from "../../utils/regs";
export default {
  name: "Register",
  data() {
    return {
      user: {
        phone: "",
        code: "",
        password: "",
        rePassword: "",
      },
    };
  },
  methods: {
    submit() {
      console.log("表单校验过了～");
    },
    async sendCode() {
      const code = await reqSendCode(this.user.phone);
      console.log(code);
    },
  },
  computed: {
    isDisabled() {
      return phoneReg.test(this.user.phone) ? false : true;
    },
  },
  components: {
    ValidationObserver,
    ValidationProvider,
  },
};
</script>

<style lang="less" scoped>
.register-container {
  .register {
    width: 1200px;
    height: 445px;
    border: 1px solid rgb(223, 223, 223);
    margin: 0 auto;

    h3 {
      background: #ececec;
      margin: 0;
      padding: 6px 15px;
      color: #333;
      border-bottom: 1px solid #dfdfdf;
      font-size: 20.04px;
      line-height: 30.06px;

      span {
        font-size: 14px;
        float: right;

        a {
          color: #e1251b;
        }
      }
    }

    div:nth-of-type(1) {
      margin-top: 40px;
    }

    .content {
      padding-left: 390px;
      margin-bottom: 18px;
      position: relative;

      label {
        font-size: 14px;
        width: 96px;
        text-align: right;
        display: inline-block;
      }

      input {
        width: 270px;
        height: 38px;
        padding-left: 8px;
        box-sizing: border-box;
        margin-left: 5px;
        outline: none;
        border: 1px solid #999;
      }

      img {
        vertical-align: sub;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .controls {
      text-align: center;
      position: relative;

      input {
        vertical-align: middle;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .btn {
      text-align: center;
      line-height: 36px;
      margin: 17px 0 0 55px;

      button {
        outline: none;
        width: 270px;
        height: 36px;
        background: #e1251b;
        color: #fff !important;
        display: inline-block;
        font-size: 16px;
      }
    }
  }

  .copyright {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 24px;

    ul {
      li {
        display: inline-block;
        border-right: 1px solid #e4e4e4;
        padding: 0 20px;
        margin: 15px 0;
      }
    }
  }
}
</style>