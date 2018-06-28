import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Layout } from 'antd';

import { addTodo, toggleTodo, todoType } from '../actions';
import { TodoForm, TodoList, TodoFilter } from '../components';
import TodoListUtils from '../utils/TodoListUtils';

import '../App.css';

const { Header, Content, Footer } = Layout;
const HEADER_HEIGHT = 50;
const FOOTER_HEIGHT = 100;
const StyledLayout = styled(Layout)`
  margin: 0 20%;
`;

const StyledContent = styled(Content)`
  min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeaderText = styled.h1`
  text-align: center;
  color: white;
  height: ${HEADER_HEIGHT}px;
`;

const StyledFooter = styled(Footer)`
  height: ${FOOTER_HEIGHT}px;
`;

class TodoPage extends PureComponent {
    handleSubmitButtonClick = (todo) => {
      this.props.addTodo(todo);
    }

    handleTodoClick = ({ id, checked }) => {
      this.props.toggleTodo({ id, isCompleted: checked });
    }
    handleTodoTypeChange = ({ target: { name } }) => this.props.todoType(name);

    render() {
      const todos = TodoListUtils.filterTodo({
        todos: this.props.todos,
        todoType: this.props.typeTodo.type,
      });
      return (
        <div className="App">
          <StyledLayout>
            <Header><StyledHeaderText>Todo</StyledHeaderText></Header>
            <br />
            <StyledContent>
              <TodoForm onSubmitButtonClick={this.handleSubmitButtonClick} />
              <br />

              <TodoFilter
                currentFilter={this.props.typeTodo.type}
                onTypeChange={this.handleTodoTypeChange}
              /><br />
              <TodoList todos={todos} onTodoClick={this.handleTodoClick} />
            </StyledContent>

            <StyledFooter><hr />Footer</StyledFooter>

          </StyledLayout>
        </div>
      );
    }
}

const mapStateToProps = state => ({
  todos: state.todos,
  todo: state.todo,
  typeTodo: state.typeTodo,
});

export default connect(mapStateToProps, { addTodo, toggleTodo, todoType })(TodoPage);
