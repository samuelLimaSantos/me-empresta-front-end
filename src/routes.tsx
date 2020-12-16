/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import CreateProduct from './pages/CreateProduct';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';

const Routes: React.FC = () => {
  function PrivateRoute({ isPrivate, ...rest }: any) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if ((isPrivate && !token) || (isPrivate && !userId)) {
      return <Redirect to="login" />;
    }

    return <Route {...rest} />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <PrivateRoute path="/new-product" component={CreateProduct} isPrivate />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
