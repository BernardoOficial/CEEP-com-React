import React, { Component } from 'react'

import "./index.css"

class FormularioCadastro extends Component {

    constructor(props) {
        super(props);
        this._titulo = "";
        this._texto = "";

        // Referência para a instancia da classe
        this._reference = this;
    }

    _handleMudancaTitulo(evento) {

        this._titulo = evento.target.value;
    }

    _handleMudancaTexto(evento) {

        this._texto = evento.target.value;
    }

    _criarTarefa(evento) {

        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarTarefa(this._titulo, this._texto);
    }

    render() {

        return (
            <form className="formulario__cadastro"
                onSubmit={this._criarTarefa.bind(this._reference)}>
                <input
                    className="formulario__cadastro__input"
                    type="text"
                    placeholder="Título da tarefa"
                    onChange={this._handleMudancaTitulo.bind(this._reference)}
                />
                <textarea
                    className="formulario__cadastro__textarea"
                    placeholder="Digite a tarefa..."
                    onChange={this._handleMudancaTexto.bind(this._reference)}
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