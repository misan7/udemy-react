import React, { Component } from 'react'

class App extends Component {
  // constructor por defecto:
  // constructor (...args) {
  //   super(...args)
  // }

  constructor (props) {
    super(props)  // Método que llama al constructor de la clase de la que extendemos, en este caso 'Component'
    // inicializamos el state del componente con todas las variables que queramos
    this.state = { mensajeInicial: 'Mensaje Inicial'}
    // bindeamos el contexto al Método
    // this.handleClick = this.handleClick.bind(this)
  }

  // Con arrow function es más limpio que con bind
  handleClick = () => {
    this.setState({ mensajeInicial: 'Mensaje Cambiado'})
  }

  render() {
    return (
      <div className="App">
        <h4>Ciclo de montaje: constructor</h4>
        {this.state.mensajeInicial}
        <button onClick={this.handleClick}>
          Cambiar mensaje
        </button>
      </div>

    )
  }
}

export default App
