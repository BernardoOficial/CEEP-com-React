import React, { Component } from 'react'
import CardLista from '../CardLista/CardLista'
import "./index.css"

class ListaDeTarefas extends Component {

    render() {

        return (
            <ul className="lista__tarefas">
                {Array.of("1ª Tarefa", "2ª Tarefa", "3ª Tarefa").map((categoria, index) => {
                    return (
                        <li key={index}>
                            <CardLista titulo={categoria} />
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default ListaDeTarefas;