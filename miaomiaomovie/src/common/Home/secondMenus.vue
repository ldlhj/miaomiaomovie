<template>
  <div id="menu">
    <ul>
      <router-link to="/movie/city" tag="li">大连<i class="iconfont">&#xe6bb;</i></router-link>
      <router-link to="/movie/hot" tag="li">正在热映</router-link>
      <router-link to="/movie/soon" tag="li">即将上映</router-link>
      <router-link to="/movie/search" tag="li"><i class="iconfont search">&#xe680;</i></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'secondCars'
}
</script>

<style lang="stylus" scoped>
#menu
  border :1px solid white;
  height :2.6rem;
  background-color :white;
  ul
    padding :0;
    margin :0;
    display :flex;
    justify-content :space-around;
    line-height :2.5rem;
    li
      list-style:none;
      font-size :1.2rem;
    .router-link-active
      color :red;
      border-bottom :.2rem solid red;
    .search
      font-size :1.5rem;
      font-weight:bold;
</style>
