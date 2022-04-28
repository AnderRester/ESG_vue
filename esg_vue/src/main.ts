import {createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Lightbox from 'vue-pure-lightbox';

const app = createApp(App)

app.use(router)
app.use(Lightbox)

app.mount('#app')
