import React, { Component } from 'react'

class App extends Component {
  render() {

    return (
      <div className="App">
        <h4>Eventos</h4>
        <button onClick={() => alert('Me has clicado :O')}>Haz click en mí!</button>
      </div>
    )
  }
}

export default App
