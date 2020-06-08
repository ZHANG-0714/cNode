<template>
  <!-- 侧边栏 -->
  <div>
    <div class='el--input--width sidebar'>

      <el-card>
        <div class="node">
          <div>CNode: Node.js专业中文社区</div>

          <div class="tips">
            <div>您可以</div>
            <div>登录</div>
            <div>或</div>
            <div>注册</div>
            <div>，也可以</div>
          </div>

          <div>
             <el-button type="primary">通过 GitHub 登录</el-button>
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
.node div{
  margin: 10px 0 0 10px;
  
}
.tips{
  display: flex;
}
</style>