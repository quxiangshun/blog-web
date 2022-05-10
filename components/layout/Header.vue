<template>
  <div class="jh-header jh-header-fixed">
    <div class="jh-nav">
      <el-row type="flex" justify="space-between">
        <el-col :span="4">
          <nuxt-link to="/">
            <img style="height: 40px" src="@/assets/images/logo.png" fit="fill" />
          </nuxt-link>
        </el-col>
        <!-- :xs="0" <768px 隐藏栅格数或者栅格属性对象 :sm="0" ≥768px 隐藏栅格数或者栅格属性对象
        如果这两个属性（xs/sm）同时出现，响应式就会失效，这个是bug。通过设置class解决
        <a>https://element.eleme.cn/#/zh-CN/component/layout</a>
        添加class=“hidden-sm-and-down”代替:xs="0" :sm="0"
              -->
        <el-col class="hidden-sm-and-down" :md="10">
          <el-menu default-active="/" mode="horizontal" background-color="#fafafa" text-color="#545c64"
            active-text-color="#345dc2" router>
            <el-menu-item index="/">博客</el-menu-item>
            <el-menu-item index="/question">问答</el-menu-item>
            <el-menu-item index="/label">标签</el-menu-item>
          </el-menu>
        </el-col>
        <el-col class="nav-right" :xs="18" :sm="18" :md="8">
          <div class="nav-sign">
            <el-button type="text">管理后台</el-button>
            <el-button type="text">登录</el-button>
            <el-button type="primary" round size="small">注册</el-button>
          </div>
          <el-dropdown @command="handleCommand">
            <div class="el-dropdown-link">
              <el-avatar icon="el-icon-user-solid"></el-avatar>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item  command="article" icon="el-icon-edit-outline">写文章</el-dropdown-item>
              <el-dropdown-item  command="question" icon="el-icon-question">提问题</el-dropdown-item>
              <el-dropdown-item  command="user" icon="el-icon-s-home">我的主页</el-dropdown-item>
              <el-dropdown-item  command="logout" icon="el-icon-switch-button">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JhHeader',
  data() {
    return {
    }
  },
  methods: {
    handleCommand(command) {
      this.$message('click on item ' + command);
    }
  }
}
</script>

<style scoped>
/* 头部 */
.jh-header {
  width: 100%;
  height: 60px;
  background-color: #fafafa;
  border-top: 3px solid #345dc2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
  z-index: 150;
}

/* 固定头部 */
.jh-header-fixed {
  position: fixed
}

/* 导航 */
.jh-header .jh-nav {
  max-width: 1140px;
  /* 居中 */
  margin: auto; 
  padding: 10px;
} 

.el-menu.el-menu--horizontal {
  /* 去除底部边框 */
  border-bottom: 0px;
  margin-top: -10px;
}

/* 导航右侧 */
.nav-right {
  text-align: right;
}
.nav-sign {
  position: absolute;
  right: 0;
  margin-right: 50px;
}

/* 防止点击头像有边框 */
div:focus {
  outline: none;  
}
</style>