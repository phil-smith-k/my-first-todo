<template>
    <li :draggable="true" :class="`list-item ${todoItem.isCompleted ? 'complete' : ''}`" >
        <div v-if="!todoItem.isEditing" :class="`list-item-container`">
            <p>{{ todoItem.title }}</p>
            <action-button-set :actionOptions="actionOptions"/>
        </div>
        <todo-form v-else :todoItem="todoItem"/>
    </li>
</template>

<script setup>
    import { storeManager  } from '@/stores/store';
    import ActionButtonSet from '@/components/ActionButtonSet.vue';
    import TodoForm from '@/components/TodoForm.vue';
    
    const props = defineProps(['todoItem']);

    function deleteTodoItem(id) {
        storeManager.act('todo', 'deleteTodo', id);
    }

    function editTodo(id) {
        storeManager.act('todo', 'editTodo', id);
    }

    function toggleComplete(id) {
        storeManager.act('todo', 'toggleComplete', id);
    }

    const actionOptions = [
        {
            action: () => editTodo(props.todoItem.id),
            display: () => { 
                return !props.todoItem.isCompleted; 
            },
            iconName: () => 'fa-pencil',
        },
        {
            action: () => deleteTodoItem(props.todoItem.id),
            display: () => true,
            iconName: () => 'fa-xmark',
        },
        {
            action: () => toggleComplete(props.todoItem.id),
            display: () => true,
            iconName: () => {
                const icon = props.todoItem.isCompleted ? 'fa-undo' : 'fa-check';
                return icon;
            }
        }
    ];
</script>

<style>
    .list-item {
        background-color: var(--color-background);
        box-shadow: var(--box-shadow);
        border-radius: var(--border-radius);
        margin-top: 0.5em;
    }
    
    .list-item-container {
        display: flex;
        justify-content: space-between;
    }

    .complete {
        text-decoration: line-through;
        background-color: var(--theme-dark-gray);
    }
</style>