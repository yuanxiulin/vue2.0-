<template>
  <div class="nav-bar">
    <ul class="nav-list">
      <router-link tag="li" class="nav-list-item active" exact to="home">
        <!-- 引用iconfont字体 -->
        <i class="icon iconfont icon-shouye"></i>
        <span>首页</span>
      </router-link>
      <router-link tag="li" class="nav-list-item" to="category">
        <i class="icon iconfont icon-biaoqiankuozhan_fenlei-127"></i>
        <span>分类</span>
      </router-link>
      <router-link tag="li" class="nav-list-item" to="cart">
        <i class="icon iconfont icon-qicheqianlian-"></i>
        <span>购物车</span>
      </router-link>
      <router-link tag="li" class="nav-list-item" to="user">
        <i class="icon iconfont icon-biaoqiankuozhan_wode-310"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav-bar {
  // position: relative;

  .nav-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    right: left;
    bottom: 0;
    height: 60px;
    background: pink;
    border-top: 1px solid #235;
    width: 100%;
    .nav-list-item{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &.router-link-active {
            color: #1baeae
          }
      i{
        font-size: 22px;
      }
    }
  }
}
</style>
