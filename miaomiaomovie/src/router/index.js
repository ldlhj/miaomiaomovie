import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/HelloComponents.vue'
import Movie from '@/common/Home/Movie.vue'
import Cinema from '@/common/Home/Cinema.vue'
import Mine from '@/common/Home/Mine.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: hello
    },
    {
      path: '/movie',
      name: 'movie',
      component: Movie
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: Cinema
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    }
  ]
})
