import React, { Component } from 'react'
import FormularioCadastro from './components/FormularioCadastro/';
import ListaDeTarefas from './components/ListaDeTarefas/'

import "./assets/App.css"
import "./assets/index.css"

class App extends Component {

  constructor() {
    super();

    this.state = {
      tarefas: []
    }

    this._reference = this;
  }

  criarTarefa(titulo, texto) {

    const novaTarefa = { titulo, texto };
    const novoEstadoTarefas = [...this.state.tarefas, novaTarefa];

    const novoObjetoEstadoTarefas = {
      tarefas: novoEstadoTarefas
    }

    this.setState(novoObjetoEstadoTarefas);
  }

  render() {
    return (
      <section>
        <FormularioCadastro criarTarefa={this.criarTarefa.bind(this._reference)} />
        <ListaDeTarefas tarefas={this.state.tarefas} />
      </section>
    )
  }
}

export default App;