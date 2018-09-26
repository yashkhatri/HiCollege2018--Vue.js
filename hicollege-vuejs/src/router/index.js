import Vue from 'vue'
import Router from 'vue-router'
import rsvpApp from '@/components/rsvpApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'rsvpApp',
      component: rsvpApp
    }
  ]
})
