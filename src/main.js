import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Login from './components/Login.vue'
import AllTasks from './components/AllTasks.vue'
import TaskDetail from './components/TaskDetail.vue'
import AddTask from './components/AddTask.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

const router = createRouter({
    history: createWebHistory(),  
    routes: [
        {
            path: "",
            redirect: "/tasks"
        },
        {
            path: "/login",
            component: Login,
        },
        {
            path: "/tasks",
            component: AllTasks
        },
        {
            path: "/tasks/:id",
            component: TaskDetail
        },
        {
            path: "/tasks/add",
            component: AddTask
        }
    ]
})

const app = createApp(App)

// app.component('login-component', Login);
// app.component('dashboard', Dashboard);
app.use(router);
app.mount('#app')
