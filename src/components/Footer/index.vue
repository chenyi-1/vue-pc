<template>
  <div class="footer-tpo">
    <div class="footer-top">
      <ul>
        <li><h4>购物指南</h4></li>
        <li>购物流程</li>
        <li>会员介绍</li>
        <li>生活旅行/团购</li>
        <li>常见问题</li>
        <li>购物指南</li>
      </ul>

      <ul>
        <li><h4>配送方式</h4></li>
        <li>上门自提</li>
        <li>211限时达</li>
        <li>配送服务查询</li>
        <li>配送费收取标准</li>
        <li>海外配送</li>
      </ul>

      <ul>
        <li><h4>支付方式</h4></li>
        <li>货到付款</li>
        <li>在线支付</li>
        <li>分期付款</li>
        <li>邮局汇款</li>
        <li>公司转账</li>
      </ul>

      <ul>
        <li><h4>售后服务</h4></li>
        <li>售后政策</li>
        <li>价格保护</li>
        <li>退款说明</li>
        <li>返修/退换货</li>
        <li>取消订单</li>
      </ul>

      <ul>
        <li><h4>特色服务</h4></li>
        <li>夺宝岛</li>
        <li>DIY装机</li>
        <li>延保服务</li>
        <li>尚品汇E卡</li>
        <li>尚品汇通信</li>
      </ul>

      <ul>
        <li><h4>帮助中心</h4></li>
        <img src="./wx_cz.28d584e6.jpg" />
      </ul>
    </div>
    <div class="footer-alt">
      <ul class="footer-ulli">
        <li>关于我们</li>
        <li>联系我们</li>
        <li>关于我们</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>友情链接</li>
        <li>关于我们</li>
        <li>友情链接</li>
        <li>营销中心</li>
        <li>关于我们</li>
        <li>关于我们</li>
      </ul>
      <p>地址：北京市昌平区宏福科技园综合楼6层</p>
      <p>京ICP备19006430号</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
.footer-tpo {
  min-width: 1200px;
  background-color: #eaeaea;
}
.footer-top {
  display: flex;
  width: 1200px;
  justify-content: space-around;
  margin: 0 auto;
  padding-top: 20px;
  margin-bottom: 20px;
}
.footer-alt {
  width: 1200px;
  margin: 0 auto;
  p {
    display: flex;
    justify-content: center;
  }
}
.footer-ulli {
  display: flex;
  justify-content: center;
  li {
    border-right: 1px solid black;
    padding-right: 5px;
    padding-left: 5px;
  }
}
.footer-ulli li:last-child {
  border: 0;
}
</style>
