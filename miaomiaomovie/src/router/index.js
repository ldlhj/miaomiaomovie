import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/common/Home/Movie.vue'
import Cinema from '@/common/Home/Cinema.vue'
import Mine from '@/common/Home/Mine.vue'
import city from '@/common/City/city.vue'
import hot from '@/common/City/hot.vue'
import search from '@/common/City/search.vue'
import soon from '@/common/City/soon.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'movie'
    },
    {
      path: '/movie',
      name: 'movie',
      component: Movie,
      children: [
        {
          path: '/movie/city',
          name: 'city',
          component: city
        },
        {
          path: '/movie/search',
          name: 'search',
          component: search
        },
        {
          path: '/movie',
          redirect: 'hot'
        },
        {
          path: '/movie/hot',
          name: 'hot',
          component: hot
        },
        {
          path: '/movie/soon',
          name: 'soon',
          component: soon
        }
      ]
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
