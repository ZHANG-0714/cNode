<template>
  <!-- 登录 -->
  <div>
    <div class="sign">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>欢迎来到cNode社区</span>
        </div>
        <div class="text item">

       <el-form  :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="活动名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
    </el-form>

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
    return {
        ruleForm: {
          name: ''
        },
         rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        }
    };
  },
  methods: {
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
      
  },
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