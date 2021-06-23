<template>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      user: {}  
    }
  },
  methods: {
    getUser(user) {
      this.user = user;
    }
  }
}
</script>
