<template>
  <!-- 导航栏 -->
  <div>
    <div class="nav">

      <div class="cno">
        <div>
          <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" alt class="imgs" />
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
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.nav {
  width: 100%;
  height: 60px;
  background-color: #444444;
}
.imgs {
  width: 100px;
  height: 50px;
}
.cno{
  width: 1550px;
  height: 100%;
  margin: 0 auto;
}

</style>