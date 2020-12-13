import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Register from './pages/Register';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
