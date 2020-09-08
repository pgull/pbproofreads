import Vue from 'vue'
import App from './App.vue'
import Home from './pages/Home/Home.vue'

const NotFound = { template: '<p>Page not found</p>' }

const routes = {
  '/': App,
  '/preview': Home
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
