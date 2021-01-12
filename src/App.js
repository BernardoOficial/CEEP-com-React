import React, { Component } from 'react'
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeTarefas from './components/ListaDeTarefas'

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