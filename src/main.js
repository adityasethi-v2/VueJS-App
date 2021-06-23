import { createApp } from 'vue'
import App from './App.vue'
import Login from './components/Login.vue'
import Dashboard from './components/Dashboard.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)

app.component('login-component', Login);
app.component('dashboard', Dashboard);
app.mount('#app')
