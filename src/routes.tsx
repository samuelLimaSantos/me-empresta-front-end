/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import CreateProduct from './pages/CreateProduct';
import Home from './pages/Home';
import Product from './pages/Product';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import AboutUs from './pages/AboutUs';

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
        <Route path="/product/:id" component={Product} />
        <Route path="/about-us" component={AboutUs} />
        <PrivateRoute path="/new-product" component={CreateProduct} isPrivate />
        <PrivateRoute path="/profile" component={Profile} isPrivate />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
