import React, { Component } from 'react'
import FormularioCadastro from './components/FormularioCadastro/';
import ListaDeTarefas from './components/ListaDeTarefas/'

import "./assets/index.css"
import "./assets/App.css"

class App extends Component {

  constructor() {
    super();

    this.state = {
      tarefas: this._getTarefasLocalStorage()
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

    this._saveTarefasLocalStorage(novoObjetoEstadoTarefas.tarefas);
  }

  _saveTarefasLocalStorage(tarefas) {

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  _getTarefasLocalStorage() {

    return JSON.parse(localStorage.getItem('tarefas')) || [];
  }

  apagarTarefa(index) {

    const tarefas = this.state.tarefas;
    tarefas.splice(index, 1);

    const novoObjetoEstadoTarefas = {
      tarefas: tarefas
    }

    this.setState(novoObjetoEstadoTarefas);
    this._saveTarefasLocalStorage(novoObjetoEstadoTarefas.tarefas);
  }

  render() {
    return (
      <section>
        <FormularioCadastro
          criarTarefa={this.criarTarefa.bind(this._reference)}
        />
        <ListaDeTarefas
          apagarTarefa={this.apagarTarefa.bind(this._reference)}
          tarefas={this.state.tarefas}
        />
      </section>
    )
  }
}

export default App;