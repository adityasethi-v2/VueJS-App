<template>
<div class="createTaskSection">
    <form class="form-control" @submit.prevent="addTaskData()">
        <div class="mb-3">
            <label for="taskName" class="form-label">Task title</label>
            <input name="taskName" class="form-control" v-model="task.name"/>
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Task description</label>
            <textarea name="description" class="form-control" v-model="task.description"></textarea>
        </div>
        <div class="mb-3">
            <label for="taskName" class="form-label">Priority</label>
            <select class="form-control" v-model="task.priority">
                <option disabled value="">Please select one</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="estimatedTime" class="form-label">Estimated time</label>
            <input name="estimatedTime" class="form-control" v-model="task.estimatedTime"/>
        </div>
        <div class="mb-3">
            <label for="assignedTo" class="form-label">Assigned to</label>
            <input name="assignedTo" class="form-control" v-model="task.assignedTo"/>
        </div>
        <button class="btn btn-primary" type="submit">Create</button>
    </form>
</div>
</template>

<script>

export default ({
    data() {
        return {
            task: {}
        }
    },
    inject: ['tasks'],
    methods: {
        addTaskData() {
            this.task.id = new Date().getTime().toString();
            this.tasks.push(this.task);
            this.$router.push('/tasks')
        }
    }
})
</script>
<style>

</style>
