<template>
  <!-- 最外面的背景图 -->
  <div class="login">
    <!-- 中间的白色卡片 -->
    <el-card class="card">
      <!-- 头部logo -->
      <div class="title">
        <img src="../../assets/logo_index.png" alt="">
      </div>
      <!-- 中间的表单 -->
      <el-form>
        <el-form-item >
          <el-input placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item >
          <el-input placeholder="请输入验证码" style="width : 65%;" ></el-input>
          <el-button style="float : right">发送验证码</el-button>
        </el-form-item>
      </el-form>
      <el-checkbox label="我已阅读并同意用户协议和隐私条款" name="type"></el-checkbox>
      <el-row>
        <el-button type = "primary" style="width : 100% ; margin-top : 30px">登录</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {}
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
