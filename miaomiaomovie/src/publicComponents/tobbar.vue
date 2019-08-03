<template>
    <div id="footer">
      <ul>
        <router-link to="/movie" tag="li">
          <i class="iconfont">&nbsp;&#xe6af;</i>
          <p>电影</p>
        </router-link>
        <router-link to="/cinema" tag="li">
          <i class="iconfont">&nbsp;&#xe652;</i>
          <p>影院</p>
        </router-link>
        <router-link to="/mine" tag="li">
          <i class="iconfont">&nbsp;&#xe617;</i>
          <p>我的</p>
        </router-link>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'tobbar'
}
</script>

<style lang="stylus" scoped>
  #footer
    width :100%;
    border :1px solid #ccc;
    height :3.4rem;
    position :absolute;
    bottom:0rem;
    border-bottom :none;
    border-left :none;
    background-color :white
    z-index :999;
    ul
      padding :0;
      margin-top:0rem;
      /*border :1px solid red;*/
      height :3rem;
      display :flex;
      justify-content :space-around;
      li
        list-style:none;
      .router-link-active
        color :red;
      p
        margin :0;
        padding :0;
        text-align :center;
        font-size :1rem;
      i
        font-size :1.3rem;
</style>
