<template>
  <!-- 侧边栏 -->
  <div>
    <div class='el--input--width sidebar'>

      <el-card>
        <div class="node">
          <div>CNode: Node.js专业中文社区</div>

          <div class="tips">
            <div>您可以</div>
            <div class="you">登录</div>
            <div>或</div>
            <div class="you">注册</div>
            <div>，也可以</div>
          </div>

          <div>
             <el-button class="red">通过 GitHub 登录</el-button>
          </div>

        </div>
      </el-card>

    </div>
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
.sidebar{
  width: 320px;
  position: absolute;
  right: 10px;
  top: 0;
}
.node{
  margin: 10px 0 0 10px;
}
.you{
  margin: 0 5px;
  color: #778087;
}
.tips{
  display: flex;
  margin-top: 10px;
  font-size: 14px;
}
.red{
  color: #fff;
  background:#5BC0DE ;
}
</style>