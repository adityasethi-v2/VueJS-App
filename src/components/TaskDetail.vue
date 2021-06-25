<template>
    <h3>Task name: {{task.name}}</h3>
    <p>Task Description: {{task.description}}</p>
    <h4>Task assigned to: {{task.assignedTo}}</h4>
    <h5>Duration of task: {{task.estimatedTime}}</h5>
    <h5>Task priority: {{task.priority}}</h5>
    <router-link to="/tasks">Go Back to All tasks</router-link>
</template>
<script>
import { inject } from 'vue';
import { useRoute } from 'vue-router';

export default ({
    setup() {
        const allTasks = inject("tasks");
        const route = useRoute();
        const task = allTasks.value.find(task => task.id === route.params.id);
        return { task }
    }
})
</script>
