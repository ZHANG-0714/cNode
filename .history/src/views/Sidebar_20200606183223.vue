<template>
  <!-- 侧边栏 -->
  <div>
    <div class='el--input--width sidebar'>

      <!-- 登录前 -->
      <el-card v-if="arr == true">
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

      <!-- 登录后 -->
      <el-card>
        <div class="node">
          吉林省
        </div>
      </el-card>

      

       <div class="card">
         <el-card >
        
          <div class="img">
             <img src="//static.cnodejs.org/FgIok2ZlDer2QOb8sJ20S9Y8T2Jq" alt="" class="imgSrc">
          </div>
          <div class="img">
             <img src="//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt="" class="imgSrc">
          </div>
          <div class="img">
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
    return {
      arr:true
    };
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
  display: flex;
  margin: 10px 0;
  flex-direction: column;
  justify-content: center;align-items: center;
}
.card{
  margin-top: 20px;
}
.imgSrc{
  width: 93%;
  height: 70px;
  margin: 0 auto;
  
}
</style>