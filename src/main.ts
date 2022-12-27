import { createApp } from 'vue'
import './styles/style.css'
import './styles/tail.css'
import App from './App.vue'
import router from './routes/routes'
const app = createApp(App)

app.use(router)

app.mount('#app')

