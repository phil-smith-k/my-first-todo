<template>
    <div>
        <todo-form />
    </div>
    <todo-list v-if="anyTodos" :todos="todos"/>
</template>

<script setup>
    // import { storeToRefs } from 'pinia';
    import { storeManager } from '@/stores/store';
    import { computed } from 'vue';
    import TodoForm from './components/TodoForm.vue';
    import TodoList from './components/TodoList.vue';
    //import useTodoStore from './stores/todos/todoStore';

    // const todos = storeManager.getAsRef('todo.todos');
    //const store = useTodoStore();

    //const { todos } = storeToRefs(store);
    const todos = storeManager.stateAsRef('todo', 'todos');

    // if there is a value that is useful in the template like computing a certain string messsage
    // use computed otherwise just use a getter. Computes a value based off of state rather than just getting values from state. 
    const anyTodos = computed(() => todos.value.length !== 0); 

    // function deleteTodo(id) {
    //     store.deleteTodo(id);
    //     storeManager.act('todo.deleteTodo');
    // }

    // Ref vs Reactive
    // Reactive only works on object types
    // Reassinging the value of a reactive is dangerous as computed properties will reference the initial value
    // Getters return a reactive
</script>

<style scoped>
    div {
        text-align: center;
    }

    * > * + * {
        margin-top: 1em;
    }
</style>