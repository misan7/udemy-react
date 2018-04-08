import React, { Component } from "react";
import PropTypes from "prop-types";

const ANIMAL_IMAGES = {
  panda: "https://goo.gl/oNbtoq",
  cat: "https://goo.gl/PoQQXb",
  dolphin: "https://goo.gl/BbiKCd"
};

const ANIMALS = Object.keys(ANIMAL_IMAGES);

class AnimalImage extends Component {
  state = { src: ANIMAL_IMAGES[this.props.animal] };

  componentWillReceiveProps(nextProps) {
    console.log("1. componentWillReceiveProps");
    console.log(nextProps);
    this.setState({ src: ANIMAL_IMAGES[nextProps.animal] });
  }

  shouldComponentUpdate(nextProps) {
      console.log("2. shouldComponentUpdate")
      console.log("anterior:", this.props.animal)
      console.log("actual:", nextProps.animal)
      // Devuelve un booleano
      // Si el método no existe, devuelve por defecto 'true'
      return this.props.animal !== nextProps.animal
  }

  render() {
    console.log("---> Render!");
    return (
      <div>
        <p>Animal selected {this.props.animal}</p>
        <img alt={this.props.animal} src={this.state.src} width="200" />
      </div>
    );
  }
}

AnimalImage.propTypes = {
  animal: PropTypes.oneOf(ANIMALS)
};

class EjemploCicloDeActualizacion extends Component {
  state = { animal: "panda" };

  _renderAnimalButton = animal => {
    return (
      <button
        // disabled={animal === this.state.animal}
        key={animal}
        onClick={() => this.setState({ animal })}
      >
        {animal}
      </button>
    );
  };
  render() {
    return (
      <div>
        <h4>Ciclo de Actualización: ComponentWillReceiveProps</h4>
        {ANIMALS.map(this._renderAnimalButton)}
        <AnimalImage animal={this.state.animal} />
      </div>
    );
  }
}

export default EjemploCicloDeActualizacion;
