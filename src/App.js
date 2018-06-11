import React, { PureComponent } from 'react';

import { TodoForm, TodoList } from './components';

import './App.css';

class App extends PureComponent {
  state = { list: [] };

  handleSubmitButtonClick = todo =>
    this.setState({ list: [...this.state.list, todo] });

  didIt = index =>
    this.setState({ list: this.state.list.filter((_, ind) => ind !== index) });

  render() {
    console.log('App render');
    return (
      <div className="App">
        <div id="app" />
        <div className="container">
          <h1>Todo</h1>
          <div>Add a new task</div>
          <TodoForm onSubmitButtonClick={this.handleSubmitButtonClick} />
          <TodoList todos={this.state.list} onDeleteButtonClick={this.didIt} />
        </div>
      </div>
    );
  }
}

export default App;
