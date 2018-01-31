import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Tres maneras de crear un Componente:

// 1a-
// function Hello (props) {
//   return <h1>{ props.title }</h1>
// }

// 2a-
// const Hello = (props) => <h1>{ props.title }</h1>

// 3a-
class Hello extends Component {
  render() {
    return <h1>{ this.props.title }</h1>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hello title='Hello from React' />
        </header>
        <p className="App-intro">Esto es un párrafo y <strong>esto es negrita</strong></p>
        <p>Esto es otro párrafo</p>
      </div>
    );
  }
}

export default App;
