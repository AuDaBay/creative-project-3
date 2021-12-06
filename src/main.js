import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mockgames from './mock-games.js'
import mockdates from './mock-dates.js'
import mockprojects from './mock-projects.js'


Vue.config.productionTip = false
let data = {
  games: [],
  dates: [],
  projects: []
}
new Vue({
  router,
  data: data,
  render: h => h(App)
}).$mount('#app')
