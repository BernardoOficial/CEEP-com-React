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
                            {console.log(this.props.tarefas)}
                            <CardLista titulo={tarefa.titulo} texto={tarefa.texto} />
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default ListaDeTarefas;