<template>
  <div class="input_class">
    <h1>注册</h1>

    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="name">
        <el-input
          type="text"
          v-model="ruleForm.name"
          autocomplete="off"
          maxlength="4"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
          maxlength="8"
        ></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model.number="ruleForm.phone" maxlength="11"></el-input>
      </el-form-item>
      <el-form-item class="section_class">
        <el-button type="primary" @click.prevent="submitForm('ruleForm')"
          >注册</el-button
        >
        <el-button @click.prevent="resetForm('ruleForm')">重置</el-button>
        <el-button type="success" @click.prevent="loading">去登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    let patter = /^[\u4e00-\u9fa5]+$/; //验证中文
    let patters = /^[0-9]+$/;
    let telText = /^1[2-8]\d{9}$/;

    var validateName = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入用户名"));
      }
      if (!patter.test(value)) {
        return callback(new Error("请输入中文"));
      } else if (value.length < 2) {
        return callback(new Error("请输入至少2位中文"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入密码"));
      }
      if (!patters.test(value)) {
        return callback(new Error("请输入数字"));
      } else if (value.length < 8) {
        return callback(new Error("请输入8位密码"));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入手机号码"));
      }
      if (!telText.test(value)) {
        return callback(new Error("请输入正确的手机号码"));
      } else if (value.length < 8) {
        return callback(new Error("请输入11位密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        password: "",
        phone: "",
      },
      rules: {
        name: [{ validator: validateName, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        phone: [{ validator: validatePhone, trigger: "blur" }],
      },
    };
  },
  created(){

  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {//async和await用法
        if (valid) {
          const name = this.ruleForm.name;
          const password = this.ruleForm.password;
          const phone = this.ruleForm.phone;
        await this.$axios({
            url: "/register",
            method: "post",
            data: {
              username: name,
              password: password,
              phone: phone,
            },
          })
            .then((res) => {
              // console.log(res.data.status);
              if (res.data.status === 1) {
                this.$message({
                  message: res.data.msg,
                  type: "success",
                });
                this.$router.push("/Login");
              }
              if (res.data.status === 0) {
                this.$message({
                  message: res.data.msg,
                  type: "warning",
                });
              }
            })
            .catch((err) => {
              this.$message.error("服务器故障,请稍后重试")
            })
        } else {
          alert('服务器故障')
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    loading(){
        this.$router.push('/Login')
    }
  },
};
</script>

<style lang="scss">
.input_class {
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    text-align: center;
    margin: 20px 0;
    font-weight: bold;
  }
  .demo-ruleForm {
    display: flex;
    flex-direction: column;

    margin: auto;
    width: 80%;

    .section_class {
      display: flex;
      margin: 20px 0;
    }
  }
}
</style>
