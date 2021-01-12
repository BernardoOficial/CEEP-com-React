import React, { Component } from 'react'
import CardLista from './CardLista'

class ListaDeTarefas extends Component {

    render() {

        return (
            <ul>
                {Array.of("1ª Tarefa", "2ª Tarefa", "3ª Tarefa").map(categoria => {
                    return (
                        <li>
                            <CardLista titulo={categoria} />
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default ListaDeTarefas;