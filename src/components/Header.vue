<template>
  <div class="header_class">
    <i class="icon iconfont icon-shouye" @click="goback"></i>
    <div class="section_class">{{ title }}</div>
    <i class="icon iconfont icon-shouye"></i>
  </div>
</template>

<script>
export default {
  //外部传入的属性,定义类型
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
    .header_class{
        display:flex;
        justify-content: space-between;
        align-items: center;
        line-height: 30px;
        padding:10px 0;
        border-bottom: 1px solid black;
        font-size: 23px;
        i:nth-child(1){
            font-size:25px;
            margin-left:15px
        }
        i:nth-child(3){
            font-size:25px;
            margin-right:15px
        }
    }

</style>
