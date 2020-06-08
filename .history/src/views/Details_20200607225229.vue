<template>
  <!-- 详情页 -->
  <div>
    <div>

      <el-card class="box-card">
       
          <div>
            <h2>{{detail.title}}</h2>
            <div>
                ●
                <div>发布于</div>
                <div></div>
                <div>小时前</div>
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
</style>