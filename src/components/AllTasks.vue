<template>
    <section>
        <h2> All Tasks </h2>
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Assigned to</th>
                    <th>Estimated time</th>
                    <th>Priority</th>
                    <th>View Details</th>
                </tr>
                <tr v-for="task in tasks" :key="task.id">
                    <td>{{task.name}}</td>
                    <td>{{task.description}}</td>
                    <td>{{task.assignedTo}}</td>
                    <td>{{task.estimatedTime}}</td>
                    <td>{{task.priority}}</td>
                    <td><router-link :to="'/tasks/' + task.id">View Details</router-link></td>
                </tr>
            </tbody>
        </table>
        <!-- <router-link :to="'/tasks/' + task.id">View Details</router-link> -->
    </section>
</template>

<script>
import { inject } from "vue"

export default ({
    setup() {
        const allTasks = inject('tasks');
        return { "tasks": allTasks }
    }
})
</script>
<style scoped>
section {
    padding: 30px;
    display: flex;
    flex-direction: column;
}
table td, table th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}
table tr:nth-child(odd) { background: #eee; }
</style>
