import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Track Vue Router navigation
router.afterEach((to) => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'pageview',
    page_path: to.fullPath,
    page_title: document.title,
  })
})

app.use(router)
app.mount('#app')
