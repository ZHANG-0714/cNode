<template>
  <!-- 导航栏 -->
  <div>
    <div class="nav">

      <div class="cno">
        
          <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" alt class="imgs" />
         
          <input type="text" class="inpu">
          <i class="iconfont icon-sousuo"></i>
        
        
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
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
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
}
.inpu{
  width: 240px;
  height: 30px;
  border-radius: 15px;
  background: #888888;
  border: 0;
  margin-left: 20px;
}
.iconfont icon-sousuo{
  position: absolute;
  right: 50px;
  font-size: 20px;
}

</style>