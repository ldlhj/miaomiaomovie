<template>
  <div>
    <Home></Home>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>

</template>

<script>
import Home from '../home'
export default {
  name: 'Movie',
  components: {
    Home
  }
}
</script>

<style scoped>

</style>
