import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Login from './components/Login.vue'
import Dashboard from './components/Dashboard.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

const router = createRouter({
    history: createWebHistory(),  
    routes: [
        {
            path: "",
            redirect: "/login"
        },
        {
            path: "/login",
            component: Login,
        },
        {
            path: "/dashboard",
            component: Dashboard
        }
        
    ]
})

const app = createApp(App)

// app.component('login-component', Login);
// app.component('dashboard', Dashboard);
app.use(router);
app.mount('#app')
