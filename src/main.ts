import { createApp } from 'vue'
import './styles/style.css'
import './styles/tail.css'
import './styles/main.css'
import App from './App.vue'
import router from './routes/routes'
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import ContextMenu from '@imengyu/vue3-context-menu'
const app = createApp(App)
//https://www.npmjs.com/package/@imengyu/vue3-context-menu
app.use(router)
app.use(ContextMenu)
app.mount('#app')

