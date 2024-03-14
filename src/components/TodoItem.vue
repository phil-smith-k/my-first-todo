<template>
    <li  class="list-item">
        <div v-if="!todoItem.isEditing" class="list-item-container">
            <p>{{ todoItem.title }}</p>
            <action-button-set :actionOptions="actionOptions"/>
        </div>
        <todo-form v-else :todoItem="todoItem">

        </todo-form>
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

    const actionOptions = [
        {
            action: () => editTodo(props.todoItem.id),
            iconName: 'fa-pencil',
        },
        {
            action: () => deleteTodoItem(props.todoItem.id),
            iconName: 'fa-xmark',
        },
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
</style>