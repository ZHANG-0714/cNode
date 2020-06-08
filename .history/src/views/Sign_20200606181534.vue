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
            <el-form
              :model="ruleForm"
              status-icon
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="请输入用户名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>

              <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off" show-password></el-input>
              </el-form-item>

              <el-form-item label="确认密码" prop="confirm">
                <el-input type="password" v-model="ruleForm.confirm" autocomplete="off"></el-input>
              </el-form-item>

              <el-button type="primary" @click="submitForm">立即登录</el-button>
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
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        password: "",
        confirm: "",
      },

      password: [{ validator: validatePass, trigger: "blur" }],
      confirm: [{ validator: validatePass2, trigger: "blur" }],

      rules: {
        name: [
          { required: true, message: "请输入用户名" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符" }
        ],
        password: [
          { required: true, validator: validatePass, trigger: "blur" },
          { max: 15, message: "请输入密码" }
        ],
        confirm: [
          { required: true, validator: validatePass2, trigger: "blur" },
          { max: 15, message: "请再次输入密码" }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$message({
            message: "恭喜你，登录成功",
            type: "success"
          });
   
          this.$router.push('/Home'),
          // ('',function(){
          //    localStorage.setItem('name',ruleForm.name)
          // })
           console.log(localStorage.setItem('name',this.ruleForm.name))
       
          // name = localStorage.getItem('name')
        } else {
          this.$message.error("密码或用户名输入错误");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    signin() {
      this.$router;
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box-card {
  width: 530px;
  margin: 150px auto;
}
.el-button {
  margin: 20px 0 20px 160px;
}
</style>