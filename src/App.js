import React, { Component } from 'react'
import FormularioCadastro from './components/FormularioCadastro/';
import ListaDeTarefas from './components/ListaDeTarefas/'

import "./assets/App.css"
import "./assets/index.css"

class App extends Component {

  render() {
    return (
      <section>
        <FormularioCadastro />
        <ListaDeTarefas />
      </section>
    )
  }
}

export default App;