import React, { PureComponent } from 'react';
import uuidv1 from 'uuid';
import styled from 'styled-components';

import { TodoForm, TodoList, TodoFilter } from './components';
import TodoListUtils from './utils/TodoListUtils';

import './App.css';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const TextStyle = styled.h1`
  font-size: 60;
`;

class App extends PureComponent {
  state = {
    todos: [],
    displayTodoType: 'all',
  };

  handleSubmitButtonClick = (todo) => {
    const id = uuidv1();
    const newTodo = {
      id, title: todo, isCompleted: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  handleTodoClick = ({ id, checked }) => this.setState({
    todos: this.state.todos.map(todo =>
      (todo.id === id ? { ...todo, isCompleted: checked } : todo)),
  });

  handleTodoTypeChange = ({ target: { name } }) => this.setState({ displayTodoType: name });

  render() {
    const todos = TodoListUtils.filterTodo({
      todos: this.state.todos,
      todoType: this.state.displayTodoType,
    });
    return (
      <Container className="App">
        <div className="container">
          <TextStyle>Todo</TextStyle>
          <TodoForm onSubmitButtonClick={this.handleSubmitButtonClick} />
          <TodoFilter onTypeChange={this.handleTodoTypeChange} />
          <TodoList todos={todos} onTodoClick={this.handleTodoClick} />
        </div>
      </Container>
    );
  }
}

export default App;
