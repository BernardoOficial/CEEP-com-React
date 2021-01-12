import React, { Component } from 'react'
import "./index.css"

class FormularioCadastro extends Component {

    render() {

        return (
            <form className="formulario__cadastro">
                <input
                    className="formulario__cadastro__input"
                    type="text"
                    placeholder="Título da tarefa"
                />
                <textarea
                    className="formulario__cadastro__textarea"
                    placeholder="Digite a tarefa..."
                />
                <button
                    className="formulario__cadastro__button">
                    Criar Tarefa
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;