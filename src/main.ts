import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/router'
import { i18n } from './plugins/i18n'
import {createPinia} from "pinia"
import {useAuthStore} from './store/auth.store'
import useFetch from './plugins/useFetch'
import { setupVeeValidateI18n } from './plugins/vee-validate'

const app= createApp(App)
app.use(createPinia())
app.use(i18n)
app.use(router)
app.use(useFetch,{
    authStore: useAuthStore(),
    router: router
})
setupVeeValidateI18n()

app.mount('#app')

