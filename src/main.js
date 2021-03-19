import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import mock from './mock-data.js'

let data = {
  books: mock.reads,
  id: mock.updatedID,
  nominatelist: [],
  tobuylist: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
