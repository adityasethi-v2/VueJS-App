<template>
  <navigation-bar v-if="loggedInStatus()"></navigation-bar>
  <router-view></router-view>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'

export default {
  components: {
    NavigationBar
  },
  data() {
    return {
      tasks: [
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
      ]
    }
  },
  methods: {
    loggedInStatus() {
      return this.$store.getters.userAuthCheck;
    }
  },
  provide() {
    return {
      tasks: this.tasks
    }
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