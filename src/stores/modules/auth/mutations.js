export default {
    setAuth(state, payload) {
        state.isLoggedIn = payload;
    },
    setUser(state, user) {
        state.user = user;
    }
}