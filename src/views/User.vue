<template>
  <div>
    <Header :title="'我的'"></Header>
    <div class="user-info">
      <div class="info">
        <img src="//s.weituibao.com/1583583975067/user-graduate%20(1).png" />
        <div class="user-desc">
          <span>昵称：{{user.nickName}}</span>
          <span>登录名：{{user.loginName}}</span>
          <span class="name">个性签名：{{user.introduceSign}}</span>
        </div>
      </div>
    </div>
     <ul class="center_break">
      <li class="order_class">
        <span>我的订单</span>
        <i class="icon iconfont icon-shouye"></i>
      </li>
      <li class="order_class">
      <span>账号管理</span>
        <i class="icon iconfont icon-shouye"></i>
      </li>
      <li class="order_class">
      <span>地址管理</span>
        <i class="icon iconfont icon-shouye"></i>
      </li>
      <li class="order_class">
      <span>关于我们</span>
        <i class="icon iconfont icon-shouye"></i>
      </li>
    </ul>
   
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  components: {
    Header,
  },
  data(){
    return{
      user:{}//定义一个对象
    }
  },
  async created(){
    await this.$axios({
      url:"/info",
      method:"get"
    }).then(res=>{
      console.log(res.data)
      this.user=res.data //取到的值赋值给这user
    })
    .catch(err=>{
      console.log(err)
    })

  },
  mounted() {
   
  },
};
</script>

<style lang="scss">
.user-info {
  // width: 94%;
  margin: 10px;
  height: 115px;
  background: #51c7c7;
  box-shadow: 0 2px 5px #269090;
  border-radius: 6px;
  padding-bottom: 20px;
  .info {
    position: relative;
    display: flex;

    height: 100%;
    padding: 25px 20px;

    img {
      height: 70px;
      width: 80px;
      border-radius: 50%;
      margin-top: 4px;
    }
    .user-desc {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      line-height: 20px;
      font-size: 14px;
      color: #fff;
      span {
        color: #fff;
        font-size: 14px;
        padding: 2px 0;
      }
    }
    // .account-setting {
    //   position: absolute;
    //   top: 10px;
    //   right: 20px;
    //   font-size: 13px;
    //   color: #fff;
    //   .van-icon-setting-o {
    //     font-size: 16px;
    //     vertical-align: -3px;
    //     margin-right: 4px;
    //   }
    // }
  }
}
.center_break{
  margin:20px 10px;
  font-size:18px;
  display: flex;
  flex-direction: column;
  .order_class{
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    border-bottom:1px solid black;
    line-height:40px;
  }
}
</style>
