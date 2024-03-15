const actions = {
    saveTodo(todo) {
        const index = this.todos.findIndex(td => td.id === todo.id);

        if (index !== -1) {
            todo.isEditing = false;
            this.todos[index] = todo;
            
            return;
        }

        todo.id = this.nextId;
        todo.isCompleted = false;
        this.todos.push(todo);
    },
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    },
    editTodo(id) {
        const todo = this.todos.find(td => td.id === id);
        todo.isEditing = true;
    },
    toggleComplete(id) {
        const todos = this.todos;
        const index = todos.findIndex(td => td.id === id);

        const todo = this.todos[index];
        todo.isCompleted = !todo.isCompleted;

        todos.push(this.todos.splice(index, 1)[0]);
        this.todos = todos;
    }
};

export default actions;