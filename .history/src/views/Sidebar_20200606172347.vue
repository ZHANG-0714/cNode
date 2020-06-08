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

       <div class="img">
         <el-card>
         <div>
           <img src="//static.cnodejs.org/FgIok2ZlDer2QOb8sJ20S9Y8T2Jq" alt="" class="imgSrc">
           <img src="//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt="" class="imgSrc">
           <img src="//static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt="" class="imgSrc">
         </div>
       </el-card>
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
  margin: 10px;
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
  background:#5BC0DE;
  margin-top: 10px;
}
.img{
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
.imgSrc{
  width: 93%;
  height: 70px;
  margin: 0 auto;
  
}
</style>