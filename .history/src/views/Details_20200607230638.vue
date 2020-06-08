<template>
  <!-- 详情页 -->
  <div>
    <div>

      <el-card class="box-card">
       
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

          <div class="line"></div>
        
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
}
.release{
 display: flex;
 font-size: 13px;
 color: #838383;
 margin: 10px 0;
}
.release div{
 margin: 0 3px;
}
.line{
    margin-top: 5px;
  border-bottom: 1px solid #ccc;
}
</style>