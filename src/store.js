import { createStore } from 'vuex'

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
            context.commit('setAuth', false)
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

export default store