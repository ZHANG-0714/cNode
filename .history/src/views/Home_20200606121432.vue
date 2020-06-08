<template>
  <!-- 首页 -->
  <div>

    <div class="page">
      <Content></Content>
    </div>

  </div>
</template>

<script>
import Content from "../views/Content"; //首页主体内容


export default {
  name: "",
  props: {},
  components: {
    Content
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
} 
</style>