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
    height :3.3rem;
    position :absolute;
    bottom:0;
    border-bottom :none;
    border-left :none;
    ul
      padding :0;
      margin :0.2rem 0 0 0;
      display :flex;
      justify-content :space-around;
      /*line-height :3.2rem;*/
      li
        list-style:none;
        /*line-height :3.2rem;*/
        /*border :1px solid red;*/
        p
          margin :0;
          text-align :center;
          font-size :1rem;
        i
          font-size :1.3rem;
</style>
