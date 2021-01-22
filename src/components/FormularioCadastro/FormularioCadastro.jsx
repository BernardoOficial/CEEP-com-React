import React, { Component } from 'react'

import "./index.css"

class FormularioCadastro extends Component {

    constructor(props) {
        super(props);
        this._titulo = "";
        this._texto = "";
        this._categoria = "sem categoria";

        this.state = { categorias: [] };

        this._novasCategorias = this._novasCategorias.bind(this);
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this._novasCategorias);
    }

    _novasCategorias(categorias) {
        this.setState({ ...this.state.categorias, categorias });
    }

    _handleMudancaTitulo(evento) {

        this._titulo = evento.target.value;
    }

    _handleMudancaTexto(evento) {

        this._texto = evento.target.value;
    }

    _handleMudancaCategoria(evento) {

        this._categoria = evento.target.value;
    }

    _criarTarefa(evento) {

        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarTarefa(this._titulo, this._texto, this._categoria);
    }

    render() {

        return (
            <form className="formulario__cadastro"
                onSubmit={this._criarTarefa.bind(this)}>
                <select onChange={this._handleMudancaCategoria.bind(this)} className="formulario__cadastro__select">

                    <option disabled={true} selected={true} >Sem categoria</option>

                    {this.props.categorias.categorias.map((categoria, key) => {
                        return <option key={key}>{categoria}</option>
                    })}
                </select>
                <input
                    className="formulario__cadastro__input"
                    type="text"
                    placeholder="Título da tarefa"
                    onChange={this._handleMudancaTitulo.bind(this)}
                />
                <textarea
                    className="formulario__cadastro__textarea"
                    placeholder="Digite a tarefa..."
                    onChange={this._handleMudancaTexto.bind(this)}
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