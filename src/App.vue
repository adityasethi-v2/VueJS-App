<template>
  <navigation-bar v-if="isLoggedIn"></navigation-bar>
  <router-view></router-view>
</template>

<script lang="ts">
import NavigationBar from './components/NavigationBar.vue'
import { reactive, provide, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    NavigationBar
  },
  setup() {
    const tasks = reactive([
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

    const store = useStore();

    function addTask(taskObj: any) {
      tasks.push(taskObj);
    }

    provide("tasks", tasks);
    provide("addTask", addTask);

    return { isLoggedIn: computed(() => store.getters.userAuthCheck) }
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