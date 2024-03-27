<template>
    <form class="todo-form" @submit.prevent autocomplete="off">
        <input autocomplete="false" name="hidden" type="text" style="display:none;">
        <input @focus="clearForm" class="app-input" v-model="todoItem.title" id="todo-input" />
        <app-button :action="submitForm">
            <font-awesome-icon v-slot :icon="`fa-check`"/>
        </app-button>
    </form>
</template>

<script setup>
    import AppButton  from '@/components/AppButton.vue';
    import { storeManager } from '@/stores/store';

    const todoItem = defineModel('todoItem', { default: { title: 'make a new todo!'} });

    function clearForm() {
        if (todoItem.value.isEditing) {
            return;
        }

        const todo = todoItem.value;
        todoItem.value = { ...todo, title : '' };
    }

    function submitForm() {
        if (!todoItem.value.title) {
            return;
        }

        const todo = {
            id: todoItem.value?.id,
            title: todoItem.value.title,
        }

        storeManager.act('todo', 'saveTodo', todo);
        clearForm();
    }
</script>

<style>

    .todo-form {
        min-width: 400px;
    }

    .app-input {
        background-color: var(--color-background);
        box-shadow: var(--box-shadow);
        border: 2px solid transparent;
        border-radius: var(--border-radius);
        min-height: 2em;
        color: var(--text-color-light);
        padding: 0 1em;
        margin-right: 1em;
        caret-color: var(--color-background-1);
    }
    
    .app-input:focus {
        outline: none;
        border: 2px solid var(--color-background-1);
    }
</style>