import React from 'react';
//in this component I changed the style of the todo after a click so completed can be crossed off
const Todo = props => {
  return (
    <div
      style={props.todo.completed ? { textDecoration: 'line-through', color: 'pink' } : null}
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};

export default Todo;