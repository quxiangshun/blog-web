<template>
  <div>
    <!-- 头部 -->
    <jh-header />
    <!-- 主体 -->
    <div class="jh-main">
      <Nuxt />
    </div>
    <!-- 底部 -->
    <jh-footer />
    <el-backtop :bottom="80" />
  </div>
</template>

<script>
import JhHeader from '@/components/layout/Header.vue'
import JhFooter from '@/components/layout/Footer.vue'
export default {
  components: {
    JhHeader, JhFooter
  }
}
</script>

<style scoped>
.jh-main {
  padding-top: 90px;
  max-width: 1040px;
  margin: 0 auto;
}
</style>
