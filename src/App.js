import React, { PureComponent } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import firebase from 'firebase';

import { LoginPage, TodoPage } from './components';

import './App.css';

const appRoutes = [
  {
    path: '/todo',
    component: TodoPage,
    render: props => <TodoPage {...props} />,
  },
];

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
            <Route path="/" exact component={() => <div>Home Page</div>} />
            <AuthRoute path="/login" exact component={LoginPage} isUserAuth />
            <AuthRoute path="/register" exact component={() => <div>Sign up Page</div>} isUserAuth />
            {appRoutes.map(route => (
              <PrivateRoute
                isUserAuth
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

export default App;
