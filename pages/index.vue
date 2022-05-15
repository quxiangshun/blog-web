<template>
  <div>
    <el-button v-for="(item, index) in 100" :key="index" type="primary">aaaa</el-button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  asyncData() {
    console.log('process.env.authURL', process.env.authURL)
  }
}
</script>
