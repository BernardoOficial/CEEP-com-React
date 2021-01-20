import React, { Component } from 'react'
import CardLista from '../CardLista/CardLista'
import "./index.css"

class ListaDeTarefas extends Component {

    render() {

        return (
            <ul className="lista__tarefas">
                {this.props.tarefas.map((tarefa, index) => {
                    return (
                        <li key={index}>
                            <CardLista
                                index={index}
                                apagarTarefa={this.props.apagarTarefa}
                                titulo={tarefa.titulo}
                                texto={tarefa.texto}
                            />
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default ListaDeTarefas;