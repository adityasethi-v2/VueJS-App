import { createApp } from 'vue';
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './stores/index.js';
import router from './routes.js'


const app = createApp(App)

app.use(router);
app.use(store);
app.mount('#app')
