export default {
    userAuthCheck(state) {
        return state.isLoggedIn
    },
    getUser(state) {
        return state.user;
    }
}