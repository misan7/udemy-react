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
    // render () {
    //     console.log('render')
    //     // Si el contenido de 'mensaje' es 'mensaje inicial' se renderizará el contenido y sino el contenido no se renderizará (null)
    //     return this.state.mensaje === 'mensaje inicial' ? 'Contenido mostrado!' : null
    // }
    render () {
        console.log('render')
        return [
        <h1 key='A'>Primer Fragmento</h1>,
        <HellRender key='B' />,
        <HellRender key='C' />,
        <h1 key='D'>Cuarto Fragmento</h1>
        ]
    }
}

export default Render