import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import MathematicalCalculatorPage from './containers/MathematicalCalculatorPage'

export default () => (
  <App>
    <Switch>
      <Route path="/math" component={MathematicalCalculatorPage} />
      <Route path={routes.COUNTER} component={CounterPage} />
      <Route
        path={routes.HOME}
        component={HomePage}
        comment="must be bottom as /"
      />
    </Switch>
  </App>
);
