<template>
<div class="createTaskSection">
    <form class="form-control" @submit.prevent="addTaskData()">
        <div class="mb-3">
            <label for="taskName" class="form-label">Task title</label>
            <input v-bind:class="{invalid: !isNameValid}" name="taskName" class="form-control" v-model="task.name"/>
            <p class="red-text" v-if="!isNameValid">Please enter task name</p>
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Task description</label>
            <textarea v-bind:class="{invalid: !isDescValid}" name="description" class="form-control" v-model="task.description"></textarea>
            <p class="red-text" v-if="!isDescValid">Please enter description, min 30 and maximum 100 character length</p>
        </div>
        <div class="mb-3">
            <label for="priority" class="form-label">Priority</label>
            <select v-bind:class="{invalid: !isPriorityValid}" class="form-control" v-model="task.priority">
                <option disabled value="">Please select one</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
            </select>
            <p class="red-text" v-if="!isPriorityValid">Please select priority</p>
        </div>
        <div class="mb-3">
            <label for="estimatedTime" class="form-label">Estimated time</label>
            <input v-bind:class="{invalid: !isEstimatedTimeValid}" name="estimatedTime" class="form-control" v-model="task.estimatedTime"/>
            <p class="red-text" v-if="!isEstimatedTimeValid">Please enter estimated time value</p>
        </div>
        <div class="mb-3">
            <label for="assignedTo" class="form-label">Assigned to</label>
            <input v-bind:class="{invalid: !isAssignedValid}" name="assignedTo" class="form-control" v-model="task.assignedTo"/>
            <p class="red-text" v-if="!isAssignedValid">Please enter assigned to</p>
        </div>
        <button class="btn btn-primary" type="submit">Create</button>
    </form>
</div>
</template>

<script lang="ts">

interface ValidateTask {
    value: String | number,
    required?: true,
    min?: number,
    max?: number,
    isValid: boolean
}

import { inject, reactive, ref } from "vue";
import { useRouter } from "vue-router";

export default ({
    setup() {
        const addTask: any = inject("addTask");
        const task = reactive({
            id: '',
            name: '',
            description: '',
            priority: '',
            estimatedTime: '',
            assignedTo: ''
        })
        const isNameValid = ref(true);
        const isDescValid = ref(true);
        const isPriorityValid = ref(true);
        const isEstimatedTimeValid = ref(true);
        const isAssignedValid = ref(true);
        
        const router = useRouter();

        function validate(data: ValidateTask) {
            let isValid = true;
            if(data.required) {
                isValid = isValid && data.value.toString().trim().length !== 0;
            }

            if (data.min && data.max && typeof data.value === 'string') {
                isValid = isValid && data.value.toString().trim().length > data.min 
                    && data.value.toString().trim().length < data.max
            }
            data.isValid = isValid;
            return isValid;
        }

        function addTaskData() {
            let nameValidation: ValidateTask = {
                value: task.name,
                required: true,
                isValid: false
            }

            let descriptionValidation: ValidateTask = {
                value: task.description,
                required: true,
                min: 30,
                max: 100,
                isValid: false
            }

            let priorityValidation: ValidateTask = {
                value: task.priority,
                required: true,
                isValid: false
            }

            let estimatedTimeValidation: ValidateTask = {
                value: task.estimatedTime,
                required: true,
                isValid: false
            }

            let assignedToValidation: ValidateTask = {
                value: task.assignedTo,
                required: true,
                isValid: false
            }

            isNameValid.value = validate(nameValidation);
            isDescValid.value = validate(descriptionValidation);
            isPriorityValid.value = validate(priorityValidation);
            isEstimatedTimeValid.value = validate(estimatedTimeValidation);
            isAssignedValid.value = validate(assignedToValidation);
            
            task.id = new Date().getTime().toString();
            
            if (validate(nameValidation) &&
                validate(descriptionValidation) &&
                validate(priorityValidation) &&
                validate(estimatedTimeValidation) &&
                validate(assignedToValidation)) {
                addTask(task);
                router.push("/tasks")
            }
        }

        return {
            addTaskData,
            task,
            isNameValid,
            isDescValid,
            isPriorityValid,
            isEstimatedTimeValid,
            isAssignedValid
        }
    }
})
</script>
<style>

</style>
