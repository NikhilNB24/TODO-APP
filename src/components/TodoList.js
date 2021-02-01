import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, setTodos, FilteredTodos}) =>{
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {FilteredTodos.map(todo => (
                    <Todo 
                    setTodos={setTodos} 
                    todos={todos} 
                    key={todo.id}
                    todo={todo}
                    text={todo.text} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;