import React, { PureComponent } from 'react';
import uuidv1 from 'uuid';

import { TodoForm, TodoList, CompletedTodoList, TodoCheckboxList } from './components';

import './App.css';

class App extends PureComponent {
  // state = { list: [] };
  state = {
    todos: [],
    completedTodos: [],
  };

  handleSubmitButtonClick = (todo) => {
    const id = uuidv1();
    const newTodo = {
      id, title: todo, isCompleted: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  handleCompleteButtonClick = (requestedId, requestedTitle, requestedIsCompleted) => {
    this.whereToSend(requestedId, requestedTitle, requestedIsCompleted);
    const todos = this.state.todos.map((todo) => {
      if (todo.id !== requestedId) return todo;

      return { ...todo, isCompleted: !todo.isCompleted };
    });
    this.setState({ todos });
    // this.setState({ todos: this.state.todos.filter(({ id }) => id !== requestedId) });
  }

  whereToSend = (id, title, isCompleted) => {
    const completedOne = {
      id, title, isCompleted: !isCompleted,
    };
    this.setState({ completedTodos: [...this.state.completedTodos, completedOne] });
    console.log(this.state.completedTodos);
  }

  handleItemClick = ({ id, checked }) => {
    // const todos = this.state.todos.map((todo) => {
    //   if (todo.id !== id) return todo;

    //   return { ...todo, isCompleted: !todo.isCompleted };
    // });
    // this.setState({ todos });
    console.log(id, checked);
    this.setState({
      todos: this.state.todos.map(todo => (todo.id === id ? { ...todo, isCompleted: checked } : todo)),
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Todo</h1>
          <div>Add a new task</div>
          <TodoForm onSubmitButtonClick={this.handleSubmitButtonClick} />
          <TodoList todos={this.state.todos} onDeleteButtonClick={this.handleCompleteButtonClick} />
          <CompletedTodoList completedTodos={this.state.completedTodos} />
          <TodoCheckboxList todos={this.state.todos} handleItemClick={this.handleItemClick} />
        </div>
      </div>
    );
  }
}

export default App;
