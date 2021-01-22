import React, { Component } from 'react'
import FormularioCadastro from './components/FormularioCadastro/';
import ListaDeTarefas from './components/ListaDeTarefas/'
import ListaDeCategorias from './components/ListaDeCategorias/ListaDeCategorias';

import Categorias from './dados/Categorias';
import Tarefas from './dados/Tarefas';

import "./assets/index.css"
import "./assets/App.css"
import PesquisaTarefa from './components/PesquisaTarefa';

class App extends Component {

  constructor() {
    super();
    this.categorias = new Categorias();
    this.tarefas = new Tarefas();
  }

  render() {
    return (
      <section>
        <PesquisaTarefa
          tarefas={this.tarefas}
        />
        <FormularioCadastro
          categorias={this.categorias}
          criarTarefa={this.tarefas.criarTarefa.bind(this.tarefas)}
        />
        <main>
          <ListaDeCategorias
            criarNovaCategoria={this.categorias.criarNovaCategoria.bind(this.categorias)}
            categorias={this.categorias}
          />
          <ListaDeTarefas
            apagarTarefa={this.tarefas.apagarTarefa.bind(this.tarefas)}
            tarefas={this.tarefas}
          />
        </main>
      </section>
    )
  }
}

export default App;