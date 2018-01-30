import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello  World</h1>
        </header>
        <p className="App-intro">Esto es un párrafo y <strong>esto es negrita</strong></p>
        <p>Esto es otro párrafo</p>
      </div>
    );
  }
}

export default App;
