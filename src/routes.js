import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login.vue'
import AllTasks from './components/AllTasks.vue'
import TaskDetail from './components/TaskDetail.vue'
import AddTask from './components/AddTask.vue'
import store from './store.js'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "", redirect: "/login" },
        { path: "/login", component: Login },
        { path: "/tasks", component: AllTasks },
        { path: "/tasks/:id", component: TaskDetail },
        { path: "/tasks/add", component: AddTask },
        { path: "/tasks/edit/:id", component: AddTask }
    ]
})

router.beforeEach((to, from, next) => {
    if(to.path !== '/login') {
        if(store.getters.userAuthCheck) {
            next();
        } else {
            alert("Please log in");
            next('/login')
        }
    } else {
        next();
    }
})

export default router