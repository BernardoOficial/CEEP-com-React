import React, { Component } from 'react'
import CardLista from '../CardLista/CardLista'
import "./index.css"

class ListaDeTarefas extends Component {

    constructor() {
        super();

        this.state = { tarefas: [], tarefasSelecionadas: [] };

        this._novasTarefas = this._novasTarefas.bind(this);
        this._selecionarTarefa = this._selecionarTarefa.bind(this);
    }

    componentDidMount() {
        this.props.tarefas.inscrever(this._novasTarefas);
        this.props.tarefas.inscreverTarefasSelecionadas(this._selecionarTarefa);
    }

    componentWillUnmount() {
        this.props.tarefas.desinscrever(this._novasTarefas);
    }

    _novasTarefas(tarefas) {
        this.setState({ ...this.state.tarefas, tarefas });
    }

    _selecionarTarefa(tarefasSelec) {
        this.setState({ ...this.state.tarefasSelecionadas, tarefasSelecionadas: tarefasSelec });
    }

    render() {

        const isEventoInput = this.state.tarefasSelecionadas.length !== 0;

        if (isEventoInput) {

            return (
                <ul className="lista__tarefas">
                    {this.state.tarefasSelecionadas.map((tarefa, index) => {
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

        return (
            <ul className="lista__tarefas">
                {this.props.tarefas.tarefas.map((tarefa, index) => {
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