import React, { Component } from 'react'

class App extends Component {
  handleClick(e){
    console.log(e)
    console.log(e.nativeEvent)
    alert('Me has clicado :O')
  }

  render() {
    return (
      <div className="App">
        <h4>Eventos</h4>
        <button onClick={this.handleClick}>Haz click en mí!</button>
      </div>
    )
  }
}

export default App
