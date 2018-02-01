import React, { Component } from 'react';

class Title extends Component {
  render() {
    return <h1>{this.props.text}</h1>
  }
}

Title.defaultProps = {
  text: 'Esto es un título por defecto'
}

class App extends Component {
  render() {
    return <Title/>
  }
}

export default App;
