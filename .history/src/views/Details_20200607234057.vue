<template>
  <!-- 详情页 -->
  <div>
    <div>
<!-- 标题介绍 -->
      <div class="el--input--width">
          <el-card class="box-card">
       <!-- 标题 -->
          <div>
            <h2>{{detail.title}}</h2>
            <div class="release">
                ●
                <div>发布于</div>
                <div>{{}}</div>
                <div>小时前</div>
                ●
                <div>作者</div>
                <div>{{detail.author.loginname}}</div>
                ●
                <div>{{detail.visit_count}}</div>
                <div>次浏览</div>
                ●
                <div>来自</div>
                <div></div>
            </div>
          </div>
          <!-- 线 -->
          <div class="line"></div>
          <!-- 介绍 -->
          <div>{{detail.content}}</div>
        
      </el-card>
      </div>
<!-- 回复内容 -->
      <div class="el--input--width">
          <el-card class="cards">
            <div class="reply">
                 {{detail.reply_count}} 回复
            </div>

            <div v-for="item in detail.replies" :key="item.id">
                <img :src="item.author.avatar_url" alt="">
                <div>
                    {{item.content}}
                </div>
            </div>
        </el-card>
      </div>

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
      id: "",
      detail: []
    };
  },
  methods: {
    getData() {
      axios
        .get(`https://cnodejs.org/api/v1/topic/${this.id}`)
        .then(res => {
          this.detail = res.data.data;
          console.log(this.detail);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    // console.log(this.id);
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box-card {
  width: 1040px;
  margin-left: 70px;
  margin-top: 20px;
  padding: 15px;
}
.cards{
  width: 1070px;
  margin-left: 70px;
  margin-top: 10px;
}
.release{
 display: flex;
 font-size: 13px;
 color: #838383;
 margin: 10px 0;
}
.release div{
 margin: 5px 3px;
}
.line{
  border-bottom: 1px solid #E5E5E5;
  margin-bottom: 10px;
}
.reply{
    width: 100%;
    line-height: 40px;
    padding-left: 10px;
    background: #F6F6F6;
}
</style>