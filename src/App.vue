<template>
  <div v-if="user && user.username">
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
  <router-view @get-user="updateUser"></router-view>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      navBarItems: [
          {
              title: "Create Task",
              link: "/createTask"
          },
          {
              title: "Show Task",
              link: "/showTask"
          }
      ],
      tasks: []
    }
  },
  methods: {
    updateUser(user) {
      this.user = user;
    }
  }
}
</script>
