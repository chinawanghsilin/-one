<template>
  <!-- 最外面的背景图 -->
  <div class="login">
    <!-- 中间的白色卡片 -->
    <el-card class="card">
      <!-- 头部logo -->
      <div class="title">
        <img src="../../assets/logo_index.png" alt />
      </div>
      <!-- 中间的表单 -->
      <el-form :model="formDate" :rules="rules" ref="loginForm">
        <el-form-item prop="mobile">
          <el-input placeholder="请输入用户名" v-model="formDate.mobile"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input placeholder="请输入验证码" v-model="formDate.code" style="width : 65%;"></el-input>
          <el-button style="float : right">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="checkbox">
          <el-checkbox label="我已阅读并同意用户协议和隐私条款" name="type" v-model="formDate.checkbox"></el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width : 100% ; " @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
// import { type } from 'os'
export default {
  data () {
    var func = function (rule, value, callback) {
      if (value) {
        callback()
      } else {
        callback(new Error('请仔细阅读协议'))
      }
    }
    return {
      formDate: {
        mobile: '',
        code: '',
        checkbox: false
      },
      rules: {
        mobile: [
          {
            required: true,
            message: '请输入手机号',
            tigger: 'blur'
          },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: '手机号格式错误',
            trigger: 'blur'
          }
        ],
        code: [
          {
            required: true,
            message: '请输入验证码',
            tigger: 'blur'
          },
          {
            pattern: /^\d{6}$/,
            message: '验证码必须为6位数字'
          }
        ],
        checkbox: [
          {
            validator: func
          }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate(isOk => {
        if (isOk) {
          // console.log('前端校验成功')
          this.$axios({
            method: 'post',
            url: '/authorizations',
            data: this.formDate
          }).then(result => {
            console.log(result)
            window.localStorage.setItem(
              'user-info',
              JSON.stringify(result.data.data)
            )
            this.$router.push('/home')
          }).catch(() => {
            // alert('您的账户或者密码错误')
            this.$message({
              message: '当前账户或者密码有误',
              type: 'warning'
            })
          })
        }
      })
    }
  }
}
</script>

<style lang = "less" scoped>
/* 背景图片 */
.login {
  width: 100%;
  height: 100vh;
  background: url("../../assets/login_bg.jpg") no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 中间的白色卡片 */
  .card {
    width: 440px;
    height: 360px;
    /* text-align: center; */
    /* 卡片上的logo */
    .title {
      text-align: center;
      margin-bottom: 30px;
      img {
        width: 200px;
        height: 45px;
      }
    }
  }
}
</style>
