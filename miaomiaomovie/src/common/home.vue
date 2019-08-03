<template>
  <div>
    <Header></Header>
    <second></second>
    <tobbar></tobbar>
  </div>
</template>
<script>
/* 引入的是头部底部和二级菜单 */
import Header from '../publicComponents/Header'
import tobbar from '../publicComponents/tobbar'
import second from './Home/secondMenus'
export default {
  name: 'home',
  components: {
    Header,
    tobbar,
    second
  }
}
</script>

<style scoped>

</style>
