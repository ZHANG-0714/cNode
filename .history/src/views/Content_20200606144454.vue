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
          <div class="content">
            <div v-for="(item,index) in subject" :key="index" class="subject">

              <img :src="item.author.avatar_url" alt="" class="url">
              <div class="count">
                <span class="reply">{{item.reply_count}}/</span>
                <span class="visit">{{item.visit_count}}</span>
              </div>
              <div>{{item.title}}</div>

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
        .get(`https://cnodejs.org/api/v1/topics`)
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
  height: 45px;
  color: #80BD01;
  display: flex;
  align-items: center;
  background: #F6F6F6;
}
.whole{
  margin-left: 20px;
}
.subject{
  width: 100%;
  height: 47px;
  display: flex;
  align-items: center;
 border-bottom: 1px solid #F6F6F6;
}
.reply{
  font-size: 15px;
  color: #9E78C0;
}
.count{
  margin: 0 10px;
}
.visit{
  font-size: 13px;
  color: #888888;
}
.url{
  width: 32px;
  height: 32px;
  margin-left: 10px;
  border: 0;
  border-radius: 5px;
}
</style>