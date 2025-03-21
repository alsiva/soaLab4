import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { UrlService } from './scripts/urlService'

const app = createApp(App)
const base_url = "https://localhost:8080"
const first_service = "https://127.0.0.1:8082/firstService"
const second_service = "https://127.0.0.1:8081/api/killer"
const urlService = new UrlService(base_url)
const urlServiceFirst = new UrlService(first_service)
const urlServiceSecond = new UrlService(second_service)

app.use(router)

app.mount('#app')

export {urlService, urlServiceFirst, urlServiceSecond};
