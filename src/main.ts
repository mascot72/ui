import './assets/main.css'

import { createApp } from 'vue'
<<<<<<< Updated upstream
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

=======
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    incremenet(state) {
      state.count++
    }
  }
})
>>>>>>> Stashed changes
app.use(router)
app.use(store)
app.mount('#app')
