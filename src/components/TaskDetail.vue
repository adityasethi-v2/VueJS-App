<template>
<div class="taskDetail">
    <h3>Task name: {{task.name}}</h3>
    <p>Task Description: {{task.description}}</p>
    <h4>Task assigned to: {{task.assignedTo}}</h4>
    <h5>Duration of task: {{task.estimatedTime}}</h5>
    <h5>Task priority: {{task.priority}}</h5>
    <router-link :to="'/tasks/edit/' + task.id">Edit This task</router-link>
    <br>
    <!-- <div v-for="t in allTasks" :key="t.id">
        <router-link :to="'/tasks/' + t.id">{{t.name}}</router-link>    
    </div> -->
    <router-link to="/tasks">Go Back to All tasks</router-link>
</div>
</template>
<script>
import { inject, reactive,watch } from 'vue';
import { useRoute } from 'vue-router';

export default ({
    setup() {
        const allTasks = inject("tasks");
        const route = useRoute();
        let task = reactive(allTasks.find(t => t.id === route.params.id));
        watch(() => route.params.id, 
            async newId => {
                task = await allTasks.find(t => t.id === newId)
                console.log('route is changing');
            }
        )
        return { task, allTasks }
    }
})
</script>
<style scoped>
.taskDetail {
    padding: 30px;
}
</style>