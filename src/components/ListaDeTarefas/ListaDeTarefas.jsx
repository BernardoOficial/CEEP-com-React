import React, { Component } from 'react'
import CardLista from '../CardLista/CardLista'
import "./index.css"

class ListaDeTarefas extends Component {

    constructor() {
        super();

        this.state = { tarefas: [] };
        this._novasTarefas = this._novasTarefas.bind(this);
    }

    componentDidMount() {
        this.props.tarefas.inscrever(this._novasTarefas);
    }

    componentWillUnmount() {
        this.props.tarefas.desinscrever(this._novasTarefas);
    }

    _novasTarefas(tarefas) {
        this.setState({ ...this.state.tarefas, tarefas });
    }

    render() {

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