function LoadTodoes() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data =>displayTodoes(data));

}
function displayTodoes(todos) {
    const todoContainer =document.getElementById('todo-container');

    console.log(todos);
    
    for (const todo of todos) {
       const todoDiv = document.createElement('div');
       todoDiv.innerHTML  =  `
       <h3>title: ${todo.title}</h3>
       <p>User: ${todo.userId } </p>
       <p>is Completed: ${todo.completed } </p>
       
   `;
       todoContainer.appendChild(todoDiv);
    }
}
LoadTodoes()


// displayTodoes(data)