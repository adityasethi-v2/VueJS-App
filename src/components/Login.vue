<template>
    <div class="container">
        <div class="login-box">
            <h1>Welcome to Login</h1>    
            <form @submit.prevent="submit">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username" v-model="user.username"
                        v-bind:class="{ invalid: !isUsernameValid }">
                    <p class="red-text shake" v-if="!isUsernameValid">Please enter right username</p>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label" >Password</label>
                    <input type="password" class="form-control" id="password" v-model="user.password"
                        v-bind:class="{ invalid: !isPasswordValid }">
                    <p class="red-text shake" v-if="!isPasswordValid">Please makesure this field is not empty</p>
                </div>
                <p class="red-text shake" v-if="!isAuthorize">You are not authorize, Please use right credentials</p>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { reactive, ref } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

interface ValidateFields {
    value: String,
    required: boolean
}

export default defineComponent({
    setup() {
        const user = reactive({
            username: "",
            password: ""
        });

        const isUsernameValid = ref(true);
        const isPasswordValid = ref(true);
        const isAuthorize = ref(true);

        const router = useRouter();
        const store = useStore();

        function validate (data: ValidateFields) {
            let isValid = true;
            if (data.required) {
                isValid = isValid && data.value.toString().trim().length !== 0;
            }
            return isValid;
        }

        function submit() {
            isUsernameValid.value = true;
            isPasswordValid.value = true;
            isAuthorize.value = true;

            const usenameValidation: ValidateFields = {
                value: user.username,
                required: true
            }

            const passwordValidation: ValidateFields = {
                value: user.password,
                required: true
            }

            if(validate(usenameValidation) && validate(passwordValidation)) {
                axios.get('users.json')
                    .then((res) => {
                        let userInList = res.data.find((u: any) => u.username === user.username
                            && u.password === user.password)
                        if (userInList) {
                            store.dispatch('setUserData', user);
                            store.dispatch('login');
                            router.push('/tasks');
                        } else {
                            isAuthorize.value = false;
                        }
                    })
            } else {
                if (!validate(usenameValidation)) {
                    isUsernameValid.value = false;
                }
                if (!validate(passwordValidation)) {
                    isPasswordValid.value = false;
                }
            }
        }

        return { user, submit, isUsernameValid, isPasswordValid, isAuthorize }
    }
})
</script>
<style>
.invalid {
    border-color: red !important;
}

.red-text {
    color: red;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;    
}

.login-box {
    border: 1px solid #dddddd;
    padding: 30px;
    min-width: 400px;
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

</style>