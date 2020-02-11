import React from 'react';
import Todo from './Todo';
//created this functional component to take props from App and populate a todo list from the todos array
const TodoList = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <Todo
          handleToggleComplete={props.handleToggleComplete}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;