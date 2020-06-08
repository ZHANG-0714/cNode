<template>
  <!-- 侧边栏 -->
  <div>
    <div class='sidebar'>

      <el-card>
        <div>{{'列表内容 ' + o }}</div>
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
  width: 700px;
  position: absolute;
  right: 10px;
}
</style>