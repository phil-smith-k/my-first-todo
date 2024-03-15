<template>
    <ul class="app-list">
        <todo-item v-for="todo in props.todos" :key="todo.id" :todoItem="todo"/>
    </ul>
</template>

<script setup>
    import TodoItem from './TodoItem.vue';

    const props = defineProps(['todos']);
</script>

<style>
    .app-list {
        border-radius: var(--border-radius);
        border: 2px solid var(--color-background-1);
        min-height: 3em;
        padding: 1em;
        max-width: 600px;
        min-width: 400px;
        margin: 0 auto;
    }
</style>