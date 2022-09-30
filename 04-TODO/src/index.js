import './style.css';



import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';



export const todoList = new TodoList();


// todoList.todos.forEach( todo => crearTodoHtml( todo ));  // Esta linea es lo mismo que el de abajo se envía solo un argumento se puede reducir
todoList.todos.forEach( crearTodoHtml);

console.log('todos', todoList.todos );