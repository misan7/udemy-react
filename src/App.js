import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Hello extends Component {
  render() {
    return <h1>{ this.props.title }</h1>
  }
}

class Text extends Component {
  render() {

    const textoSegunBoolean = this.props.boolean ? 'Cierto' : 'Falso'

    return (
      <div>
        <p>{ this.props.text }</p>
        <p>{ this.props.number }</p>
        <p>{ JSON.stringify(this.props.boolean) }</p>
        <p>{ textoSegunBoolean }</p>
      </div>
    )
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
(// Ordenar props alfabéticamente y en separadas líneas )
        <Text
          boolean
          number={ 2 }
          text='Texto string'
        />
      </div>
    );
  }
}

export default App;
