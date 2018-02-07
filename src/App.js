import React, { Component } from 'react'
import cars from './data/cars.json'

class CarItem extends Component {
  render() {
    const { car } = this.props

    return (
      <li>
        <p>Nombre: {car.manufacturer} {car.model}</p>
        <p>Precio: {car.price}</p>
        <a href={car.wiki} target='_blank'>Link to wiki</a>
      </li>
    )
  }
}
class App extends Component {
  render() {

    return (
      <div className="App">
        <h4>Lista con Objetos</h4>
        <ul>
        {
          cars.map(car => {
            return <CarItem key={car.wiki} car={car}/>
          })
        }
        </ul>
      </div>
    )
  }
}

export default App
