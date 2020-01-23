import React from 'react';
import { Register } from './Register';
import { Login } from './Login';
import '../styles/Main.css';

export function Main() {
  return (
    <div className="main">
      <Login />
    </div>
  );
}
