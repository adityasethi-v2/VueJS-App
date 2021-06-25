<template>
    <section>
        <h2> All Tasks </h2>
        <ul>
            <li class="jumbotron" v-for="task in tasks" :key="task.id">
                <h3>Task name: {{task.name}}</h3>
                <p>Task Description: {{task.description}}</p>
                <h4>Task assigned to: {{task.assignedTo}}</h4>
                <h5>Duration of task: {{task.estimatedTime}}</h5>
                <h5>Task priority: {{task.priority}}</h5>
                <router-link :to="'/tasks/' + task.id">View Details</router-link>
            </li>
        </ul>
    </section>
</template>

<script>
import { inject } from "@vue/runtime-core"

export default ({
    setup() {
        const allTasks = inject('tasks');
        return { "tasks": allTasks }
    }
})
</script>
<style scoped>
li {
  padding: 25px;
}
li:nth-child(odd) { background: #eee; }
</style>
