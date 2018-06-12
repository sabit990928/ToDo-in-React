import React, { PureComponent } from 'react';
import uuidv1 from 'uuid';

import { TodoForm, TodoList } from './components';
import CompletedTodoList from './components/CompletedTodoList';

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
      id, title: todo, isGoing: true,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  didIt = (requestedId, requestedTitle, requestedIsGoing) => {
    console.log(requestedId, requestedTitle, requestedIsGoing);
    this.whereToSend(requestedId, requestedTitle, requestedIsGoing);
    this.setState({ todos: this.state.todos.filter(({ id }) => id !== requestedId) });
  }

  whereToSend = (id, title, isGoing) => {
    const completedOne = {
      id, title, isGoing: !isGoing,
    };
    this.setState({ completedTodos: [...this.state.completedTodos, completedOne] });
    console.log(this.state.completedTodos);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Todo</h1>
          <div>Add a new task</div>
          <TodoForm onSubmitButtonClick={this.handleSubmitButtonClick} />
          <TodoList todos={this.state.todos} onDeleteButtonClick={this.didIt} />
          <CompletedTodoList completedTodos={this.state.completedTodos} />
        </div>
      </div>
    );
  }
}

export default App;
