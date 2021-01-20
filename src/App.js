import React, { Component } from 'react'
import FormularioCadastro from './components/FormularioCadastro/';
import ListaDeTarefas from './components/ListaDeTarefas/'
import ListaDeCategorias from './components/ListaDeCategorias/ListaDeCategorias';

import "./assets/index.css"
import "./assets/App.css"

class App extends Component {

  constructor() {
    super();

    this.state = {
      tarefas: this._getTarefasLocalStorage(),
      categorias: this._getCategoriasLocalStorage(),
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

  criarNovaCategoria(novaCategoria) {

    const novoEstadoCategorias = [...this.state.categorias, novaCategoria];
    const novoEstado = { ...this.state, categorias: novoEstadoCategorias };

    this.setState(novoEstado);

    this._saveCategoriasLocalStorage(novoEstadoCategorias);
  }

  _saveTarefasLocalStorage(tarefas) {

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  _saveCategoriasLocalStorage(categorias) {

    localStorage.setItem('categorias', JSON.stringify(categorias));
  }

  _getTarefasLocalStorage() {

    return JSON.parse(localStorage.getItem('tarefas')) || [];
  }

  _getCategoriasLocalStorage() {

    return JSON.parse(localStorage.getItem('categorias')) || [];
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
        <main>
          <ListaDeCategorias
            criarNovaCategoria={this.criarNovaCategoria.bind(this)}
            categorias={this.state.categorias}
          />
          <ListaDeTarefas
            apagarTarefa={this.apagarTarefa.bind(this._reference)}
            tarefas={this.state.tarefas}
          />
        </main>
      </section>
    )
  }
}

export default App;