import React, { Component } from 'react'
import CardLista from '../CardLista/CardLista'
import "./index.css"

class ListaDeTarefas extends Component {

    constructor() {
        super();

        this.tarefasSelecionadas = [];
        this.state = { tarefas: this.tarefasSelecionadas || this.props.tarefas.tarefas };
        this._novasTarefas = this._novasTarefas.bind(this);
    }

    componentDidMount() {
        this.props.tarefas.inscrever(this._novasTarefas);
        this.props.tarefas.inscrever(this._selecionarTarefa);
    }

    componentWillUnmount() {
        this.props.tarefas.desinscrever(this._novasTarefas);
    }

    _novasTarefas(tarefas) {
        this.setState({ ...this.state.tarefas, tarefas });
    }

    _selecionarTarefa(tarefasSelecionadas) {
        this.tarefasSelecionadas = tarefasSelecionadas;
    }

    render() {

        return (
            <ul className="lista__tarefas">
                {this.state.tarefas.map((tarefa, index) => {
                    return (
                        <li key={index}>
                            <CardLista
                                index={index}
                                apagarTarefa={this.props.apagarTarefa}
                                titulo={tarefa.titulo}
                                texto={tarefa.texto}
                                categoria={tarefa.categoria}
                            />
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default ListaDeTarefas;