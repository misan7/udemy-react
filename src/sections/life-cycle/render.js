import React, { Component } from "react";

const HellRender = (props) => <h1>Hell's Render</h1>


class Render extends Component {
    constructor (props) {
        console.log('constructor')
        super(props)
        this.state = { mensaje: 'mensaje inicial'}
    }

    componentWillMount () {
        console.log('componentWillMount')
    }

    // render () {
    //     console.log('render')
    //     return <HellRender />
    // }
    render () {
        console.log('render')
        // Si el contenido de 'mensaje' es 'mensaje inicial' se renderizará el contenido y sino el contenido no se renderizará (null)
        return this.state.mensaje === 'mensaje inicial' ? 'Contenido mostrado!' : null
    }
}

export default Render