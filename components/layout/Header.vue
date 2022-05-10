<template>
  <div class="jh-header jh-header-fixed">
    <div class="jh-nav">
      <el-row type="flex" justify="space-between">
        <el-col :span="4">logo</el-col>
        <!-- :xs="0" <768px 隐藏栅格数或者栅格属性对象 :sm="0" ≥768px 隐藏栅格数或者栅格属性对象
        如果这两个属性（xs/sm）同时出现，响应式就会失效，这个是bug。通过设置class解决
        <a>https://element.eleme.cn/#/zh-CN/component/layout</a>
        添加class=“hidden-sm-and-down”代替:xs="0" :sm="0"
              -->
        <el-col class="hidden-sm-and-down" :md="10">菜单</el-col>
        <el-col :xs="18" :sm="18" :md="8">登录注册头像</el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JhHeader'
}
</script>

<style scoped>
.jh-header {
  width: 100%;
  height: 60px;
  background-color: #fafafa;
  border-top: 3px solid #345dc2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
  z-index: 150;
}

.jh-header-fixed {
  position: fixed
}
</style>