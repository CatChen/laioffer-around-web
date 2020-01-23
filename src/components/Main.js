import React from 'react';
import { Register } from './Register';
import { Login } from './Login';
import { Switch, Route } from 'react-router-dom'
import '../styles/Main.css';

export function Main() {
  return (
    <div className="main">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}
