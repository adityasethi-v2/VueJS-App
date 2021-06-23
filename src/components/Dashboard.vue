<template>
<div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <div class="navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item" v-for="nav in navBarItems" :key="nav.title" @click="displayView(nav)" :class="{active: nav.title === currentView}">
                        <a class="nav-link" aria-current="page">{{nav.title}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="createTaskSection" v-if="currentView === 'Create Task'">
        <h1>This is create task section</h1>
    </div>
    <div class="showTaskSection" v-if="currentView === 'Show Task'">
        <h1>This is show task section</h1>
    </div>
</div>
</template>

<script>
export default ({
    data() {
        return {
            props: ['cView'],
            currentView: "Show Task",
            navBarItems: [
                {
                    title: "Create Task",
                    link: ""
                },
                {
                    title: "Show Task",
                    link: ""
                }
            ]
        }
    },
    methods: {
        displayView(obj) {
            this.currentView = obj.title;
        }
    }
})
</script>
<style>

</style>
