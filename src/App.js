import React, { Component } from 'react'

class Box extends Component {
  render() {
    return (
      <div style={{ border: '1px solid cyan', margin: 5, padding: 5 }}>
        {this.props.children}
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>Children props</h4>
        <Box>Hola! Soy un Children!</Box>
        <Box>Soy un children que adopta propiedades</Box>
        <Box>Todos los Box de la app tendrán las mismas props</Box>
      </div>
    )
  }
}

export default App
