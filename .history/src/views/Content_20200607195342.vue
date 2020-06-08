<template>
  <!-- 首页主体内容 -->
  <div>
    <div class="el--input--width">
      <el-card class="box-card">
        <div>
          <!-- 分类 -->
          <div class="cation">
            <div class="wholes">全部</div>
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
              <div class="title" @click="details">{{item.title}}</div>

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
      subject:[],  //首页主体内容
      id: ''
    };
  },
  methods: {
    getData() {
      axios
        .get(`https://cnodejs.org/api/v1/topics`)
        .then(res => {
          this.subject = res.data.data;
          // this.id = res.data.data.id
          console.log(this.subject);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getDataOne() {
      axios
        .get(`https://cnodejs.org/api/v1/topic/${this.subject[this.id]}`)
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err);
        });
    },
    details(){
      this.$router.push('/Details')
    }

  },
  mounted() {
    this.getData();
    this.getDataOne()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box-card {
  width: 1040px;
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
.wholes{
  margin-left: 20px;
  padding: 2px 5px;
  border-radius: 3px;
  color: #fff;
  background: #80BD01;
}
.subject{
  width: 100%;
  height: 47px;
  display: flex;
  align-items: center;
 border-bottom: 1px solid rgb(238, 236, 236);
}
.subject:hover{
  background: #F6F6F6;
}
.reply{
  font-size: 15px;
  color: #9E78C0;
}
.count{
  margin: 0 10px;
}
.visit{
  font-size: 10px;
  color: #D8CDC2;
}
.url{
  width: 32px;
  height: 32px;
  margin-left: 10px;
  border: 0;
  border-radius: 5px;
}
.title:hover{
   cursor: pointer;
  text-decoration: underline;
}
</style>