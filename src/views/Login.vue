<template>
  <div class="input_class">
    <h1>登录</h1>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="name" v-if="item ? true : false">
        <el-input
          type="text"
          v-model="ruleForm.name"
          autocomplete="off"
          maxlength="4"
        ></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model.number="ruleForm.phone" maxlength="11"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
          maxlength="9"
        ></el-input>
      </el-form-item>
      <el-form-item class="section_class">
        <el-button type="primary" @click.prevent="submitForm('ruleForm')"
          >登录</el-button
        >
        <el-button type="success" @click.prevent="loading">去注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// import {mapMutations} from 'vuex'
// import Verify from 'vue2-verify'  //图形验证码
// import{ setItem, getItem}from '../utils/storage'

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
        return callback(new Error("请输入9位密码"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        // name: "袁袁",
        password: "987456321",
        phone:"15158817870"

      },
      item:false,
      rules: {
        // name: [{ validator: validateName, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],

      },
    };
  },

  created() {},
  methods: {
    // ...mapMutations(['changeLogin']),

    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        //async和await用法
        if (valid) {
          // const name = this.ruleForm.name;
          const password = this.ruleForm.password;
          const phone = this.ruleForm.phone;
          await this.$axios({
            url: "/user/login",
            method: "post",
            data: {
              
              // username: this.$md5(name),
              loginName: phone,//密码加密
              passwordMd5: this.$md5(password),//密码加密

            },
          })
            .then((res) => {
              console.log(res);
              if (res.resultCode === 200) {
                const token=res.data;
                console.log(token);

                this.$store.commit("loginToken",token)
                this.$router.push("/home");
                this.$message({
                  message: res.message,
                  type: "success",
                });
              }
              if (res.resultCode === 0) {
                this.$message({
                  message: res.message,
                  type: "warning",
                });
              }
            })
            .catch((err) => {
              this.$message.error("用户名或密码输入有误");
            });
        } else {
          alert("输入不能为空");
          return false;
        }
      });
    },
    loading() {
      this.$router.push("/Register");
    },
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
