<template>
  <!-- 首页 -->
  <div>

    <div class="page">
      <Content></Content>
      <Sidebar></Sidebar>
       <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>

    </div>

  </div>
</template>

<script>
import Content from "../views/Content"; //首页主体内容
import Sidebar from "../views/Sidebar"  //侧边栏


export default {
  name: "",
  props: {},
  components: {
    Content,
    Sidebar
    
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
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
} 
</style>