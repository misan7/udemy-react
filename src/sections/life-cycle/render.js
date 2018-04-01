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

    render () {
        console.log('render')
        return <HellRender />
    }
}

export default Render