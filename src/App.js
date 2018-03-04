import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Article extends Component {
  static propTypes = {
    author: PropTypes.string.isRequired
  }
  
  render() {
    const { author, children, date, title } = this.props

    return (
      <section style={{ borderBottom: '1px solid black', marginBottom: 50 }}>
        <h2>{title}</h2>
        {author && <p><em>Escrito por {author}</em></p>}
        <date>{date}</date>
        <article>
          {children}
        </article>
      </section>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>Children props</h4>
        <Article
          date={new Date().toLocaleDateString()}
          title='Artículo sobre la prop children'
        >
          <p>El contenido que envolvemos dentro del componente Article sera enviado al componente como {this.props.children}</p>
          <strong>Y mantiene las etiquetas y componentes añadidos dentro</strong>
        </Article>
      </div>

    )
  }
}

export default App
