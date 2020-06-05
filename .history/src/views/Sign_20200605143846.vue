<template>
  <!-- 登录 -->
  <div>

    <div class="sign">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>欢迎来到cNode社区</span>
        </div>
        <!-- <div v-for="o in 4" :key="o" class="text item"> -->
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
        </div>
      </el-card>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.text {
  font-size: 14px;
}

//   .item {
//     margin-bottom: 18px;
//   }

.box-card {
  width: 400px;
  margin: 200px auto;
}
</style>