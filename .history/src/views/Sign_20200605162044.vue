<template>
  <!-- 登录 -->
  <div>
    <div class="sign">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>欢迎来到cNode社区</span>
        </div>
        <div class="text item">

  <div class="el--input--width">
        <el-form  :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

            <el-form-item label="请输入用户名" prop="name">
             <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="请输入密码" prop="password">
             <el-input v-model="ruleForm.password" type="password" autocomplete="off"></el-input>
            </el-form-item>

             <el-form-item label="确认密码" prop="confirm">
             <el-input v-model="ruleForm.confirm"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>

            <el-button type="primary">立即登录</el-button>

        </el-form>
  </div>

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
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        };
    return {
        ruleForm: {
          name: '',
          password:'',
          confirm:''
        },
         rules: {
          name: [
            { required: true, message: '请输入用户名' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { max: 15, message: '长度为15位', trigger: 'blur' }
          ],
          confirm: [
            { required: true, message: '请再次输入密码', trigger: 'blur' },
            { max: 5, message: '长度为15位', trigger: 'blur' }
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

.box-card {
  width: 500px;
  margin: 150px auto;
}
.el-button{
    margin: 20px 0 20px 160px;
}
</style>