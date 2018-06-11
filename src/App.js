import React, { PureComponent } from 'react';
import uuidv1 from 'uuid';

import { TodoForm, TodoList } from './components';

import './App.css';

class App extends PureComponent {
  // state = { list: [] };
  state = {
    todos: [],
  };

  handleSubmitButtonClick = (todo) => {
    const id = uuidv1();
    const newTodo = {
      id, title: todo, isGoing: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  didIt = requestedId =>
    this.setState({ todos: this.state.todos.filter(({ id }) => id !== requestedId) });

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Todo</h1>
          <div>Add a new task</div>
          <TodoForm onSubmitButtonClick={this.handleSubmitButtonClick} />
          <TodoList todos={this.state.todos} onDeleteButtonClick={this.didIt} />
        </div>
      </div>
    );
  }
}

export default App;
