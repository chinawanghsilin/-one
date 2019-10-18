<template>
  <el-container class="layout-aside">
    <el-aside style = "width : 200px ; height : 100vh ; background-color : #323745">
      <layout-aside>1</layout-aside>
    </el-aside>
    <el-container>
      <el-header>
        <layout-header></layout-header>
      </el-header>
      <el-main>3</el-main>
    </el-container>
  </el-container>
</template>

<script>
import layoutAside from '../../components/Home/layout-aside'
import layoutHeader from '../../components/Home/layout-header'
export default {
  components: {
    'layout-aside': layoutAside,
    'layout-header': layoutHeader
  }
}
</script>

<style lang = "less">
  /* .layout-aside {
    width: 200px;
    height: 100vh;
    background-color: red;
  } */
</style>
