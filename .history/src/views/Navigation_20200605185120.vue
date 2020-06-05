<template>
  <!-- 公共组件 -->
  <div class="back">
    <!-- 导航栏 -->
    <div class="nav">

      <div class="cno">
          <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" alt class="imgs" />
          <input type="text" class="inpu">
          <i class="iconfont icon-sousuo search"></i>

          <div class="cation">
            <div class="classifi">首页</div>
            <div class="classifi">新手入门</div>
            <div class="classifi">API</div>
            <div class="classifi">关于</div>
            <div class="classifi">注册</div>
            <div class="classifi" @click="sign">登录</div>
          </div>
        
      </div>

    </div>
    
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    sign(){
      this.$router.push('/Sign')
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.back{
  background-color: #E1E1E1;
}
.nav {
  width: 100%;
  height: 55px;
  background-color: #444444;
}
.imgs {
  width: 120px;
  height: 80px;
}
.cno{
  width: 1390px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
}
.inpu{
  width: 200px;
  height: 30px;
  border-radius: 15px;
  outline: none;
  background: #888888;
  border: 0;
  margin-left: 20px;
  padding-left: 35px;
}
.inpu:hover{
  background: #fff;
  transition: all 1s;
}
.search{
  position: absolute;
  left: 150px;
  font-size: 20px;
  color: #595959;
}
.cation{
  display: flex;
  color: #cccccc;
  position: absolute;
  right: 20px
}
.classifi{
  margin-right: 25px;
  cursor: pointer;
}
.classifi:hover{
  color: #fff;
}

</style>