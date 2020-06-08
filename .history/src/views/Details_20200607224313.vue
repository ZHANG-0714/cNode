<template>
  <!-- 详情页 -->
  <div>
    <div>

      <el-card>
       
          <div >
            <div>{{detail.title}}</div>
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
</style>