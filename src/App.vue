<template>
  <!-- <div v-if="user && user.username">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
          <div class="navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item" v-for="nav in navBarItems" :key="nav.title">
                      <router-link :to="nav.link">{{nav.title}}</router-link>
                  </li>
              </ul>
              <div class="pull-right">Hello {{user.username}}</div>
          </div>
      </div>
    </nav>
  </div>
  <router-view @get-user="updateUser"></router-view> -->
  <navigation-bar></navigation-bar>
  <router-view></router-view>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
import { ref, provide } from 'vue'

export default {
  components: {
    NavigationBar
  },
  setup() {
    const tasks = ref([
      {
        id: "t1",
        name: "Task 1",
        description: "Description about task 1",
        estimatedTime: "10 Days",
        priority: "High",
        assignedTo: "Aditya"
      },
      {
        id: "t2",
        name: "Task 2",
        description: "Description about task 2",
        estimatedTime: "10 Days",
        priority: "High",
        assignedTo: "Swapnil"
      }
    ])

    function addTask(taskObj) {
      tasks.value.push(taskObj);
    }

    provide("tasks", tasks);
    provide("addTask", addTask);
  }
}
</script>
<style>
ul {
  list-style: none;
  margin: 0px;
  padding: 0px !important;
}
</style>