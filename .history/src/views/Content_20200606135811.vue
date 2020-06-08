<template>
  <!-- 首页主体内容 -->
  <div>
    <div class="el--input--width">
      <el-card class="box-card">
        <div>
          <!-- 分类 -->
          <div class="cation">
            <div class="whole">全部</div>
            <div class="whole">精华</div>
            <div class="whole">分享</div>
            <div class="whole">问答</div>
            <div class="whole">招聘</div>
            <div class="whole">客户端测试</div>
          </div>

          <!-- 内容 -->
          <div>
            <div v-for="item in subject" :key="item.id">
              <img :src="item.data.author.avatar_url" alt="">
            </div>
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
          this.subject = res.data;
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
  height: 45px;
  color: #80BD01;
  display: flex;
  align-items: center;
  background: #F6F6F6;
}
.whole{
  margin-left: 20px;
}
</style>