import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex'
import App from './App.vue'
import Login from './components/Login.vue'
import AllTasks from './components/AllTasks.vue'
import TaskDetail from './components/TaskDetail.vue'
import AddTask from './components/AddTask.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

const store = createStore({
    state() {
        return {
            isLoggedIn: false,
            user: {}
        };
    },
    actions: {
        login(context) {
            context.commit('setAuth', true);
        },
        logout(context) {
            context.commit('setAuth', true)
        },
        setUserData(context, user) {
            context.commit('setUser', user)
        }
    },
    mutations: {
        setAuth(state, payload) {
            state.isLoggedIn = payload;
        },
        setUser(state, user) {
            state.user = user;
        }
    },
    getters: {
        userAuthCheck(state) {
            return state.isLoggedIn
        },
        getUser(state) {
            return state.user;
        }
    }
})

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "", redirect: "/login" },
        { path: "/login", component: Login },
        { path: "/tasks", component: AllTasks },
        { path: "/tasks/:id", component: TaskDetail },
        { path: "/tasks/add", component: AddTask }
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

const app = createApp(App)
app.use(router);
app.use(store);
app.mount('#app')
