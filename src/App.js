import React, { Component } from 'react'

class App extends Component {
  render() {
    const numbers = [1, 1, 3, 4, 5, 6]

    return (
      <div className="App">
        <h4>Lista utilizando map</h4>
        {numbers.map((number, index) => {
          return <p key={index}>Soy el número {number}</p>
        })}
      </div>
    )
  }
}

export default App
