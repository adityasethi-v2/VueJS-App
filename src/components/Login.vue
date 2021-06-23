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
import axios from 'axios'

export default ({
    data() {
        return {
            user: {
                "username": "",
                "password": ""
            }
        }
    },
    methods: {
        submit() {            
            axios.get('users.json')
                .then((res) => {
                    let user = res.data.find(user => user.username === this.user.username && user.password === this.user.password);
                    if (user) {
                        console.log(`Hello! ${user.username} Welcome!!`);
                        this.$router.push('/dashboard');
                        this.$emit('getUser', this.user);
                    } else {
                        console.log("Invalid user, Please enter right details");
                    }
                })
        }
    }
})
</script>
<style>
</style>