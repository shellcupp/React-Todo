import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'
import styled from 'styled-components';

class App extends React.Component {
  // call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor
  //Initializing local state by assigning an object to this.state
  constructor(){
    super();
    this.state = {
      todos: [
        {
          task: 'Dishes',
          id: 1,
          completed: false
        },
        {
          task: 'Feed Cats',
          id: 2,
          completed: false
        }
      ],
      todo: ''
    };
  }
 //set new todo to add new todo to todolist
  addTodo = e => {
    e.preventDefault();
    const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
    this.setState({ 
      todos: [...this.state.todos, newTodo], 
      todo: '' 
    });
  };
//mapiing threw the todos so that onclick changes them to line-through (completed)
  changeTodo = e => this.setState({ [e.target.name]: e.target.value });
  toggleTodoComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };
//To clear completed I use filter to find all todos that are complted and set their state back to todo so that is will slice it 
  clearCompletedTodos = e => {
    e.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  render() {
    return (
      <div>
      <Fancyh1>To Do List</Fancyh1>
      <Fancyp>Add More Tasks below and cross them off when you are finished.</Fancyp>
        <TodoList
          handleToggleComplete={this.toggleTodoComplete}
          todos={this.state.todos}
        />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodos={this.clearCompletedTodos}
        />
      </div>
    );
  }
}


const Fancyh1 = styled.h1`
color: pink;
font-family: 'Sriracha', cursive;

`;
const Fancyp = styled.p`
color:pink;
font-family: 'Sriracha', cursive;
`;

export default App;