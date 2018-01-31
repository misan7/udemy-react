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
    const mappedNumbers = this.props.arrayOfNumbers.map(n => n*2)

    return (
      <div>
        <p>{ mappedNumbers.join(', ') }</p>
        <p>{ this.props.objectWIthInfo.key }</p>
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
        <Text
          arrayOfNumbers={[2,5,6,10]}
          objectWIthInfo={{ key:'value1', key2:'value2' }}
        />
      </div>
    );
  }
}

export default App;
