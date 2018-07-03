import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter, Redirect, PropsRoute } from 'react-router-dom';
import firebase, { auth } from 'firebase';

import { LoginPage, TodoPage, HomePage, RegisterPage } from './pages';

import './App.css';

const appRoutes = [
  {
    path: '/todo',
    component: TodoPage,
    render: props => <TodoPage {...props} />,
  },
];

// const { isUserAuth } = this.props;
// console.log(this.props.isUserAuth);

const PrivateRoute = ({ component: Component, isUserAuth, ...rest }) => (
  <Route
    {...rest}
    render={props => (isUserAuth
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />)}
  />
);

const AuthRoute = ({ component: Component, isUserAuth, ...rest }) => (
  <Route
    {...rest}
    render={props => (!isUserAuth
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/', state: { from: props.location } }} />)}
  />
);

class App extends PureComponent {
  state = { isUserAuth: false };

  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyCqmfoHGRfPV0oJjQ7qWv5ZVm99PDjOBbA',
      authDomain: 'todo-d3c6c.firebaseapp.com',
      databaseURL: 'https://todo-d3c6c.firebaseio.com',
      projectId: 'todo-d3c6c',
      storageBucket: 'todo-d3c6c.appspot.com',
      messagingSenderId: '336941408236',
    };
    firebase.initializeApp(config);
  }


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage} />
            {/* <PropsRoute /> */}
            <AuthRoute
              path="/login"
              exact
              component={LoginPage}
              isUserAuth={this.state.isUserAuth}
            />
            <AuthRoute
              path="/register"
              exact
              component={RegisterPage}
              isUserAuth={this.state.isUserAuth}
            />
            {appRoutes.map(route => (
              <PrivateRoute
                isUserAuth={this.state.isUserAuth}
                exact
                key={route.path}
                path={route.path}
                component={route.component}
              />
          ))}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   isUserAuth: this.state.auth.isUserAuth,
// });

export default App;
// export default connect(mapStateToProps, null)(App);
