<template>
  <login-component v-model="cView" v-if="cView === 'login'"></login-component>
  <dashboard v-model="cView" v-if="cView === 'dashboard'"></dashboard>
</template>

<script>
export default {
  data() {
    return {
      cView: 'login',
    }
  },
  methods: {
    updateView(view) {
      this.cView = view;
    }
  }
}
</script>
