<script setup>
    import { storeManager } from '@/stores/store';
    import { computed } from 'vue';
    import TodoForm from '@/components/TodoForm.vue';
    import TodoList from '@/components/TodoList.vue';

    const todos = storeManager.stateAsRef('todo', 'todos');
    const anyTodos = computed(() => todos.value.length !== 0); 
</script>
 
<template>
    <div>
        <todo-form />
    </div>
    <todo-list v-if="anyTodos" :todos="todos"/>
</template>
 
<style scoped>
    div {
        text-align: center;
    }

    * > * + * {
        margin-top: 1em;
    }
</style>