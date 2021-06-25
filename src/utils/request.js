import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

const messages = {
  401: "未授权",
  403: "禁止访问",
  404: "资源找不到",
  500: "服务器内部错误",
};

const request = axios.create({
  baseURL: "/api",
  headers: {},
  timeout: 10000,
});

request.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});

request.interceptors.response.use(
  (response) => {
    NProgress.done();
    if (response.data.code === 200) {
      return response.data.data;
    } else {
      return Promise.reject(response.data.message || "未知错误，请联系管理员");
    }
  },
  (error) => {
    NProgress.done();

    let message = "未知错误，请联系管理员";
    console.log(error);

    if (error.response) {
      message = messages[error.response.status];
    } else {
      if (error.message.indexOf("timeout") > -1) {
        message = "网络超时，请连接WIFI试试";
      } else if (error.message.indexOf("Network") > -1) {
        message = "断网了，请打开网络链接试试";
      }
    }
    return Promise.reject(message);
  }
);

export default request;
