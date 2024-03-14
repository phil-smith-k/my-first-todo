<template>
    <form class="todo-form" @submit.prevent>
        <input class="app-input" v-model="todoItem.title" id="todo-input" />
        <app-button :action="submitForm" :iconName="`fa-check`" />
    </form>
</template>

<script setup>
    import { toRef } from 'vue';
    import AppButton  from '@/components/AppButton.vue';
    import { storeManager } from '@/stores/store';

    const todoItem = defineModel('todoItem', { default: { title: 'make a new todo'} });
    console.log(todoItem.value.title);

    function submitForm() {
        if (!todoItem.value.title) {
            return;
        }

        const todo = {
            id: todoItem.value?.id,
            title: todoItem.value.title,
        }

        storeManager.act('todo', 'saveTodo', todo);
        todoItem.value.title = '';
    }
</script>

<style>
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