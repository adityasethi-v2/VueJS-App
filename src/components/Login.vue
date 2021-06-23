<template>
    <div class="container">
        <h1>Welcome to Login</h1>    
        <form @submit.prevent="submit">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" v-model="username">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label" >Password</label>
                <input type="password" class="form-control" id="password" v-model="password">
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
            props: ["cView"],
            "username": "",
            "password": ""
        }
    },
    methods: {
        submit() {            
            axios.get('users.json')
                .then((res) => {
                    let user = res.data.find(user => user.username === this.username && user.password === this.password);
                    if (user) {
                        console.log(`Hello! ${user.username} Welcome!!`);
                        this.$emit('cView', 'dashboard');
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