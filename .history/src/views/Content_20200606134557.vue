<template>
  <!-- 首页主体内容 -->
  <div>
    <div class="el--input--width">
      <el-card class="box-card">
        <div>
          <!-- 分类 -->
          <div class="cation">
            <div>全部</div>
            <div>精华</div>
            <div>分享</div>
            <div>问答</div>
            <div>招聘</div>
            <div>客户端测试</div>
          </div>
        
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      subject:[]  //首页主体内容
    };
  },
  methods: {
    getData() {
      axios
        .get(` https://cnodejs.org/api/v1/topics`)
        .then(res => {
          this.subject = res.data.data;
          console.log(this.subject);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box-card {
  width: 1040px;
  height: 550px;
}
.cation{
  width: 100%;
  height: 50px;
  display: flex;
  background: #F6F6F6;
}
</style>