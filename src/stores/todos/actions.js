const actions = {
    saveTodo(todo) {
        const index = this.todos.findIndex(td => td.id === todo.id);

        if (index !== -1) {
            this.todos[index] = todo;
            todo.isEditing = false;
            
            return;
        }

        todo.id = this.nextId;
        this.todos.push(todo);
    },
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    },
    editTodo(id) {
        const todo = this.todos.find(td => td.id === id);
        todo.isEditing = true;
    }
};

export default actions;