<template>
    <div class="container">
        <h1>Welcome to Login</h1>    
        <form @submit.prevent="submit">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" v-model="user.username">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label" >Password</label>
                <input type="password" class="form-control" id="password" v-model="user.password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import { reactive } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default ({
    setup() {
        const user = reactive({
            username: "",
            password: ""
        });

        const router = useRouter();
        const store = useStore();

        function submit() {
            axios.get('users.json')
                .then((res) => {
                    let userInList = res.data.find(u => u.username === user.username
                        && u.password === user.password)
                    if (userInList) {
                        store.dispatch('setUserData', user);
                        store.dispatch('login');
                        router.push('/tasks');
                    }
                })
        }

        return { user, submit}
    }
})
</script>
<style>
</style>