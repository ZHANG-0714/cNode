<template>
  <!-- 首页主体内容 -->
  <div>

    <div class="page">
      <el-card class="box-card">
        <div v-for="o in 4" :key="o"></div>
      </el-card>
    </div>

  </div>
</template>

<script>
import Navigation from "../views/Navigation"; //导航栏

export default {
  name: "",
  props: {},
  components: {
    Navigation
  },
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
.page{
  width: 1390px;
  height: 100%;
  margin: 0 auto;
} 
.box-card {
  width: 1000px;
  height: 550px;
  margin-top: 20px;
}
</style>