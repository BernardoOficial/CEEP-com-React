import React, { Component } from 'react';

import "./index.css"

class ListaDeCategorias extends Component {

    constructor() {
        super();

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

    handleEventoInput(e) {

        if (e.key === "Enter") {

            const novaCategoria = e.target.value;
            e.target.value = "";

            this.props.criarNovaCategoria(novaCategoria);
        }
    }

    render() {
        return (
            <section className="categorias__content">
                <ul className="listadecategorias">
                    {this.props.categorias.categorias.map((categoria, key) => {
                        return <li key={key} >{categoria}</li>
                    })}
                </ul>
                <input
                    type="text"
                    name="categoria"
                    placeholder="Adicionar categoria"
                    onKeyUp={this.handleEventoInput.bind(this)}
                />
            </section>
        );
    }
}

export default ListaDeCategorias;