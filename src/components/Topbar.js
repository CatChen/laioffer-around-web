import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/Topbar.css';

export function Topbar() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Around</h1>
    </header>
  );
}
