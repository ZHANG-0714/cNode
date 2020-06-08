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
            <div class="classifi" @click="sign" v-if="arr === ''">登录</div>
            <div class="classifi" v-else>退出</div>
          </div>
        
      </div>

    </div>
    
    <router-view></router-view>

    <!-- 尾部 -->
    <div class="tail">
      <div class="foots">

        <div class="address">
          <div>RSS</div>
          <div class="rss">|</div>
          <div>源码地址</div>
        </div>

        <div>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</div>

        <div class="service">
          服务器赞助商为
          <img src="//static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9" alt="" class="label">
          ，存储赞助商为
          <img src="//static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX" alt="" class="qiniu">
          ，由
          <img src="//static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD" alt="" class="sponsor">
         提供应用性能服务。
        </div>

        <div class="build">
          <div>新手搭建 Node.js 服务器，推荐使用无需备案的</div>
          <a href="https://www.digitalocean.com/?refcode=eba02656eeb3" target="_blank" class="com"> DigitalOcean(https://www.digitalocean.com/)</a>
        </div>

      </div>

    </div>
    
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      name:''
    };
  },
  methods: {
    sign(){
      this.$router.push('/Sign')
    }
  },
  mounted() {
     this.name = localStorage.getItem('name')
  },
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

// 尾部
.tail{
  width: 100%;
  height: 180px;
  background: #fff;
}
.foots{
  width: 1390px;
  height: 100%;
  margin: 0 auto;
  color: #ABABAB;
  font-size: 14px;
}
.foots div{
  margin-top: 5px;
}
.address{
  display: flex;
  padding-top: 20px;
  color: #666666;
  font-size: 13px;
}
.rss{
  color: #EAE4E2;
  margin: 0 5px;
}

.label{
  width: 100px;
  height: 20px;
  cursor: pointer;
}
.sponsor{
  width: 160px;
  height: 55px;
}
.qiniu{
  width: 110px;
  height: 40px;
}
.build{
  display: flex;
  margin-bottom: 30px;
}
.com{
  color: #0088CE;
  margin-left: 5px;
  margin-top: 5px;
  
}
.com:hover{
  color: #3D67B7;
}
</style>