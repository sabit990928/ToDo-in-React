import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';

import './App.css';

class App extends Component {
  state = { task: '', list: [] };


  onAddPress = () => {
    const helpList = [...this.state.list, this.state.task];
    this.setState({ list: helpList, task: '' });
    console.log(this.state);
  }

  handleChange = (event) => {
    const { target: { value } } = event;
    this.setState({ task: value });
  };

  didIt = (index) => {
    const array = [...this.state.list];
    array.splice(index, 1);
    this.setState({ list: array });
    console.log(this.state.task, index);
  }

  // delete = (id) => {
  //   this.setState(prevState => ({
  //     list: prevState.list.filter(el => el !== id),
  //   }));
  // }

  render() {
  //   const todoNode = this.state.list.map(todo => todo);
    return (

      <div className="App">
        <div id="app" />
        <div className="container">
          <h1>Todo</h1>
          <form>
            <div>
              Add a new task
              <br />
              <input
                type="text"
                name="task"
                placeholder="I want to..."
                value={this.state.task}
                onChange={this.handleChange}
              />
              <Button className="button" onClick={this.onAddPress}>Add</Button>
            </div>
          </form>
          <ol>
            {
              this.state.list.length > 0 &&
              this.state.list.map((task, index) => <li key={index} >{task} <span onClick={() => this.didIt(index)}>"DELETE"</span></li>)
            }
          </ol>
          <form>
            <input
              type="checkbox"
              value={this.state.list}
            />
          </form>

        </div>
      </div>
    );
  }
}

export default App;
