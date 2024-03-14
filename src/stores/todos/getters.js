const getters = {
    // could be 
    // getTodos: (state) => [...state.todos],
    // nextId: (state) => {
    //  ...
    //}
    getTodos(state) {
        return [...state.todos];
    },
    nextId(state) {
        if (state.todos.length === 0)
            return 1;

        return Math.max(...state.todos.map(td => td.id)) + 1;
    }
}

export default getters;