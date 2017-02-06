(function(){
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage
	
	const vm = new Vue({
    el: '#root',
    data: {
        todos: [],
        todo: ''
        
    },
    methods: {
        submitTodo(todo) {
            this.todos.push({
                task: todo,
                completed: false
            })
            this.todo='' 
        },
        removeItem(todo){
        var i = this.todos.indexOf(todo)
            this.todos.splice(i,1)
        },
        completedTodo(todo){
            todo.completed=!todo.completed
        }
    }
})
	
	
}())
