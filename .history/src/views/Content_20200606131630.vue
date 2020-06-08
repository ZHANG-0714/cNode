<template>
  <!-- 首页主体内容 -->
  <div>

    <div>
      <el-card class="box-card">
        <div v-for="o in 4" :key="o">

        </div>
      </el-card>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    getData(){
      axios.get(` https://cnodejs.org/api/v1/api/v1/topics`).then(res =>{
        console.log(res)
      }).catch(err =>{
        console.log(err)
      })
    }
  },
  mounted() {
    this.getData()
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
</style>