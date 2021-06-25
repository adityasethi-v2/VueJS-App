<template>
<header>
    <nav>
        <ul class="navItems">
            <li><router-link to="/tasks/add">Add Task</router-link></li>
            <li><router-link to="/tasks">All Tasks</router-link></li>
        </ul>
        <ul class="userDetail">
            <li class="pull-right"><a href="">Hello! {{user.username }}</a></li>
            <li class="pull-right"><a href="" class="btn btn-danger" @click="logout">Logout</a></li>
        </ul>
    </nav>
</header>
</template>
<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

export default ({
  setup() {
    const store = useStore();
    const router = useRouter();
        
    function logout () {
      store.dispatch('setUserData', undefined);
      store.dispatch('logout');
      router.push('/login');
    }
    return {
      user: computed(() => store.getters.getUser),
      logout
    }
  }
})
</script>

<style scoped>
header {
  width: 100%;
  height: 100px;
  background-color: #282A35;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
}

ul.navItems {
  justify-content: flex-start;
}
ul.userDetail {
  float: right;
}

li {
  margin: 0 1rem;
}

a {
  text-decoration: none;
  color: white;
  font-size: 1.25rem;
}

a:hover,
a:active,
a.router-link-active {
  color: #fca55e;
}
</style>