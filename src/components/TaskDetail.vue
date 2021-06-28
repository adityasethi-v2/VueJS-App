<template>
    <h3>Task name: {{task.name}}</h3>
    <p>Task Description: {{task.description}}</p>
    <h4>Task assigned to: {{task.assignedTo}}</h4>
    <h5>Duration of task: {{task.estimatedTime}}</h5>
    <h5>Task priority: {{task.priority}}</h5>
    <router-link to="/tasks">Go Back to All tasks</router-link>
</template>
<script>

export default ({
    data() {
        return {
            task: {}
        }
    },
    inject: ['tasks'],
    created() {
        this.task = this.tasks.find(task => task.id === this.$route.params.id);
    }
})
</script>
