import React, { Component } from 'react'

class FormularioCadastro extends Component {

    render() {

        return (
            <form>
                <input type="text" placeholder="Título da tarefa"></input>
                <textarea placeholder="Digite a tarefa..." />
                <button>Criar Tarefa</button>
            </form>
        );
    }
}

export default FormularioCadastro;