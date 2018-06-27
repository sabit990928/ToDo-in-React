import React, { PureComponent } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { LoginPage, TodoPage } from './components';

import './App.css';

const appRoutes = [
  {
    path: '/login',
    component: LoginPage,
    render: props => <LoginPage {...props} />,
  },
  // {
  //   path: '/Todo',
  //   component: TodoPage,
  //   render: props => <App {...props} />,
  // },
];

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            {appRoutes.map(route => (
              <Route
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
